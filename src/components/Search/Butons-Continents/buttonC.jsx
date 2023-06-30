/* eslint-disable react/prop-types */
import style from './buttonc.module.css';
import { useState } from 'react';

export default function ButtonE({handleFilter}){

    const [active, setActive] = useState({
        button1 : false,
        button2: false,
        button3: false,
        button4 : false,
        button5: false,
        button6: false,
        button7: false,
    });

    const toggleSeleccion = (e) => {
        let value = e.target.id;

        switch(value){
            case 'con.ALL':
                setActive({button1 : true,
                    button2: false,
                    button3: false,
                    button4 : false,
                    button5: false,
                    button6: false,
                    button7: false});
                break;
            case 'con.Asia':
                setActive({button1 : false,
                    button2: true,
                    button3: false,
                    button4 : false,
                    button5: false,
                    button6: false,
                    button7: false});
                break;
            case 'con.Africa':
                setActive({button1 : false,
                    button2: false,
                    button3: true,
                    button4 : false,
                    button5: false,
                    button6: false,
                    button7: false});    
                break;
            case 'con.Europe':
                setActive({button1 : false,
                    button2: false,
                    button3: false,
                    button4 : true,
                    button5: false,
                    button6: false,
                    button7: false});
                break;  
            case 'con.North America':
                setActive({button1 : false,
                    button2: false,
                    button3: false,
                    button4 : false,
                    button5: true,
                    button6: false,
                    button7: false});
                break; 
            case 'con.Oceania':
                setActive({button1 : false,
                    button2: false,
                    button3: false,
                    button4 : false,
                    button5: false,
                    button6: true,
                    button7: false});
                break;
            case 'con.South America':
                setActive({button1 : false,
                    button2: false,
                    button3: false,
                    button4 : false,
                    button5: false,
                    button6: false,
                    button7: true});
            break;               
            default:
                return;    
        }
        
      };

    return(
        <>
        <button className={active.button1 ? style.buttonAtive : style.buttons } id='con.ALL' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>Todos</button>
        <button className={active.button2 ? style.buttonAtive : style.buttons } id='con.Asia' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>Asia</button>
        <button className={active.button3 ? style.buttonAtive : style.buttons } id='con.Africa' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>Africa</button>
        <button className={active.button4 ? style.buttonAtive : style.buttons } id='con.Europe' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>Europe</button>
        <button className={active.button5 ? style.buttonAtive : style.buttons } id='con.North America' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>North America</button>
        <button className={active.button6 ? style.buttonAtive : style.buttons } id='con.Oceania' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>Oceania</button>
        <button className={active.button7 ? style.buttonAtive : style.buttons } id='con.South America' onClick={(e)=>{ handleFilter(e); toggleSeleccion(e) }}>South America</button>
        </>
    )
}