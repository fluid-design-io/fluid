import { motion } from 'framer-motion';

export const WindowDots = (
  <div className='flex items-center h-8 space-x-1.5 px-3'>
    <div className='w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 contrast-more:bg-gray-400 dark:contrast-more:bg-gray-300 rounded-full' />
    <div className='w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 contrast-more:bg-gray-400 dark:contrast-more:bg-gray-300 rounded-full' />
    <div className='w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 contrast-more:bg-gray-400 dark:contrast-more:bg-gray-300 rounded-full' />
  </div>
);
function WindowFrame({ sidebar = null, content, ...props }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={`rounded-xl border border-gray-200/50 dark:border-gray-700 contrast-more:border-gray-400 dark:contrast-more:border-gray-500 bg-gray-100 dark:bg-gray-700/50 flex overflow-hidden shadow-2xl shadow-gray-600/20 dark:shadow-xl dark:shadow-black/20 ${
        props.className ? props.className : ``
      } `}
    >
      {sidebar && (
        <div className='min-w-[180px] bg-gray-50/70 dark:bg-gray-800/30 flex-col relative pb-1 backdrop-brightness-110 dark:backdrop-brightness-90'>
          {WindowDots}
          <div className='flex items-center justify-center flex-1'>
            <div className='w-full text-sm'>{sidebar}</div>
          </div>
        </div>
      )}
      <div className='relative flex items-center justify-center flex-1 w-full'>
        {!sidebar && (
          <div className='absolute top-0 left-0 z-10'>{WindowDots}</div>
        )}
        <div className='z-[3] flex items-center justify-center flex-1 h-full'>
          {content}
        </div>
        <div className='absolute inset-0 w-full h-full z-[2] bg-grid-white/40 dark:bg-grid-black/10 [mask-image:linear-gradient(180deg,#fff,rgba(255,255,255,0.3))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]' />
      </div>
    </motion.div>
  );
}

export default WindowFrame;
