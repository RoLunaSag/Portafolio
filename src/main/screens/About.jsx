import React from "react";
import { BgScreen, DropContainer } from "../components";

const About = () => {
  // Arreglo con la info de los drops
  const arrayDrops = [
    {
      text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      urlimage: "https://cdn.forbes.com.mx/2020/06/edificios-rascacielos.jpg",
      labelimage: "first",
    },
    {
      text: 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32 El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.',
      urlimage:
        "https://www.mundohvacr.com/wp-content/uploads/2012/11/Edificios-de-alto-desempeno.jpg",
      labelimage: "second",
    },
    {
      text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).',
      urlimage:
        "https://www.telefonica.com/es/wp-content/uploads/sites/4/2022/04/Edificios-inteligentes-un-avance-en-conectividad-eficiencia-y-seguridad-1.jpg?w=1200&h=673&crop=1",
      labelimage: "thirtree",
    },
  ];

  return (
    <div className="relative min-h-screen top-20">
      <BgScreen bgimage='bg-second-img' />
      <div className="relative z-30 flex flex-col justify-center items-center min-h-screen">
        <p className='font-bold text-9xl text-white'>
          {'Sobre Mi'}
        </p>
        {arrayDrops.map((item, index) => (
          <DropContainer className="my-5 mx-2" key={index} label={item.text}>
            <div>
              <img
                className="flex h-64 w-64"
                src={item.urlimage}
                alt={item.labelimage}
              />
            </div>
          </DropContainer>
        ))}
      </div>
    </div>
  );
};

export default About;
