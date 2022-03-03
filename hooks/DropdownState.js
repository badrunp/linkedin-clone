import { useRef, useState, useCallback, useEffect } from 'react';

const DropdownState = (type = 'default') => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleClickWindow = useCallback(
    (e) => {
      if (open && !ref.current.contains(e.target)) {
        setOpen(false);
      } else if (open && type == 'mobile') {
        setOpen(false);
      }
    },
    [open, type]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickWindow);

    return () => {
      window.removeEventListener('click', handleClickWindow);
    };
  }, [handleClickWindow]);

  const handleClose = () => {
    setTimeout(() => setOpen(false));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return [open, handleOpen, handleClose, ref];
};

export default DropdownState;
