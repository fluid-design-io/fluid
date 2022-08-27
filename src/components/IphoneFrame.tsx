function IphoneFrame({ innerRef, children }) {
  return (
    <div className='max-w-[480px] mx-auto block md:!hidden pt-16'>
      <div className='relative rounded-[3rem] shadow-lg shadow-primary-500/10 dark:shadow-primary-900 mx-[14.5%]'>
        <div className='absolute z-20 w-full h-24 notch-container'>
          <div className='notch w-[36%] h-[1.875rem] mx-auto bg-primary-300 contrast-more:bg-primary-600 dark:contrast-more:bg-primary-200 dark:bg-primary-700 rounded-bl-[1rem] rounded-br-[1rem]' />
        </div>
        <div className='overflow-hidden'>
          <div
            ref={innerRef}
            className='inner aspect-[1.125/2.236] rounded-[3rem] border-[0.825rem] border-primary-300 contrast-more:border-primary-600 dark:contrast-more:border-primary-200 dark:border-primary-700 pb-4 relative flex justify-center items-start overflow-hidden dark:bg-primary-700/50 transform'
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneFrame;
