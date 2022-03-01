import Briefcase from '../components/icon/BriefCase';
import Grid from '../components/icon/Grid';
import Home from '../components/icon/Home';
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
    url: '/',
    icon: Users,
  },
  {
    id: 3,
    title: 'Pekerjaan',
    url: '/',
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

export { navbarMenu };
