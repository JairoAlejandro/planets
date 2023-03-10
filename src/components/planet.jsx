import { useNavigate ,useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ChevronLeft from '../assets/chevron-left.svg'

export default function Planet({planet}){
    const navigate = useNavigate()

    const { name, img, description, age , gravity, temperature, diameter } = planet

    return(
        <section className={`planet`}>
            <div className='planet__header'>
                <p className="planet__name">{name}</p>
                <ChevronLeft className='planet__back' onClick={()=>{navigate('/')}}/>
            </div>
            <div className='planet__body'>
                {img}
                <div className="planet__info">
                    <p className="planet__description">{description}</p>
                </div>
            </div>
        </section>
    )
}