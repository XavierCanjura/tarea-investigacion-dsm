import React from 'react';
import QR from '../assets/qr/QR-VAXPET.png'

const Descargar = () => {
    console.log('QR',QR)
    return (
        <>
        <div className='px-[5%] mt-[5%] py-[6%] md:h-[92vh] bg-primary' id='Descargar'>
            <div className=''>
                <div className='flex flex-row flex-wrap'>
                    <div className='w-full md:w-[35%] xl:w-[35%] relative flex justify-center items-center' id='carouselContainer'>
                       
                    <img src={QR} alt="QR"/>
                    </div>
                    <div  className='w-full md:w-[65%] xl:w-[65%] h-auto flex flex-col  text-white'>
                        <h1 className='text-center text-3xl md:text-5xl my-[3%]'>Puedes descargar nuestra APK directamente desde este QR</h1>
                        <p className='text-md md:text-xl text-justify'>Descarga nuestro manual de usuario desde el siguiente link.</p>
                        <br />
                        <a href="https://1drv.ms/f/s!AjDKq7yUpoHSu1d5mBaDGpdCGu0g?e=YUpgcB">Manual de usuario</a>

                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Descargar;