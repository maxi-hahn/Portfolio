import { useState } from "react";
import Arrow from "./Arrow";
import "./pngflotante.css"

const PngFlotante = ({ images}) => {

  // Si `images` no tiene al menos 2 elementos, mostramos un mensaje o evitamos el renderizado.
  if (images.length < 2) {
    return <span></span>;
  }

  // Estado para el índice de la primera imagen mostrada
  const [indiceActual, setIndiceActual] = useState(0);

  const avanzar = () => {
    setIndiceActual((prevIndice) => (prevIndice + 2) % images.length);
  };

//   const retroceder = () => {
//     setIndiceActual(
//       (prevIndice) => (prevIndice - 2 + images.length) % images.length
//     );
//   };

  // Calcular las imágenes a mostrar en función del índice actual
  const imagenesMostradas = [
    images[indiceActual],
    images[(indiceActual + 1) % images.length],
  ];

  return (
    <div className="flex gap-8 mt-8 max-w-full divPng">
      {imagenesMostradas.map((src, index) => (
        <img
          key={index}
          className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-150 imgStyle"
          src={src}
          alt={`Imagen flotante ${index + 1}`}
        />
      ))}
      {
        images.length > 2 && <Arrow avanzar={avanzar} />
      }
    </div>
  );
};

export default PngFlotante;
