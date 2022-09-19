import { useState } from 'react';
import { SplitPane } from 'react-multi-split-pane';

function SplitView({ iframe, ...props }) {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <SplitPane
      onDragStarted={() => setIsDragging(true)}
      split='vertical'
      onDragFinished={() => setIsDragging(false)}
      // defaultSizes={[1, 0]}
      minSize={[336, 24]}
      className='!relative mx-auto !flex-col sm:!flex-row !overflow-visible sm:!items-stretch !h-auto'
      // maxSize={"calc(100% - 16px)"}
    >
      <iframe
        src={`/examples/${iframe.url}`}
        className={`w-full ${iframe.height ? iframe.height : `h-[496px] `}  ${
          isDragging ? 'pointer-events-none' : ''
        }`}
      />
      <div className='w-full h-full bg-gray-300/40 dark:bg-gray-500/20' />
    </SplitPane>
  );
}

export default SplitView;
