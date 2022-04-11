import React from 'react'
import { ReactComponent as Foto } from '../img/yt.svg';

export default function Home() {
    return (
        <body className="container">
            <nav>
                <div className="sidebar">
                    <button>
                        Ѿ
                    </button>
                    <Foto />
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" />
                    </form>
                    <button></button>
                </div>
                <div classNname="perfil">
                    <img src="" alt="" />
                </div>
            </nav>
            <div className="content">
                <section className="cards">
                    <ul className="list">
                        <li className="list__item item">
                            <article className="card">
                                <header>
                                    <img src="item__thumbnail" alt="" />
                                </header>
                                <div className="data">
                                    <div className="img-container">
                                        <img className="data__img"src="" alt="" />
                                    </div>
                                    <div className="">
                                        <span>Titulo</span>
                                        <span>Canal</span>
                                        <span>Visitas</span>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article></article>
                        </li>
                        <li>
                            <article></article>
                        </li>
                        <li>
                            <article></article>
                        </li>
                    </ul>
                </section>
            </div>
        </body>
    )
}
