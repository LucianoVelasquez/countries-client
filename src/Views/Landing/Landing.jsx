import { Link } from "react-router-dom";
import style from "./landing.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeActivity } from "../../redux/actions";

export default function Landing() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(removeActivity('deletAll'));
  })
  return (
    <div className="bg-propy min-h-screen min-h-screen ">
      <div className={`${style.back}`}>
        <div className={style.secundary}>
          <p className="text-4xl text-white mt-5">Countries App</p>
        </div>

        <div className={`${style.primary} max-sm:mt-14`}>
          <img
            className="max-sm:h-72 max-2xl:h-96"
            src="https://cdn.dribbble.com/users/967990/screenshots/3687586/kiwi_gif_dribble.gif"
            alt="logo-presentacion"
          ></img>
        </div>

        <div className={`${style.divT}   max-sm:mt-20`}>
          <Link /* className={style.but} */ to="/home">
            <button className="max-sm:w-36">Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
