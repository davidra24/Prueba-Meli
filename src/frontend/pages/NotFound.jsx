import React from 'react'
import { Link } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import notFound from "../images/404.svg";
import '../styles/notfound.scss'

const NotFound = () => (
    <Layout>
        <section className='notFound__container'>
            <picture>
                <img src={notFound} alt="404 - notFound"/>
            </picture>
            <article>
                <p className='notFound__info-title'>Parece que esta página no existe</p>
                <Link className='notFound__info-link' to='/'>Ir a la página principal</Link>
            </article>
        </section>
    </Layout>
)

export default NotFound