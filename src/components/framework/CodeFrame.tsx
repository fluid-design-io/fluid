import { CodeFrameProps } from '@/interfaces/CodeBlock';
import { useThemeMode } from '@/lib/ThemeContext';
import clsxm from '@/lib/clsxm';
import { SunIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoIosContrast } from 'react-icons/io';
import {
  MdDarkMode,
  MdFormatTextdirectionLToR,
  MdFormatTextdirectionRToL,
} from 'react-icons/md';

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
  const [contentRef, setContentRef] = useState(null);
  const [mounded, setMounded] = useState(false);
  const [height, setHeight] = useState(100);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const cssLink =
    typeof window !== 'undefined' ? document.createElement('link') : null;
  if (cssLink) {
    cssLink.rel = 'stylesheet';
    cssLink.href = '/iframe/tw-iframe.css';
  }
  const defaultBodyClasses = [
    'bg-grid-gray-300/20',
    'dark:bg-grid-gray-700/20',
    '[background-position:top_left]',
    '[background-attachment:fixed]',
  ];
  const updateHtmlClasses = () => {
    if (typeof window !== 'undefined') {
      const html = contentRef?.contentWindow?.document?.documentElement;
      const body = contentRef?.contentWindow?.document?.body;
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

  useEffect(() => {
    if (mountNode && contentRef && cssLink && !mounded) {
      setMounded(true);
      contentRef.contentWindow.document.head.appendChild(cssLink);
      setTimeout(() => {
        // .childNodes[0] refers to the first div in the body
        const iframeHeight =
          contentRef?.contentWindow?.document?.body?.childNodes[0]
            ?.scrollHeight;
        setHeight(iframeHeight);
        updateHtmlClasses();
      }, 600);
    }
  }, [mountNode, contentRef, cssLink, mounded]);
  useEffect(() => {
    if (mountNode && contentRef) {
      updateHtmlClasses();
    }
  }, [preferences]);
  // Recalculate height on window resize
  const resizeListener = () => {
    if (mountNode && contentRef) {
      const iframeHeight =
        contentRef?.contentWindow?.document?.body?.childNodes[0]?.scrollHeight;
      setHeight(iframeHeight);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('resize', resizeListener);

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', resizeListener);
    };
  }, [contentRef]);

  return (
    <iframe
      title={title}
      ref={setContentRef}
      className={clsxm(
        'box-content w-full transition delay-700',
        mountNode ? 'visible opacity-100' : 'invisible opacity-0'
      )}
      allowFullScreen
      style={{ height }}
      {...props}
    >
      {mountNode && createPortal(children, mountNode)}
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
export const CodeFrame = ({
  title = 'Example',
  children = null,
  ...props
}: CodeFrameProps) => {
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
  const { t } = useTranslation('common');
  const [preferences, setPreferences] = useState(prefs);
  const [mode] = useThemeMode(true);
  const touchStyle =
    'pointer-touch:opacity-100 pointer-touch:pointer-events-auto opacity-0 pointer-events-none code-block-touch';
  const buttonStyle =
    'rounded-md motion-safe:transition relative z-[5] focus-ring ';
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
    if (mode === 'dark') {
      const newPreferences = preferences.map((pref) => {
        if (pref.name === 'dark') {
          pref.isActive = true;
        }
        return pref;
      });
      setPreferences(newPreferences);
    }
  }, [mode]);
  return (
    <>
      <div className='-mx-4 sm:mx-auto'>
        <div
          className={clsxm(
            props.className,
            'code-block-wrap focus-ring not-prose relative my-6 min-h-[8rem] w-full translate-x-0 transform-gpu cursor-auto overflow-hidden border-y border-primary-300/50 transition-colors contrast-more:border-primary-800 dark:border-primary-500/20 dark:bg-primary-900/90 dark:contrast-more:border-primary-100 sm:rounded-xl sm:border'
          )}
        >
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 left-0 right-0 z-10 h-8 w-full [mask-image:linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,1)_85%)]',
              isPrefDark ? ' dark:bg-primary-800' : 'bg-primary-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 w-full [mask-image:linear-gradient(0deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
              isPrefDark ? ' dark:bg-primary-800' : 'bg-primary-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 left-0 bottom-0 z-10 h-full w-8 [mask-image:linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1)_85%)]',
              isPrefDark ? ' dark:bg-primary-800' : 'bg-primary-100'
            )}
          />
          <div
            className={clsxm(
              'pointer-events-none absolute top-0 right-0 bottom-0 z-10 h-full w-8 [mask-image:linear-gradient(270deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
              isPrefDark ? ' dark:bg-primary-800' : 'bg-primary-100'
            )}
          />
          <div
            className={clsxm(
              'absolute top-0 left-0 right-0 z-10 mt-2 flex w-full items-stretch justify-between space-x-4 px-4 pointer-events-none',
              isPrefDark && 'dark'
            )}
          >
            <h5
              className={clsxm(
                isPrefDark ? 'text-white' : 'text-primary-500',
                'line-clamp-1'
              )}
            >
              {title}
            </h5>
            <div
              className={`z-[4] flex flex-shrink-0 pointer-events-auto justify-center space-x-2 rounded-md bg-primary-50/75 py-1 px-1 backdrop-blur-md backdrop-brightness-90 backdrop-filter motion-safe:transition-opacity contrast-more:shadow-none dark:bg-primary-800/30 dark:shadow-primary-900/20 sm:shadow-md sm:shadow-primary-400/10 ${touchStyle}`}
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
                      <div
                        className={`my-2 mx-1 w-[2px] flex-grow-0 bg-primary-400/30 dark:bg-white/10`}
                      />
                    )}
                    <button
                      className={clsxm(
                        `clickable relative flex items-center rounded-md py-1.5 px-2 text-xs font-medium`,
                        buttonStyle,
                        true
                          ? 'text-primary-800 motion-reduce:bg-primary-200/70 motion-reduce:backdrop-blur-md motion-reduce:backdrop-filter dark:text-primary-100 dark:motion-reduce:bg-primary-900/60'
                          : 'hover:text-primary-800 dark:hover:text-primary-100'
                      )}
                      onClick={() => handlePreferences(name)}
                    >
                      <span className='sr-only'>{t(name)}</span>
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
                    </button>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          <FunctionalIFrameComponent title={title} preferences={preferences}>
            <div
              className={clsxm('grid w-full place-items-center pt-20 pb-16')}
            >
              {children}
            </div>
          </FunctionalIFrameComponent>
        </div>
      </div>
    </>
  );
};
