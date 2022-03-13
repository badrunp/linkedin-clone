import Briefcase from '../components/icon/BriefCase';
import Grid from '../components/icon/Grid';
import Home from '../components/icon/Home';
import Learning from '../components/icon/linkedin-product/Learning';
import Message from '../components/icon/Message';
import Notification from '../components/icon/Notification';
import Users from '../components/icon/Users';

const navbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    id: 2,
    title: 'Jaringan Saya',
    url: '/signup',
    icon: Users,
  },
  {
    id: 3,
    title: 'Pekerjaan',
    url: '/signin',
    icon: Briefcase,
  },
  {
    id: 4,
    title: 'Pesan',
    url: '/',
    icon: Message,
  },
  {
    id: 5,
    title: 'Notifikasi',
    url: '/',
    icon: Notification,
  },
  {
    id: 6,
    title: 'Saya',
    url: '/',
    icon: true,
    auth: true,
    dropdown: true,
    children: [
      {
        id: 1,
        title: 'Akun',
        url: null,
      },
      {
        id: 2,
        title: 'Pengaturan & Privasi',
        url: '/',
      },
      {
        id: 3,
        title: 'Bantuan',
        url: '/',
      },
      {
        id: 4,
        title: 'Bahasa',
        url: '/',
      },
      {
        id: 5,
        title: 'Kelola',
        url: null,
      },
      {
        id: 6,
        title: 'Posting & Aktivitas',
        url: '/',
      },
      {
        id: 7,
        title: 'Akun Posting Pekerjaan',
        url: '/',
      },
      {
        id: 8,
        title: 'Logout',
        url: null,
        button: true,
      },
    ],
  },
  {
    id: 7,
    title: 'Kerja',
    url: '/',
    icon: Grid,
    dropdown: true,
  },
  {
    id: 8,
    title: 'Coba Premium Gratis',
    url: '/',
    icon: null,
  },
];

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

const MainRightMenuItem = [
  {
    id: 1,
    title: 'Tentang',
    url: '/',
  },
  {
    id: 2,
    title: 'Aksesibilitas',
    url: '/',
  },
  {
    id: 3,
    title: 'Pusat Bantuan',
    url: '/',
  },
  {
    id: 4,
    title: 'Privasi & Ketentuan',
    url: '/',
  },
  {
    id: 5,
    title: 'Opsi Iklan',
    url: '/',
  },
  {
    id: 6,
    title: 'Periklanan',
    url: '/',
  },
  {
    id: 7,
    title: 'Layanan Bisnis',
    url: '/',
  },
  {
    id: 8,
    title: 'Dapatkan Aplikasi linkedIn',
    url: '/',
  },
  {
    id: 9,
    title: 'Lainnya',
    url: '/',
  },
];

export { navbarMenu, linkedinProduct, linkedinBusiness, MainRightMenuItem };
