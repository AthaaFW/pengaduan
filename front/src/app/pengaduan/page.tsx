'use client'

import {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FacebookCard from '../components/FacebookCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
    const [data, setData] = useState([]);
    const pengaduan = data;

    const getData = ()=>{
        axios.get('http://localhost:5000/pengaduan')
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>{
            console.error(error)
        });
    }

    useEffect(()=>{
        getData();
    }, []);


    return(
        <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="flex flex-col justify-center items-center h-screen">
        {pengaduan.map(pengaduans =>(
            <FacebookCard
            key={pengaduans.id}
            imageSrc={pengaduans.foto}
            userAvatarSrc="https://placekitten.com/40/40"
            userName={pengaduans.masyarakat.nama}
            caption={pengaduans.isi_laporan}
            id={pengaduans.id_pengaduan}
            get={getData}
             />
        ))}
    </div>
    <Link href='/petugas/create'>
            <button className='absolute bottom-10 right-10 w-[60px] h-[60px] bg-black rounded text-white text-[40px]'>
                +
            </button>
            </Link>
        </>
    )
}
