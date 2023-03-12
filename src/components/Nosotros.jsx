import React from 'react'
import LogoImg from '../assets/img/devdreamsv.png'
import Video from '../assets/video/fondo.mp4'

const Nosotros = () => {
    return (
        <>
            <div className='relative h-[100vh]' id='Inicio'>
                <div className='absolute left-0 top-[-70px] md:top-[-90px] w-[100%] h-[100%] overflow-hidden '>
                    <div className='absolute bg-black/70 w-full h-full z-10'></div>
                    <video className='hidden md:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-none' autoPlay={true} muted={true} loop={true}>
                        <source src={Video} type='video/mp4' />
                    </video>
                    <div className='fondoMovil w-full h-[100vh]'></div>
                </div>
            </div>

            <div className='absolute left-0 top-[90px] right-0 h-auto text-white px-[5%] flex flex-col items-center z-20'>
                    <img src={ LogoImg } alt="" className='w-[300px] xl:w-[500px] mt-[4%]' />
                    <p className='text-md md:text-2xl text-justify mt-5 xl:w-[75%] poppins-regular'>Somos una empresa enfoca en el desarrollo de software innovador, creación de sitios web dinámicos e intuitivos, sistemas administrativos y aplicaciones móviles. Dev Dreamsv se fundó a inicios del año 2023 con la intención de dar soluciones tecnológicas a todo tipo de empresas y organizaciones de cualquier rubro que necesite automatizar o digitalizar sus procesos por medio de un software.</p>
            </div>

            <div className='px-[5%] flex flex-wrap justify-around '>
                <div className='w-full md:w-4/12 bg-primary text-white my-4 rounded-3xl shadow-xl p-6 '>
                    <h3 className='text-2xl text-center my-2'>Misión</h3>
                    <p className='text-md md:text-xl text-justify'>Nuestra misión es ayudar a los clientes a lograr sus objetivos a través de soluciones tecnológicas personalizadas y efectivas.</p>
                </div>

                <div className='w-full md:w-4/12 bg-primary text-white my-4 rounded-3xl shadow-xl p-6 '>
                    <h3 className='text-2xl text-center my-2'>Visión</h3>
                    <p className='text-md md:text-xl text-justify'>Nuestra visión es ser líderes en el desarrollo de software a nivel regional y ser reconocidos por su excelencia en servicio al cliente y calidad de productos.</p>
                </div>

            </div>

        </>
    )
}

export default Nosotros