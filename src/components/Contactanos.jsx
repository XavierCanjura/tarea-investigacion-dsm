import React from 'react'
import LogoImg from '../assets/img/devdreamsv.png'

const Contactanos = () => {
    return (
        <>
            <div className='mt-[5%] px-[15%] pt-[3%] w-full flex flex-wrap bg-fondo text-white' id='Contáctanos'>
                
                <div className='w-full md:w-[50%]'>
                    {/* To Do: Colocar imagen */}
                    <img src={ LogoImg } alt="" className='w-[300px] xl:w-[500px] mt-[4%]' />
                </div>
                <div className='flex flex-col w-full md:w-[50%] items-center  p-4 '>
                    <h1 className='text-center text-3xl md:text-5xl'>Contáctanos</h1>
                    <div className='flex flex-col my-3 w-full md:w-[75%]'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" className='border border-slate-500 rounded-lg h-[35px] outline-none px-2 text-black' />

                    </div>
                    <div className='flex flex-col mt-3 w-full md:w-[75%]'>
                        <label htmlFor="">Correo Electrónico</label>
                        <input type="email" className='border border-slate-500 rounded-lg h-[35px] outline-none px-2 text-black' />

                    </div>

                    <div className='flex flex-col mt-3 w-full md:w-[75%]'>
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="5" className='border border-slate-500 rounded-lg outline-none px-2 text-black'></textarea>
                    </div>
                    <button className='h-[50px] w-[100px] bg-lime-500 rounded-lg my-4'>Enviar</button>
                </div>
            </div>

            <div className='relative h-[90px] bg-fondo text-white'>
                <p className='text-center w-full absolute bottom-4'>Derechos Reservador Dev Dreamsv</p>
            </div>
        </>
    )
}

export default Contactanos