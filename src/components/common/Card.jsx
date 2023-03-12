import React from 'react'

const Card = ({nombre, general, descripcion, image, proyectos = [], index}) => {

    var classesDiv = 'w-full my-2 flex overflow-hidden rounded-2xl bg-primary min-h-[300px]';
    var classBorder = 'rounded-tr-full rounded-br-full'

    function setDescripcion() {
        return {__html: `${descripcion}`};
    }

    if( (index + 1) % 2 === 0) {
        classesDiv = 'w-full my-2 flex flex-row-reverse overflow-hidden rounded-2xl bg-primary min-h-[300px]';
        classBorder = 'rounded-tl-full rounded-bl-full'
    }

    return (
        <>
            <div className={classesDiv}>
                <div className={`w-[300px] flex flex-col justify-center bg-white ${ classBorder }`}>
                    <img className='rounded-full w-[200px] h-[200px] mx-auto' src={ image } alt="Foto"  />
                    <h3 className={`text-center mt-2 text-xl font-semibold`}>{ nombre }</h3>
                </div>
                <div className='relative w-[calc(100%-300px)] p-5 text-white'>
                    <div className='py-[10px]'>
                        <p className='text-xl mt-2'>Datos Generales</p>
                        <p className='text-md'>{ general }</p>
                        <p className='text-xl mt-2'>Descripción</p>
                        <p className='text-md text-justify poppins-light' dangerouslySetInnerHTML={ setDescripcion( )}></p>
                        <p className='text-xl mt-2'>Proyectos</p>
                        <ul>
                            {
                                proyectos.map( (proyecto, index) => (
                                    <li key={ index }>- { proyecto }</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card