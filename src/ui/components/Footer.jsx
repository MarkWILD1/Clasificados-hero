import React, { useState, useEffect} from 'react'

const formatDateTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export const Footer = () => {
    const [time, setTime] = useState(formatDateTime(new Date()));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(formatDateTime(new Date()));
      }, 1000); //se actualiza a cada segundo

      //Limpiar el intervalo cuando el componente se desmonte    
      return () => clearInterval(intervalId);
    }, []);
    
  return (
    <footer className="bg-dark text-white mt-4 p-4">
        <div className="container">
        <p className="mb-0 text-center">
            <span className="ml-2">{time} </span> 
             - Marcos Mello
        </p>
        </div>
    </footer>

    
  )
}
