import FooterAuth from '../components/FooterAuth';
import Linkedintext from '../components/icon/Linkedintext';
import Link from 'next/link';
import AuthInput from '../components/AuthInput';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/authContext';

const Anchor = ({ children }) => {
  return (
    <span className='inline-block text-[#0a66c2] hover:underline cursor-pointer'>{children}</span>
  );
};

const Signup = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [signupLoading, setSignupLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      setErrorMessage(null);
      // router.push('/signin');
    } catch (error) {
      console.log(error);
      setSignupLoading(false);
      setErrorMessage(error.message);
      setData({
        ...data,
        password: '',
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!loading && user) router.replace('/');

  return (
    <div className='px-8 bg-white min-h-screen flex flex-col justify-center'>
      <Link href='/'>
        <a className='w-full h-[66px] flex justify-center items-end pb-2 md:px-14'>
          <Linkedintext className='w-[135px] h-[33px]' />
        </a>
      </Link>
      <h4 className='block text-[32px] text-gray-800 text-center mb-4 mt-2'>
        Dapatkan manfaat maksimal dari dunia profesional Anda
      </h4>
      <div className='bg-white sm:w-[352px] md:rounded-xl md:shadow-lg mx-auto md:p-6 md:ring-1 md:ring-zinc-200'>
        <form onSubmit={handleSubmit} className='space-y-4 mt-6'>
          {errorMessage && (
            <div className='bg-red-500 px-4 py-4 rounded-md w-full'>
              <span className='block text-white font-semibold tracking-tight'>
                {'Masukan email dan password dengan bener!'}
              </span>
            </div>
          )}
          <AuthInput label='Email' name='email' value={data.email} onChange={handleChange} />
          <AuthInput
            label='Kata Sandi'
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            password={true}
          />
          <p className='block text-gray-700 text-xs text-center'>
            Dengan mengeklik Setuju & Bergabung, Anda menyetujui{' '}
            <Anchor>Perjanjian Pengguna</Anchor>,<Anchor>Kebijakan Privasi</Anchor>, dan{' '}
            <Anchor>Kebijakan Cookie</Anchor> LinkedIn.
          </p>
          <div className='flex flex-col space-y-3'>
            <button
              onClick={handleSubmit}
              className='block w-full py-3 focus:outline-none bg-[#0a66c2] rounded-full font-semibold text-white'
            >
              {signupLoading ? 'Loading...' : 'Setuju & Bergabung'}
            </button>
          </div>
        </form>
      </div>
      <div className='mt-8 mb-8 md:mb-0 text-center'>
        <p className='inline-block text-gray-700 mr-1'>Sudah Bergabung di LinkedIn?</p>
        <Link href={'/signin'}>
          <a className='inline-block font-semibold text-blue-600'>Login</a>
        </Link>
      </div>
      <FooterAuth />
    </div>
  );
};

export default Signup;
