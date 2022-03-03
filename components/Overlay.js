const Overlay = ({ handleClose }) => {
  return <div className='fixed inset-0 bg-black bg-opacity-50' onClick={handleClose} />;
};

export default Overlay;
