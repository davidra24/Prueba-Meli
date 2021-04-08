import React from 'react';
import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <title>Mercado Libre</title>
        <meta name='description' content='La comunidad de compra y venta online más grande de América Latina.' />
      </Helmet>
      <article className='main__search-container'>
        <Search handleSubmit={handleSubmit} search={search} />
      </article>
    </>
  );
};
