import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Trees',
    path: '/trees',
    icon: <FaIcons.FaTree />,
    cName: 'nav-text'
  },
  {
    title: 'Plants',
    path: '/plants',
    icon: <FaIcons.FaSeedling />,
    cName: 'nav-text'
  },
  {
    title: 'Sapling',
    path: '/sampling',
    icon: <FaIcons.FaLeaf />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Contactus',
    path: '/contactus',
    icon: <FaIcons.FaPhone/>,
    cName: 'nav-text'
  }
];