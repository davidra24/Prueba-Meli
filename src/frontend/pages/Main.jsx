import React from 'react';
import { Search } from '../components/Search';
import '../styles/main.scss';

/**
 * 
 * @returns Pagina inicial de busqueda de productos
 */
export const Main = () => (
  <article className='main__search-container'>
    <Search />
  </article>
);
