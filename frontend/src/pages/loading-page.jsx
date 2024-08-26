const LoadingPage = () => {
  return (
    <div className='flex-col gap-4 w-full flex items-center justify-center h-screen'>
      <div className='w-28 h-28 border-8 text-primary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-primary rounded-full'>
        <img
          src='/images/logo.png'
          alt='Loading'
          className='w-6 h-6 animate-ping'
        />
      </div>
    </div>
  );
};

export default LoadingPage;
