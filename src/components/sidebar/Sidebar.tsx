import React from 'react';
import Image from 'next/image';
import { Navbar } from '../navbar/Navbar';
import { IoBrowsersOutline, IoCalculator, IoHeartCircleOutline, IoLogoReact } from "react-icons/io5";
import { MdVideogameAsset } from "react-icons/md";

//Menu Items
const ItemsMenu = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} className="w-6 h-6 text-white" />,
        title: 'Dashboard',
        subTitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} className="w-6 h-6 text-white" />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdVideogameAsset size={40} className="w-6 h-6 text-white" />,
        title: 'Pokemons',
        subTitle: 'Info Pokemons'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartCircleOutline size={40} className="w-6 h-6 text-white" />,
        title: 'favoritos',
        subTitle: 'favoritos Pokemons'
    }
];

export const Sidebar = () => {
    return (
        <div
            id="menu"
            style={{ width:'400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2'/>
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>
                    .
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="Image user"
                            width={50}
                            height={50}
                            priority
                        />
                    </span>
                <span className="text-sm md:text-base font-bold">
                    Alfredo Vazquez
                </span>
                </a>
            </div>
            {/** Nav Sidebar **/}        
            <div id="nav" className="w-full px-6">
                {
                    ItemsMenu.map((ItemMenu) => (
                        <Navbar
                            key={ItemMenu.path}
                            path={ItemMenu.path}
                            icon={ItemMenu.icon}
                            title={ItemMenu.title}
                            subTitle={ItemMenu.subTitle}
                        />
                    ))
                }
            </div>
        </div>
    )
}
