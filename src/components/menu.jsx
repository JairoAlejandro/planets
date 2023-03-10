import { Link } from "react-router-dom"
export default function Menu(){
    return(
        <nav className="menu">
            <Link className="menu__item" to='mercurio'>Mercurio</Link>
            <Link className="menu__item" to='venus'>Venus</Link>
            <Link className="menu__item" to='tierra'>Tierra</Link>
            <Link className="menu__item" to='marte'>Marte</Link>
            <Link className="menu__item" to='jupiter'>Jupiter</Link>
            <Link className="menu__item" to='saturno'>Saturno</Link>
            <Link className="menu__item" to='urano'>Urano</Link>
            <Link className="menu__item" to='neptuno'>Neptuno</Link>
        </nav>
    )
}