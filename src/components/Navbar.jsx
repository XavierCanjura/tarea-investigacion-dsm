import { useEffect, useState } from 'react'
import menuIcon from '../assets/icons/menu-icon.svg'
import closeIcon from '../assets/icons/close-icon.svg'


const Navbar = () => {

    const [ visibleMenu, setVisibleMenu ] = useState(false);
    const [ colorNavbar, setColorNavbar ] = useState('')

    const toggleVisible = () => {
        setVisibleMenu(!visibleMenu);
    }

    const changeColorNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 90 ? setColorNavbar('bg-navbar') : setColorNavbar('bg-navbar/70');
    }

    const redirectContent = (id ='inicio') => {
        const div = document.getElementById(id);
        const posDiv = div?.offsetTop;
        const posAbs = posDiv !== undefined ? posDiv - 90 : 0
        window.scrollTo({ top:  posAbs, behavior: 'smooth' });
    }

    useEffect( () => {
        changeColorNavbar()
        window.addEventListener("scroll", changeColorNavbar)
    }, [])

    const ButtonNavbar = ({ text }) => {
        return(
            <button 
                className='w-[calc(100vw/5)] h-full transition-all duration-500 ease-in-out hover:bg-black/70 text-white text-xl'
                onClick={() => redirectContent(text)}
            >{ text }</button>
        )
    }
    

    const ButtonNavbarMovil = ({ text }) => {
        return(
            <button 
                className='w-[100%] h-[70px] text-xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white'
                onClick={() => { redirectContent(text); toggleVisible() }}
            >{ text }</button>
        )
    }
    

    return (
        <>
            <nav className={`hidden md:block top-0 w-100vw h-[90px] z-40 sticky ${ colorNavbar }`}>
                <div className='flex w-full h-full'>
                    <ButtonNavbar text='Inicio' />
                    <ButtonNavbar text='Servicios' />
                    <ButtonNavbar text='Proyecto' />
                    <ButtonNavbar text='Precios' />
                    <ButtonNavbar text='Colaboradores' />
                    <ButtonNavbar text='Descargar' />
                    <ButtonNavbar text='Contáctanos' />
                </div>
            </nav>

            <nav className={`block md:hidden top-0 w-100vw h-[70px] z-40 sticky  ${ colorNavbar }`}>
                <div className='flex w-full h-full justify-end px-2'>
                    <div className='my-auto cursor-pointer' onClick={() => toggleVisible()}>
                        <img src={menuIcon} alt="Menu" width={'50px'} />
                    </div>
                </div>
            </nav>

            <div className={`md:hidden top-0 w-[100%] h-[100vh] z-50 bg-white flex flex-col ${ visibleMenu ? 'fixed' : 'hidden'}`}>
                <div className='flex justify-end px-2 h-[70px]'>
                    <img className='my-auto cursor-pointer' src={ closeIcon } alt="Close" width={'50px'} onClick={ () => toggleVisible() } />
                </div>
                <div className='flex flex-col mt-5'>
                    <ButtonNavbarMovil text='Inicio' />
                    <ButtonNavbarMovil text='Servicios' />
                    <ButtonNavbarMovil text='Proyecto' />
                    <ButtonNavbarMovil text='Precios' />
                    <ButtonNavbarMovil text='Colaboradores' />
                    <ButtonNavbarMovil text='Descargar' />
                    <ButtonNavbarMovil text='Contáctanos' />
                </div>
            </div>
        </>
    )
}

export default Navbar