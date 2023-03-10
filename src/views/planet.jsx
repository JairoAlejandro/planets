export default function Planet({name,img}){
    return(
        <section className="planet">
            <div className='planet__image'>
                {img}
            </div>

            <div className="planet__info">
                <p className="planet__name">{name}</p>
            </div>

        </section>
    )
}