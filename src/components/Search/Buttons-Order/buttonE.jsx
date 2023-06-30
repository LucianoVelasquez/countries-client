/* eslint-disable react/prop-types */
import style from './buttone.module.css';
import { useState } from 'react';

export default function ButtonE({hanldeClickOrder}){

    const [active, setActive] = useState({
        button1 : false,
        button2: false,
        button3: false,
    });

    const toggleSeleccion = (e) => {
        let value = e.target.id;

        switch(value){
            case 'asc':
                setActive({button1:true,button2:false,button3:false});
                break;
            case 'des':
                setActive({button1:false,button2:true,button3:false});
                break;
            case 'popu':
                setActive({button1:false,button2:false,button3:true});     
                break;
            default:
                return;    
        }
        
      };

    return(
        <>
        <button className={active.button1 ? style.buttonAtive : style.buttons } id='asc' onClick={(e)=>{ hanldeClickOrder(e); toggleSeleccion(e) }}>A - Z</button>
        <button className={active.button2 ? style.buttonAtive : style.buttons } id='des' onClick={(e)=>{ hanldeClickOrder(e); toggleSeleccion(e) }}>Z - A</button>
        <button className={active.button3 ? style.buttonAtive : style.buttons } id='popu' onClick={(e)=>{ hanldeClickOrder(e); toggleSeleccion(e) }}>Poblacion</button>
        </>
    )
}