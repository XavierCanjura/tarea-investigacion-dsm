import React from 'react'
import Carrousel from './common/Carrousel'

//images
import CasioImg from '../assets/clients/casio.png';
import AdobeImg from '../assets/clients/adobe.png';
import ForeverImg from '../assets/clients/forever21.png';
import GoogleImg from '../assets/clients/google.png';
import NikeImg from '../assets/clients/nike.png';
import RentacarsImg from '../assets/clients/rentacars.png';
import SpotifyImg from '../assets/clients/spotify.png';
import TelegraphImg from '../assets/clients/the-telegraph.png';

import WebImage from '../assets/services/web2.jpg'
import MovilImage from '../assets/services/movil2.jpg'
import SistemaImage from '../assets/services/administrativo2.jpg'

const images = [
    {
        url: CasioImg,
        alt: 'Casio Logo'
    },
    {
        url: AdobeImg,
        alt: 'Adobe Logo'
    },
    {
        url: ForeverImg,
        alt: 'Forever 21 Logo'
    },
    {
        url: GoogleImg,
        alt: 'Google Logo'
    },
    {
        url: NikeImg,
        alt: 'Nike Logo'
    },
    {
        url: RentacarsImg,
        alt: 'Rentacars Logo'
    },
    {
        url: SpotifyImg,
        alt: 'Spotify Logo'
    },
    {
        url: TelegraphImg,
        alt: 'The Telegraph Logo'
    },
]

const Servicios = () => {
    return (
        <>
            <div className='mx-[5%]' id='Servicios'>
                <h1 className='text-center text-3xl md:text-5xl my-[3%]'>Nuestros Servicios</h1>
                <div className='flex flex-row flex-wrap justify-around'>
                    <div className='relative w-full md:w-[40%] xl:w-[calc(100%/4)] min-h-[300px] m-[2%] rounded-3xl'>
                        <div className='absolute bg-black/40 w-full h-full flex flex-col justify-center items-center rounded-3xl'>
                            <p className='text-white font-semibold text-2xl'>Sitios Web</p>
                            <p className='text-white px-4 text-md text-center mt-2'>Desarrollo de sitios web de calidad e intuitivas</p>
                        </div>
                        <img src={ WebImage } alt="Sitios Web" className='rounded-3xl' />
                    </div>

                    <div className='relative w-full md:w-[40%] xl:w-[calc(100%/4)] min-h-[300px] m-[2%] rounded-3xl'>
                        <div className='absolute bg-black/40 w-full h-full flex flex-col justify-center items-center rounded-3xl'>
                            <p className='text-white font-semibold text-2xl text-center'>Sistemas Administrativos</p>
                            <p className='text-white px-4 text-md text-center mt-2'>Desarrollo de sistemas administrativos para automatizar tus procesos</p>
                        </div>
                        <img src={ SistemaImage } alt="sistemas administrativos" className='rounded-3xl' />
                    </div>

                    <div className='relative w-full md:w-[40%] xl:w-[calc(100%/4)] min-h-[300px] m-[2%] rounded-3xl'>
                        <div className='absolute bg-black/40 w-full h-full flex flex-col justify-center items-center rounded-3xl'>
                            <p className='text-white font-semibold text-2xl'>Aplicaciones Moviles</p>
                            <p className='text-white px-4 text-md text-center mt-2'>Desarrollo de aplicaciones moviles de gran escala</p>
                        </div>
                        <img src={ MovilImage } alt="App moviles" className='rounded-3xl' />
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-3xl md:text-5xl my-[3%]'>Nuestros Clientes</h1>
                    <div className='hidden md:block'>
                        <Carrousel images={ images } percentage={25}/>
                    </div>
                    <div className='block md:hidden'>
                        <Carrousel images={ images } percentage={100}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicios