import { useState, useEffect, useRef, useCallback } from 'react';
import { navbarMenu } from '../data/navbar';
import Close from './icon/Close';
import DotsHorizontal from './icon/DotsHorizontal';
import LinkedIn from './icon/Linkedin';
import Search from './icon/Search';
import Learning from './linkedin-product/Learning';
import {
  NavbarButtonMenuItem,
  NavbarDropdownAuthInfo,
  NavbarDropdownMenuItem,
  NavbarMenuItem,
  NavbarMobileButtonMenuItem,
  NavbarMobileMenuItem,
} from './NavbarItem';
import Link from 'next/link';
import Plus from './icon/Plus';

const linkedinProduct = [
  {
    id: 1,
    title: 'Learning',
    url: '/',
    icon: Learning,
  },
  {
    id: 2,
    title: 'Wawasan',
    url: '/',
    icon: Learning,
  },
  {
    id: 3,
    title: 'posting Pekerjaan',
    url: '/',
    icon: Learning,
  },
  {
    id: 4,
    title: 'Pasang Iklan',
    url: '/',
    icon: Learning,
  },
  {
    id: 5,
    title: 'Temukan Prospek',
    url: '/',
    icon: Learning,
  },
  {
    id: 6,
    title: 'Groups',
    url: '/',
    icon: Learning,
  },
  {
    id: 7,
    title: 'Marketplace Layanan',
    url: '/',
    icon: Learning,
  },
  {
    id: 8,
    title: 'Gaji',
    url: '/',
    icon: Learning,
  },
];

const linkedinBusiness = [
  {
    id: 1,
    title: 'Solusi Bakat',
    description: 'Temukan, tarik perhatian, dan rekrut kandidat berkualitas',
    url: '/',
  },
  {
    id: 2,
    title: 'Solusi Penjualan',
    description: 'Menemukan peluang penjualan',
    url: '/',
  },
  {
    id: 3,
    title: 'Posting pekerjaan gratis',
    description: 'Pastikan posting pekerjaan Anda dilihat oleh kandidat terbaik',
    url: '/',
  },
  {
    id: 4,
    title: 'Solusi Pemasaran',
    description: 'Dapatkan pelanggan dan kembangkan bisnis Anda',
    url: '/',
  },
  {
    id: 5,
    title: 'Solusi Pembelajaran',
    description: 'Kembangkan keahlian di seluruh bagian organisasi Anda',
    url: '/',
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownAuth, setDropdownAuth] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mobileMenuRef = useRef();
  const dropdownAuthRef = useRef();
  const sidebarRef = useRef();

  const handleClickWindow = useCallback(
    (e) => {
      if (mobileMenu && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }

      if (dropdownAuth && !dropdownAuthRef.current.contains(e.target)) {
        setDropdownAuth(false);
      }

      if (sidebarOpen && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    },
    [mobileMenu, dropdownAuth, sidebarOpen]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickWindow);

    return () => {
      window.removeEventListener('click', handleClickWindow);
    };
  }, [handleClickWindow]);

  const handleOpenDropdownAuth = () => {
    setDropdownAuth(true);
    setTimeout(() => {
      setMobileMenu(false);
      setSidebarOpen(false);
    });
  };

  const handleOpenMobileMenu = () => {
    setMobileMenu(true);
    setTimeout(() => {
      setDropdownAuth(false);
      setSidebarOpen(false);
    });
  };

  const handleOpenSidear = () => {
    setSidebarOpen(true);
    setTimeout(() => {
      setMobileMenu(false);
      setDropdownAuth(false);
    });
  };

  return (
    <>
      <div className='w-full h-[52px] bg-white px-3 shadow-sm sm:px-6 relative z-50'>
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
                    handleOpenDropdownAuth={handleOpenDropdownAuth}
                    handleOpenSidear={handleOpenSidear}
                  />

                  {item.auth && dropdownAuth && (
                    <div
                      ref={dropdownAuthRef}
                      className='absolute w-[264px] z-20 bg-white top-0 mt-9 sm:mt-12 md:mt-14 right-0 shadow-lg rounded-md p-2 ring-1 ring-gray-200'
                    >
                      <NavbarDropdownAuthInfo />
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
              onClick={handleOpenMobileMenu}
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
                        handleOpenDropdownAuth={handleOpenDropdownAuth}
                        handleOpenSidear={handleOpenSidear}
                      />
                    ) : (
                      <NavbarMobileMenuItem key={item.id} item={item} />
                    )
                  )}
              </div>
            )}
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50'
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(false);
          }}
        />
      )}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className='fixed overflow-y-scroll scrollbar-hide w-[380px] h-screen bg-white top-0 mt-[52px] right-0 shadow-lg rounded-tl-xl rounded-bl-xl ring-1 ring-gray-300'
        >
          <div className='h-16 w-full flex justify-end items-end px-3 sticky top-0 bg-white pb-4'>
            <button
              onClick={() => setTimeout(() => setSidebarOpen(false))}
              className='p-1 cursor-pointer bg-opacity-75 hover:bg-zinc-200 rounded-full focus:outline-none transition duration-150 ease-in-out'
            >
              <Close className='w-7 h-7 text-gray-500' />
            </button>
          </div>
          <div className='px-[1.3rem] mb-20'>
            <div className='border border-gray-200 rounded-lg divide-y mb-3'>
              <div className='py-4 px-6'>
                <h4 className='block font-semibold text-gray-600 text-left'>
                  Lihat Produk LinkedIn Lainya
                </h4>
              </div>
              <div className='py-4 px-6 grid grid-cols-4 gap-x-8 gap-y-4'>
                {linkedinProduct.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a key={item.id} className='flex flex-col items-center space-y-1'>
                      <div className='border w-max rounded-md hover:shadow-md'>
                        <item.icon />
                      </div>
                      <span className='block text-xs text-gray-500 text-center'>{item.title}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className='border border-gray-200 rounded-lg divide-y'>
              <div className='py-4 px-6'>
                <h4 className='block font-semibold text-gray-600 text-left'>
                  Layanan Bisnis LinkedIn
                </h4>
              </div>
              <div className='py-2 px-6'>
                {linkedinBusiness.map((item) => (
                  <Link key={item.id} href={item.url}>
                    <a className='block mb-3 hover:underline'>
                      <h4 className='block text-sm font-semibold'>{item.title}</h4>
                      <h5 className='block text-xs text-gray-500'>{item.description}</h5>
                    </a>
                  </Link>
                ))}
              </div>
              <div className='py-3 px-6'>
                <Link href={'/'}>
                  <a className='font-semibold text-sm text-gray-600 text-left flex items-center hover:underline'>
                    <span>Buat Halaman Perusahaan</span>
                    <Plus className='w-5 h-5' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
