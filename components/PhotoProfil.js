const PhotoProfil = ({ url = '/images/profil.jpg', active = false }) => {
  return (
    <div className='w-12 h-12 rounded-full relative flex-shrink-0'>
      <img src={url} alt='image-profil' className='rounded-full' />
      {active && (
        <div className='bg-[#057642] w-4 h-4 rounded-full absolute bottom-0 border-2 border-white right-0 z-10' />
      )}
    </div>
  );
};

export default PhotoProfil;
