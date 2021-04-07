import React from 'react';
import { Search } from '../components/Search';
import { useQuery } from '../hooks/useQuery';
import '../styles/main.scss';

/**
 *
 * @returns Pagina inicial de busqueda de productos
 */
export const Main = () => {
  const { handleSubmit, search } = useQuery('');
  return (
    <article className='main__search-container'>
      <Search handleSubmit={handleSubmit} search={search} />
    </article>
  );
};
