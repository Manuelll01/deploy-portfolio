import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        cName: 'side-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper></IoIcons.IoIosPaper>,
        cName: 'side-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus></FaIcons.FaCartPlus>,
        cName: 'side-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople></IoIcons.IoMdPeople>,
        cName: 'side-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText></FaIcons.FaEnvelopeOpenText>,
        cName: 'side-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle></IoIcons.IoMdHelpCircle>,
        cName: 'side-text'
    },
]