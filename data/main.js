import Calendar from '../components/icon/Calendar';
import CircleClose from '../components/icon/CircleClose';
import Code from '../components/icon/Code';
import Comentar from '../components/icon/Comentar';
import CopyLink from '../components/icon/CopyLink';
import CreateArticle from '../components/icon/CreateArticle';
import Eye from '../components/icon/Eye';
import EyeOff from '../components/icon/EyeOff';
import Flag from '../components/icon/Flag';
import Like from '../components/icon/Like';
import Photo from '../components/icon/Photo';
import SavePost from '../components/icon/SavePost';
import Send from '../components/icon/Send';
import Share from '../components/icon/Share';
import Video from '../components/icon/Video';

const recomentasion = [
  {
    id: 1,
    name: 'Lowongan Kerja Terbaru',
    title: 'Info Lowongan Kerja Indonesia',
    avatar: '/images/profil.jpg',
  },
  {
    id: 2,
    name: 'Hidayatul Annisa',
    title: 'Recruiter & Psychologist',
    avatar: '/images/profil.jpg',
  },
  {
    id: 3,
    name: 'Ang Harry Tjahjono',
    title: 'General Manager, Human Capital & Corporate Affairs at PT Salam Pacific...',
    avatar: '/images/profil.jpg',
  },
];

const buttonMenuItem = [
  {
    id: 1,
    title: 'Foto',
    type: 'foto',
    icon: Photo,
  },
  {
    id: 2,
    title: 'Video',
    type: 'video',
    icon: Video,
  },
  {
    id: 3,
    title: 'Acara',
    type: 'acara',
    icon: Calendar,
  },
  {
    id: 4,
    title: 'Tulis artikel',
    type: 'article',
    icon: CreateArticle,
  },
];

const postBottomMenu = [
  {
    id: 1,
    title: 'Suka',
    type: 'like',
    icon: Like,
  },
  {
    id: 2,
    title: 'Komentar',
    type: 'comment',
    icon: Comentar,
  },
  {
    id: 3,
    title: 'Bagikan',
    type: 'share',
    icon: Share,
  },
  {
    id: 4,
    title: 'Kirim',
    type: 'send',
    icon: Send,
  },
];

const postDropdownListMenu = [
  {
    id: 1,
    title: 'Simpan',
    description: 'Simpan untuk nanti',
    type: 'save',
    icon: SavePost,
  },
  {
    id: 2,
    title: 'Salin link untuk dibagikan',
    description: null,
    type: 'copy',
    icon: CopyLink,
  },
  {
    id: 3,
    title: 'Sematkan postingan ini',
    description: 'Salin dan tempelkan kode semat di situs Anda',
    type: 'save',
    icon: Code,
  },
  {
    id: 4,
    title: 'Berhenti mengikuti Muhammad Badrun',
    description: 'Berhenti mengikuti dan berhenti melihat postingan dari Muhammad di feed',
    type: 'unfollow',
    icon: CircleClose,
  },
  {
    id: 5,
    title: 'Saya tidak ingin melihat update ini',
    description: 'Beritahu alasan anda tidak ingin melihat postingan ini',
    type: 'unview',
    icon: EyeOff,
  },
  {
    id: 6,
    title: 'Laporkan postingan ini',
    description: 'Postingan ini tidak pantas atau akunya di bajak',
    type: 'report',
    icon: Flag,
  },
  {
    id: 7,
    title: 'Siapa yang bisa melihat postingan ini',
    description: 'Bisa dilihat semua orang didalam atau diuar linkedin',
    type: 'view',
    icon: Eye,
  },
];

export { recomentasion, postBottomMenu, buttonMenuItem, postDropdownListMenu };
