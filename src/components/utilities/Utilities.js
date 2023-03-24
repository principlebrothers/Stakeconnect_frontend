import { SiGoogleclassroom, SiAboutdotme } from 'react-icons/si';
import { GiTeacher, GiGuards } from 'react-icons/gi';
import { RiParentFill } from 'react-icons/ri';
import { TbCalendarEvent } from 'react-icons/tb';
import { IoMdSettings, IoMdHelpCircle } from 'react-icons/io';
import { RxDashboard } from 'react-icons/rx';

import { useNavigate } from 'react-router-dom';
import { useSignOutAdministratorMutation } from '../api/apiSlice';

export function useLogOut() {
  const navigate = useNavigate();
  const [signOutAdministrator, { isLoading }] =
    useSignOutAdministratorMutation();

  const handleLogOut = async () => {
    const token = getToken();
    await signOutAdministrator({ headers: { Authorization: token } })
      .unwrap()
      .then(() => {
        clearToken();
        navigate('/login');
      })
      .catch((error) => error.message);
  };

  return { handleLogOut, isLoading };
}


export function setToken(response) {
  localStorage.setItem('token', response);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function clearToken() {
  localStorage.removeItem('token');
}

export const menus = [
  { id: 'dashboard', path: '/dashboard', page: 'Dashboard' },
  { id: 'grades', path: '/grades', page: 'Grades' },
  {
    id: 'teachers',
    path: '/teachers',
    page: 'Teachers',
  },
  {
    id: 'students',
    path: '/students',
    page: 'Students',
  },
  {
    id: 'parents',
    path: '/parents',
    page: 'Parents',
  },
  {
    id: 'events',
    path: '/events',
    page: 'Events',
  },
  {
    id: 'settings',
    path: '/settings',
    page: 'Settings',
  },
  {
    id: 'help',
    path: '/help',
    page: 'Help',
  },
  {
    id: 'about',
    path: '/about',
    page: 'About',
  },
];

export const icons = [
  RxDashboard,
  SiGoogleclassroom,
  GiTeacher,
  RiParentFill,
  GiGuards,
  TbCalendarEvent,
  IoMdSettings,
  IoMdHelpCircle,
  SiAboutdotme,
];
