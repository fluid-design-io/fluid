import { Button } from '@fluid-design/fluid-ui';
import { SunIcon } from '@heroicons/react/24/solid';
import * as path from 'path';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { IoIosContrast } from 'react-icons/io';
import {
  MdDarkMode,
  MdFormatTextdirectionLToR,
  MdFormatTextdirectionRToL,
} from 'react-icons/md';

import clsxm from '@/lib/clsxm';

import { useTheme } from '@/store/useTheme';

import windowExists from '@/helpers/window-exists';

export const FunctionalIFrameComponent = ({
  children,
  title,
  preferences,
  ...props
}: {
  children: React.ReactNode;
  title: string;
  preferences: PreferencesProps[];
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const defaultBodyClasses = [
    'bg-grid-gray-300/20',
    'dark:bg-grid-gray-700/20',
    '[background-position:top_left]',
    '[background-attachment:fixed]',
  ];
  const updateHtmlClasses = () => {
    if (typeof window !== 'undefined') {
      const html = iframeRef.current?.contentDocument?.documentElement;
      const body = iframeRef.current?.contentDocument?.body;
      if (html && body) {
        const activePreferenceClasses = preferences
          .map((p) => (p.isActive ? p.name : ''))
          .filter((p) => p !== 'rtl');
        html.className = clsxm(activePreferenceClasses);
        body.className = clsxm(defaultBodyClasses, activePreferenceClasses);

        // update rtl if isActive
        const rtlPreference = preferences.find((p) => p.name === 'rtl');
        if (rtlPreference?.isActive) {
          html.dir = 'rtl';
        } else {
          html.dir = 'ltr';
        }
      }
    }
  };
  const setIframeHeight = ({ iframe, iframeDoc }) => {
    iframe.height = iframeDoc.body.scrollHeight + 'px';
  };
  useEffect(() => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    const cssLink = iframeDoc.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = path.join(process.cwd(), '/iframe/tw-iframe.css');
    // check for css already loaded, check if it contains 'tw-iframe.css'
    if (iframeDoc.head.querySelector('link[href*="tw-iframe.css"]')) {
      return;
    } else {
      iframeDoc.head.appendChild(cssLink);
    }
    updateHtmlClasses();

    if (
      iframeDoc.readyState === 'complete' ||
      iframeDoc.readyState === 'interactive'
    ) {
      setIsIframeLoaded(true);
      setTimeout(() => {
        setIframeHeight({ iframe, iframeDoc });
      }, 1000);
    }
  }, [iframeRef]);
  useEffect(() => {
    if (iframeRef.current) {
      setIsIframeLoaded(true);
      updateHtmlClasses();
    }
  }, [preferences, iframeRef]);

  // Recalculate height on window resize
  const resizeListener = () => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    setIframeHeight({ iframe, iframeDoc });
  };
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('resize', resizeListener);

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', resizeListener);
    };
  }, [iframeRef]);
  if (!windowExists) return null;
  return (
    <iframe
      allowFullScreen
      ref={iframeRef}
      title={title}
      className={clsxm(
        'box-content w-full transition delay-700',
        isIframeLoaded ? 'opacity-100' : 'opacity-0'
      )}
      {...props}
    >
      {isIframeLoaded &&
        createPortal(children, iframeRef.current?.contentDocument?.body)}
    </iframe>
  );
};

interface PreferencesProps {
  name: string;
  icon: {
    active: React.FC;
    inactive: React.FC;
  };
  iconClassName: {
    active: string;
    inactive: string;
  };
  isActive: boolean;
  className: string;
}
export const CodeFrame = ({ title = 'Example', children = null, ...props }) => {
  const prefs = [
    {
      name: 'dark',
      icon: { inactive: MdDarkMode, active: SunIcon },
      iconClassName: {
        active: '',
        inactive: '',
      },
      isActive: false,
      className: 'dark',
    },
    {
      name: 'contrast',
      icon: { inactive: IoIosContrast, active: IoIosContrast },
      iconClassName: {
        active: 'rotate-180',
        inactive: '',
      },
      isActive: false,
      className: 'contrast',
    },
    {
      name: 'rtl',
      icon: {
        inactive: MdFormatTextdirectionRToL,
        active: MdFormatTextdirectionLToR,
      },
      iconClassName: {
        active: '',
        inactive: '',
      },
      isActive: false,
      className: 'rtl',
    },
  ];
  const [preferences, setPreferences] = useState(prefs);
  const { mode } = useTheme();

  const touchStyle =
    'pointer-touch:opacity-100 pointer-touch:pointer-events-auto opacity-0 pointer-events-none code-block-touch';
  const handlePreferences = (value: PreferencesProps['name']) => {
    // Add class to previewRef based on Active preference
    const newPreferences = preferences.map((pref) => {
      if (pref.name === value) {
        pref.isActive = !pref.isActive;
      }
      return pref;
    });
    setPreferences(newPreferences);
  };
  const isPrefDark = preferences.find((p) => p.name === 'dark')?.isActive;
  useEffect(() => {
    if (!windowExists()) return;
    const newPreferences = preferences.map((pref) => {
      if (pref.name === 'dark') {
        pref.isActive = mode === 'dark';
      }
      return pref;
    });
    setPreferences(newPreferences);
  }, [mode]);
  return (
    <>
      <div className='-mx-4 sm:mx-auto'>
        <div
          className={clsxm(
            props.className,
            'code-block-wrap focus-ring not-prose relative my-6 min-h-[8rem] w-full translate-x-0 transform-gpu cursor-auto overflow-hidden border-y border-gray-300/50 transition-colors contrast-more:border-gray-800 dark:border-gray-500/20 dark:bg-gray-900/90 dark:contrast-more:border-gray-100 sm:rounded-xl sm:border'
          )}
        >
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 left-0 right-0 z-10 h-8 w-full [mask-image:linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,1)_85%)]',
              isPrefDark ? ' dark:bg-gray-800' : 'bg-gray-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 w-full [mask-image:linear-gradient(0deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
              isPrefDark ? ' dark:bg-gray-800' : 'bg-gray-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 left-0 bottom-0 z-10 h-full w-8 [mask-image:linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1)_85%)]',
              isPrefDark ? ' dark:bg-gray-800' : 'bg-gray-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 right-0 bottom-0 z-10 h-full w-8 [mask-image:linear-gradient(270deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
              isPrefDark ? ' dark:bg-gray-800' : 'bg-gray-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 left-0 right-0 z-10 mt-2 flex w-full items-stretch justify-between space-x-4 px-4',
              isPrefDark && 'dark'
            )}
          >
            <div
              className={clsxm(
                isPrefDark ? 'text-white' : 'text-gray-500',
                'line-clamp-1'
              )}
            >
              {title}
            </div>
            <div
              className={`pointer-events-auto z-[4] flex flex-shrink-0 justify-center space-x-2 rounded-md bg-gray-50/75 py-1 px-1 backdrop-blur-md backdrop-brightness-90 backdrop-filter motion-safe:transition-opacity contrast-more:shadow-none dark:bg-gray-800/30 dark:shadow-gray-900/20 sm:shadow-md sm:shadow-gray-400/10 ${touchStyle}`}
            >
              {preferences.map(
                (
                  {
                    name,
                    icon: { active: ActiveIcon, inactive: InactiveIcon },
                    iconClassName: {
                      active: activeIconClassName,
                      inactive: inactiveIconClassName,
                    },
                    isActive,
                    className,
                  },
                  i
                ) => (
                  <React.Fragment key={`${title}.${name}`}>
                    {i !== 0 && (
                      <div className='my-2 mx-1 w-[2px] flex-grow-0 bg-gray-400/30 dark:bg-white/10' />
                    )}
                    <Button
                      onClick={() => handlePreferences(name)}
                      className={clsxm(
                        'z-[5] btn-clear-gray-700 dark:btn-clear-gray-200'
                      )}
                      weight='clear'
                      size='xs'
                      sr={name}
                    >
                      <span className=''>
                        {isActive ? (
                          <ActiveIcon
                            className={clsxm('h-4 w-4', activeIconClassName)}
                          />
                        ) : (
                          <InactiveIcon
                            className={clsxm('h-4 w-4', inactiveIconClassName)}
                          />
                        )}
                      </span>
                    </Button>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          <FunctionalIFrameComponent preferences={preferences} title={title}>
            <div
              className={clsxm(
                'mx-auto grid w-[calc(100%-2rem)] place-items-center pt-20 pb-16'
              )}
            >
              {children}
            </div>
          </FunctionalIFrameComponent>
        </div>
      </div>
    </>
  );
};
