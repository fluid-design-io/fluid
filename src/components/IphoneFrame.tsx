function IphoneFrame({ innerRef, children }) {
  return (
    <div className='max-w-[480px] mx-auto block md:!hidden pt-16'>
      <div className='relative rounded-[3.125rem] shadow-lg shadow-gray-500/10 dark:shadow-gray-900 mx-[14.5%]'>
        <div className='absolute z-20 w-full h-24 notch-container'>
          <div className='notch w-[28%] h-[1.5rem] mx-auto bg-gray-300 contrast-more:bg-gray-600 dark:contrast-more:bg-gray-200 dark:bg-gray-700 rounded-[1rem] mt-[1.25rem]' />
        </div>
        <div className='overflow-hidden'>
          <div
            className='inner aspect-[1.125/2.236] rounded-[3rem] border-[0.75rem] border-gray-300 contrast-more:border-gray-600 dark:contrast-more:border-gray-200 dark:border-gray-700 pb-4 relative flex justify-center items-start overflow-hidden dark:bg-gray-700/50 transform'
            ref={innerRef}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneFrame;
