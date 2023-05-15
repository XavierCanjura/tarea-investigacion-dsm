import React from 'react'
import Card from './common/Card'

import imgDaniel from '../assets/img/colaboradores/daniel.jpg'
import imgRuby from '../assets/img/colaboradores/ruby.jpg'
import imgChamba from '../assets/img/colaboradores/chamba.jpg'
import imgSamuel from '../assets/img/colaboradores/samuel.jpg'
import imgXavier from '../assets/img/colaboradores/xavier.jpg'

const data = [
    {
        img: imgXavier,
        nombre: 'Xavier Canjura',
        general: 'Edad 22 años, Estudiante',
        descripcion: 'Soy un desarrollador web full stack con 5 años de experiencia en backend y 3 años en frontend. Estudiante de quinto año en ingenieria en ciencias de la computación. En el año 2018 comence mi camino como desarrollador web, desde entonces he venido viendo cursos, trabajando en proyectos personales y proyectos de catedras de las diferentes materias de la carrera donde he dado el maximo esfuerzo y donde he dado soluciones a problematicas que se han interpuesto en el camino. Ademas, he tenido experiencia laboral con empresas fuera del pais y donde tuve la oportunidad de crear Bots. Dentro del país de igual manera he trabajado de manera Freelance con personas conocidas en proyectos como de cotizacion de seguros, sitios web y entre otros.',
        proyectos: ['Mapa interactivo de EL Salvador', 'Sistema Administrativo para veterinarias', 'Sistema de Alquiler de Vehículos', 'Wallet MoneyApp'],
    },
    {
        img: imgRuby,
        nombre: 'Ruby Garcia',
        general: 'Edad 23 años, Estudiante',
        descripcion: `¡Hola! Soy desarrolladora full stack con 3 años de experiencia. En mi tercer año de mi carrera, comencé a trabajar como desarrollador full stack, donde tuve la oportunidad de aplicar mis habilidades y conocimientos en proyectos significativos además de contribuir en la creación de pruebas automatizadas y línea grafica de proyectos nacionales y personales. Además de mi trabajo, también me gusta seguir aprendiendo y explorando nuevas tecnologías y herramientas para mejorar mis habilidades como desarrollador.`,
        proyectos: ['Observatorio de Desigualdad Multidimensional de El Salvador', 'Inventario de Cocina', 'Página web de Corridors Salvadoreans', 'Sistema de administracion de talleres'],
    },
    {
        img: imgDaniel,
        nombre: 'Danilo',
        general: 'Edad 27 años, Estudiante',
        descripcion: 'Soy un desarrollador de software front-end con 3 años de experiencia en el campo. Durante este tiempo, he trabajado en diversos proyectos que han abarcado desde la creación de páginas web sencillas hasta la implementación de complejas aplicaciones web empresariales.<br><br>Mi conocimiento y experiencia en tecnologías como HTML, CSS, JavaScript y frameworks como React y Angular, me han permitido desarrollar soluciones de software escalables y eficientes que cumplen con las necesidades de los clientes.<br><br>Además de mi experiencia en el desarrollo de software front-end, también he trabajado en colaboración con diseñadores y otros desarrolladores en equipos ágiles, lo que me ha permitido aprender a trabajar de manera colaborativa y eficiente en un entorno de equipo.',
        proyectos: ["sistema de reserva de vacaciones",
            "sistema de hoteleria",
            "sistema de reserva de espacios de uso  comercial",
            "sistema de evaluacion de perfiles de github"],
    },
    {
        img: imgSamuel,
        nombre: 'Samuel',
        general: 'Edad 26 años, Estudiante',
        descripcion: 'Soy un desarrollador back-end con experiencia en los lenguajes C# y PHP, utilizados para el desarrollo de aplicaciones de escritorio, API’s y web. Además, poseo conocimientos acerca de bases de datos relacionales y Firebase.<br><br>He trabajado con metodologías agiles como Scrum y Kanban para el desarrollo de proyectos.',
        proyectos: [
            'Sistema de notas para una institución educativa', 
            'Página web y aplicación multiplataforma para una veterinaria', 
            'Sistema de apoyo para Matemática orientado a bachillerato'
        ],
    },
    {
        img: imgChamba,
        nombre: 'Salvador Gonzalez',
        general: 'Edad 22 años, Estudiante ',
        descripcion: 'Soy un instalador de infraestructura de red y soporte en tecnología, llevo trabajando en este campo hace 2 años en los cuales he sido parte de empresa privadas como gubernamentales en los cuales he podido adquirir diferentes habilidades en mi campo, posee conocimientos básicos de programación ya que he sido parte de proyectos realizados en la universidad.<br><br>Actualmente estoy en camino de obtener algunas certificacioned de CISCO y trabajo en una empresa privada en la cual me encargo de llevar el control de los equipos informáticos de diferentes agencias a nivel nacional.',
        proyectos: ['Algunos proyecto que he trabajado en el área de programación es en la creación de una app móvil para visualizar series y películas y algunos otros proyectos de la universidad. ', 'En el área de redes he trabajado en proyectos de organizar e instalar la infraestructura de red de laboratorios de estudio.'],
    },

]

const Colaboradores = () => {

    var listNumber = Array.from({ length: data.length }, (v,k) => k++)
    const newIntegrantesData = []

    for(let i = 0; i < data.length; i++){
        var random = Math.floor(Math.random() * listNumber.length)
        newIntegrantesData[i] = data[listNumber[random]];
        listNumber.splice(random, 1);
    }

    return (
        <>
            <div className='px-[5%]' id='Colaboradores'>
                <h1 className='text-3xl md:text-5xl text-center my-5'>Colaboradores</h1>
                <div className='flex flex-row flex-wrap justify-around'>
                    {
                        newIntegrantesData.map( (integrante, index ) => (
                            <Card
                                key={ index }
                                nombre={ integrante.nombre }
                                descripcion={ integrante.descripcion}
                                image={ integrante.img }
                                index={index}
                                proyectos={ integrante.proyectos }
                                general={ integrante.general }
                            />
                        ))
                    }
                    {/* <Card
                        nombre={ data[1].nombre }
                        descripcion={ data[1].descripcion }
                        image={ data[1].img }
                        index={0}
                    />

                    <Card
                        nombre={ data[1].nombre }
                        descripcion={ data[1].descripcion }
                        image={ data[1].img }
                        index={1}
                    /> */}
                </div>
            </div>
        </>
    )
}

export default Colaboradores