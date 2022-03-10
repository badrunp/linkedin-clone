const AuthInput = ({ type = 'text', label, password }) => {
  return (
    <>
      <div className='relative border border-gray-400 pt-[20px] pb-[4px] px-3 rounded'>
        <input type={type} className='w-full focus:outline-none text-lg' />
        <span className='block text-gray-500 text-lg absolute top-1/2 left-3 -translate-y-1/2'>
          {label}
        </span>
        {password && (
          <button className='block px-2 py-1 rounded-full hover:bg-blue-200 text-[#0a66c2] text-sm font-semibold absolute top-1/2 right-1 -translate-y-1/2 focus:outline-none'>
            tampilkan
          </button>
        )}
      </div>
    </>
  );
};

export default AuthInput;
