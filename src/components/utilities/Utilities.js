import { IoLogOutOutline } from 'react-icons/io5';
import { SiGoogleclassroom, SiAboutdotme } from 'react-icons/si';
import { GiTeacher, GiGuards } from 'react-icons/gi';
import { RiParentFill } from 'react-icons/ri';
import { TbCalendarEvent } from 'react-icons/tb';
import { IoMdSettings, IoMdHelpCircle } from 'react-icons/io';

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
  'Grades',
  'Teachers',
  'Students',
  'Parents',
  'Events',
  'Settings',
  'Help',
  'About',
  'Logout',
];

export const icons = [
  SiGoogleclassroom,
  GiTeacher,
  RiParentFill,
  GiGuards,
  TbCalendarEvent,
  IoMdSettings,
  IoMdHelpCircle,
  SiAboutdotme,
  IoLogOutOutline,
];
