import { navbarMenu } from '../data/navbar';
import { useAuth } from '../hooks/authContext';
import DropdownState from '../hooks/DropdownState';
import DotsHorizontal from './icon/DotsHorizontal';
import LinkedIn from './icon/Linkedin';
import Search from './icon/Search';
import {
  NavbarButtonMenuItem,
  NavbarDropdownAuthInfo,
  NavbarDropdownMenuItem,
  NavbarMenuItem,
  NavbarMobileButtonMenuItem,
  NavbarMobileMenuItem,
} from './NavbarItem';
import Overlay from './Overlay';
import { SidebarMain } from './sidebar';

const Navbar = () => {
  const [mobileMenu, mobileMenuOpen, __, mobileMenuRef] = DropdownState('mobile');
  const [dropdownAuth, dropdownAuthOpen, _, dropdownAuthRef] = DropdownState();
  const [sidebar, sidebarOpen, sidebarClose, sidebarRef] = DropdownState();
  const { user } = useAuth();

  return (
    <>
      <div className='w-full h-[52px] sticky top-0 bg-white px-3 shadow-sm sm:px-6 z-40'>
        <div className='h-full xl:w-[1128px] mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <LinkedIn />

            <div className='relative rounded hidden w-[280px] bg-[#eef3f8] h-[34px] lg:flex items-center space-x-1 pl-[36px] pr-2'>
              <Search className='absolute left-4' />
              <input
                type='text'
                className='bg-transparent focus:outline-none text-sm placeholder:text-gray-600 w-full'
                placeholder='Cari'
              />
            </div>
          </div>
          <div className='text-xs flex flex-row items-center h-full flex-grow lg:flex-grow-0 ml-1 sm:ml-0 justify-end'>
            <div className='flex lg:hidden flex-col items-center w-[45px]'>
              <Search className='w-6 h-6 text-gray-600' />
              <span className='hidden md:block text-gray-500'>Cari</span>
            </div>

            {navbarMenu.map((item) =>
              item.dropdown ? (
                <div key={item.id} className='relative'>
                  <NavbarButtonMenuItem
                    item={item}
                    handleOpenDropdownAuth={dropdownAuthOpen}
                    handleOpenSidear={sidebarOpen}
                    src={user?.photo || ''}
                  />

                  {item.auth && dropdownAuth && (
                    <div
                      ref={dropdownAuthRef}
                      className='absolute w-[264px] z-20 bg-white top-0 mt-9 sm:mt-12 md:mt-14 right-0 shadow-lg rounded-md p-2 ring-1 ring-gray-200'
                    >
                      <NavbarDropdownAuthInfo src={user?.photo || ''} />
                      <div className='flex flex-col'>
                        {item.children.map((item) => (
                          <NavbarDropdownMenuItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavbarMenuItem key={item.id} item={item} />
              )
            )}

            <button
              onClick={mobileMenuOpen}
              className='flex sm:hidden flex-col items-center w-[45px]'
            >
              <DotsHorizontal className='w-6 h-6 text-gray-600' />
            </button>

            {mobileMenu && (
              <div
                ref={mobileMenuRef}
                className='absolute bg-white flex sm:hidden top-0 mt-16 shadow-lg rounded-md px-2 ring-1 ring-gray-200'
              >
                {navbarMenu
                  .slice(3, navbarMenu.length)
                  .map((item) =>
                    item.dropdown ? (
                      <NavbarMobileButtonMenuItem
                        key={item.id}
                        item={item}
                        handleOpenDropdownAuth={dropdownAuthOpen}
                        handleOpenSidear={sidebarOpen}
                        src={user?.photo || ''}
                      />
                    ) : (
                      <NavbarMobileMenuItem key={item.id} item={item} src={user?.photo || ''} />
                    )
                  )}
              </div>
            )}
          </div>
        </div>
      </div>

      {sidebar && <Overlay handleClose={sidebarClose} />}
      {sidebar && (
        <div
          ref={sidebarRef}
          className='fixed overflow-y-scroll z-50 scrollbar-hide w-[380px] h-screen bg-white top-0 mt-[52px] right-0 shadow-lg rounded-tl-xl rounded-bl-xl ring-1 ring-gray-300'
        >
          <SidebarMain sidebarClose={sidebarClose} />
        </div>
      )}
    </>
  );
};

export default Navbar;
