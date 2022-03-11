import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const AuthInput = ({ type = 'text', label, name, value, onChange, password = false }) => {
  const inputRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [mType, setMType] = useState('password');

  const handleFocus = () => {
    if (!isFocus) {
      setIsFocus(true);
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    if (value.length < 1) {
      setIsFocus(false);
    }
  };

  const handleChangeType = (e) => {
    e.preventDefault();
    setMType(mType === 'password' ? 'text' : 'password');
  };

  return (
    <>
      <div
        onClick={handleFocus}
        onBlur={handleBlur}
        className='relative border border-gray-400 pt-[20px] pb-[4px] px-3 rounded cursor-text'
      >
        <input
          ref={inputRef}
          type={password ? mType : type}
          name={name}
          value={value}
          onChange={onChange}
          className='w-full focus:outline-none text-lg text-gray-600'
        />
        <motion.span
          animate={{
            y: isFocus ? -27 : -15,
            x: isFocus ? (password ? -8 : -4) : 0,
            scale: isFocus ? 0.8 : 1,
          }}
          transition={{ type: 'tween', duration: 0.12 }}
          initial={false}
          className={`block text-gray-500 text-lg absolute top-1/2 left-3 -translate-y-1/2`}
        >
          {label}
        </motion.span>
        {password && (
          <button
            onClick={handleChangeType}
            className='block px-2 py-1 rounded-full hover:bg-blue-200 text-[#0a66c2] text-sm font-semibold absolute top-1/2 right-1 -translate-y-1/2 focus:outline-none'
          >
            {mType === 'password' ? 'tampilkan' : 'sembunyikan'}
          </button>
        )}
      </div>
    </>
  );
};

export default AuthInput;
