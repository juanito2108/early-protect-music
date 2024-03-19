import React from "react";
import postmalone from "../assets/postmalone.jpg"
import billieelish from "../assets/billie.jpg"
import weeknd from "../assets/weeknd.jpg"
import "../css/main-container.css"


export function ArtistContent (){
    return(
        <>
            <section className="artista-text">
                <div className="artista-container">
                    <img src={postmalone} alt="postmalone" />
                </div>
                <article className="article-container">
                    <div className="artist-tittle">
                        <h3>Artista</h3>
                    </div>
                    <div className="artist-texto">
                        <p>Informacion general de cada artista.
                        Descubre a los Grandes Artistas Musicales: 
                        Una Introducción a sus Vidas y Obras

                        ¿Eres un apasionado de la música y te gustaría conocer 
                        más sobre los artistas que han dejado una marca indeleble 
                        en la industria? ¡Has llegado al lugar indicado!  recorrido a través 
                        de la vida y obra de algunos de los músicos más influyentes de su genero. 
                        </p>
                    </div>
                </article>
            </section>
            <section className="artista-text-billie">
                <article className="article-container">
                    <div className="artist-tittle-billie">
                        <h3>Albumes</h3>
                    </div>
                    <div className="artist-texto-billie">
                        <p>Informacion general de cada artista.
                        Descubre a los Grandes Artistas Musicales: 
                        Una Introducción a sus Vidas y Obras

                        ¿Eres un apasionado de la música y te gustaría conocer 
                        más sobre los artistas que han dejado una marca indeleble 
                        en la industria? ¡Has llegado al lugar indicado!  recorrido a través 
                        de la vida y obra de algunos de los músicos más influyentes de su genero. 
                        </p>
                    </div>
                </article>
                <div className="artista-container-billie">
                    <img src={billieelish} alt="postmalone" />
                </div>
            </section>
            <section className="artista-text">
                <div className="artista-container-weeknd">
                    <img src={weeknd} alt="postmalone" />
                </div>
                <article className="article-container">
                    <div className="artist-tittle-weeknd">
                        <h3>Canciones</h3>
                    </div>
                    <div className="artist-texto-weeknd">
                        <p>Informacion general de cada artista.
                        Descubre a los Grandes Artistas Musicales: 
                        Una Introducción a sus Vidas y Obras

                        ¿Eres un apasionado de la música y te gustaría conocer 
                        más sobre los artistas que han dejado una marca indeleble 
                        en la industria? ¡Has llegado al lugar indicado!  recorrido a través 
                        de la vida y obra de algunos de los músicos más influyentes de su genero. 
                        </p>
                    </div>
                </article>
            </section>

        </>
    )
}