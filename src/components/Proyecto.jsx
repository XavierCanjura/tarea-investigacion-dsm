import React from 'react'
import Carrousel from './common/Carrousel'
// Images import
import Login from '../assets/img/login.png'
import Citas from '../assets/img/citas.png'
import Listado from '../assets/img/listado.png'
import Perfil from '../assets/img/perfil.png'
import Registro from '../assets/img/registromascota.png'
import Splash from '../assets/img/splash.png'

const images = [
    {
        url: Login,
        alt: 'Login'
    },
    {
        url: Citas,
        alt: 'Citas'
    },
    {
        url: Listado,
        alt: 'Listado'
    },
    {
        url: Perfil,
        alt: 'Perfil'
    },
    {
        url: Registro,
        alt: 'Registro'
    },
    {
        url: Splash,
        alt: 'Splash'
    },
]

const Proyecto = () => {
    return (
        <>
            <div className='px-[5%] mt-[5%] py-[6%] md:h-[92vh] bg-primary' id='Proyecto'>
                <div className=''>
                    <div className='flex flex-row flex-wrap'>
                        <div className='w-full md:w-[35%] xl:w-[35%] relative flex justify-center items-center' id='carouselContainer'>
                            <Carrousel images={ images } percentage={100} width='50%' arrows={ false }/>
                            {/* <div className='hidden md:block marcoMovil absolute w-full h-full'></div> */}
                        </div>
                        <div  className='w-full md:w-[65%] xl:w-[65%] h-auto flex flex-col  text-white'>
                            <h1 className='text-center text-3xl md:text-5xl my-[3%]'>Vax Pet</h1>
                            <p className='text-md md:text-xl text-justify'>La aplicación Vax Pet cuenta con el registro de usuarios que en este caso será el dueño de la o las mascotas que de igual manera se registran dentro de la App, colocando el nombre, peso, edad y tiene la posibilidad de subir una foto. Además, los dueños pueden llevar el control de las vacunas y desparasitaciones de cada mascota. Por último, en Vax Pet puede agendar citas donde puede seleccionar el tipo de consulta, fecha y hora que desea agendarla, esto para agilizar los procesos a la veterinaria.</p>
                            <br />
                            <p className='text-md md:text-xl text-justify'>Vax Pet va dirigia a las personas que desean llevar el seguimiento de cada control realizado en la veterinaria con respecto a las citas programadas, vacunación y desparasitación de cada mascota.</p>
                            <br />
                            <p className='text-md md:text-xl text-justify'>Vax Pet no tiene un costo adquirirla, es totalmente gratis.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyecto