import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { navbarMenu } from '../data/navbar';
import { auth } from '../firebase';
import { useAuth } from '../hooks/authContext';
import CarretDown from './icon/CarretDown';

const NavbarMenuItem = ({ item }) => {
  return (
    <Link href={item.url}>
      <a
        className={` ${
          item.id > 3 ? 'hidden sm:flex flex-col items-center' : 'flex flex-col items-center'
        } ${item.id == 7 && 'border-l'} justify-center relative h-full ${
          item.id != navbarMenu.length && 'w-[45px] sm:w-[76px] md:w-[80px]'
        }`}
      >
        {item.id == 1 && (
          <div className='w-4 h-4 bg-red-600 grid place-items-center rounded-full absolute left-7 top-2 sm:left-9 md:top-1 md:left-10'>
            <div className='w-[6px] h-[6px] bg-white rounded-full' />
          </div>
        )}
        {item.icon &&
          (item.auth ? (
            <div className='w-6 h-6 rounded-full overflow-hidden'>
              <img src='/images/profil.jpg' alt='image-profil' />
            </div>
          ) : (
            <item.icon className={`w-6 h-6 ${item.id == 1 ? 'text-gray-900' : 'text-gray-600'}`} />
          ))}
        <div className='hidden md:flex items-center text-center'>
          <span
            className={`block ${
              item.id == 1 ? 'text-gray-900' : item.icon ? 'text-gray-500' : 'text-[#915907]'
            }`}
          >
            {item.title}
          </span>
          {item.dropdown && <CarretDown className='w-4 h-4' />}
        </div>
        {item.id == 1 && (
          <div className='h-[2px] w-full bg-black absolute bottom-0 hidden md:block' />
        )}
      </a>
    </Link>
  );
};

const NavbarButtonMenuItem = ({ item, handleOpenDropdownAuth, handleOpenSidear, src = '' }) => {
  return (
    <button
      onClick={item.auth ? handleOpenDropdownAuth : handleOpenSidear}
      className={` ${
        item.id > 3 ? 'hidden sm:flex flex-col items-center' : 'flex flex-col items-center'
      } ${item.id == 7 && 'border-l'} justify-center relative h-full ${
        item.id != navbarMenu.length && 'w-[45px] sm:w-[76px] md:w-[80px]'
      }`}
    >
      {item.icon &&
        (item.auth ? (
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <img src={src} alt='image-profil' />
          </div>
        ) : (
          <item.icon className={`w-6 h-6 text-gray-600'}`} />
        ))}
      <div className='hidden md:flex items-center text-center'>
        <span className={`block text-gray-500`}>{item.title}</span>
        <CarretDown className='w-4 h-4' />
      </div>
    </button>
  );
};

const NavbarMobileMenuItem = ({ item, src = '' }) => {
  return (
    <Link href={'/'}>
      <a className={`flex flex-col items-center justify-center relative h-full px-2 py-5`}>
        {item.icon &&
          (item.auth ? (
            <div className='w-6 h-6 rounded-full overflow-hidden'>
              <img src={src} alt='image-profil' />
            </div>
          ) : (
            <item.icon className={`w-6 h-6text-gray-600`} />
          ))}
        {!item.icon && (
          <span className={`block text-[#915907] text-center mt-1`}>{item.title}</span>
        )}
      </a>
    </Link>
  );
};

const NavbarMobileButtonMenuItem = ({
  item,
  handleOpenDropdownAuth,
  handleOpenSidear,
  src = '',
}) => {
  return (
    <button
      onClick={item.auth ? handleOpenDropdownAuth : handleOpenSidear}
      className={`flex flex-col items-center justify-center relative h-full px-2 py-5`}
    >
      {item.icon &&
        (item.auth ? (
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <img src={src} alt='image-profil' />
          </div>
        ) : (
          <item.icon className={`w-6 h-6text-gray-600`} />
        ))}
    </button>
  );
};

const NavbarDropdownMenuItem = ({ item }) => {
  const { setUser } = useAuth();
  const handleSignout = () => {
    signOut(auth);
    setUser(null);
  };
  return item.url != null ? (
    <Link href={item.url}>
      <a className='block py-1 text-sm text-gray-500 hover:underline'>{item.title}</a>
    </Link>
  ) : (
    <div className='border-t pt-2 mt-1'>
      {item.button ? (
        <button
          onClick={handleSignout}
          className='block text-left w-full text-sm focus:outline-none text-gray-500 hover:underline'
        >
          {item.title}
        </button>
      ) : (
        <h4 className='block text-base font-semibold'>{item.title}</h4>
      )}
    </div>
  );
};

const NavbarDropdownAuthInfo = ({ src = '' }) => {
  return (
    <div className='flex flex-col space-y-2 pb-2'>
      <div className='flex items-center space-x-1'>
        <div className='w-14 h-14 rounded-full overflow-hidden'>
          <img src={src} alt='image-profil' className='object-cover' />
        </div>
        <div className='flex flex-col'>
          <h4 className='block text-base font-semibold'>Muhammad Badrun</h4>
          <p className='block text-sm'>Freelancer Web Develover</p>
        </div>
      </div>
      <button className='block text-sm text-blue-600 border border-blue-600 rounded-full w-full font-semibold focus:outline-none hover:bg-blue-50 hover:ring-1 hover:ring-blue-700'>
        Lihat Profil
      </button>
    </div>
  );
};

export {
  NavbarMenuItem,
  NavbarButtonMenuItem,
  NavbarMobileMenuItem,
  NavbarMobileButtonMenuItem,
  NavbarDropdownMenuItem,
  NavbarDropdownAuthInfo,
};
