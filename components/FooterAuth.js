import Link from 'next/link';
import { footerAuthMenuItem } from '../data/footer';

const FooterAuth = () => {
  return (
    <div className='w-full hidden md:flex items-center justify-center space-x-2 py-8'>
      {footerAuthMenuItem.map((item) =>
        item.dropdown == null ? (
          item.icon != null ? (
            <div key={item.id}>
              <item.icon className='text-black w-[56px] h-[14px]' />
            </div>
          ) : (
            <Link key={item.id} href={item.url}>
              <a className='block text-xs text-gray-500 font-semibold'>{item.title}</a>
            </Link>
          )
        ) : (
          <button key={item.id}></button>
        )
      )}
    </div>
  );
};

export default FooterAuth;
