import React from 'react';
import { Helmet } from 'react-helmet';
import { Search } from "../components/Search";
import { useQuery } from '../hooks/useQuery';

const appTitle = 'Mercado Libre';

/**
 *
 * @param { String } title Título que tendrá la pagina
 * @param { String } description Metadatos de descripción de pagina
 * @param { ReactComponent } children Hijo que tendrá la plantilla para mostrar
 * @returns Retorna una plantilla con la barra de busqueda, cambios en los metadatos web y el contenido que se desee
 */
export const Layout = ({ title, description, children }) => {
  const { handleSubmit, search } = useQuery('')
  return (
    <>
      <Helmet>
        {title && <title>{`${title} | ${appTitle}`}</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <header>
        <Search handleSubmit={handleSubmit} search={search}></Search>
      </header>
      {children}
    </>
  );
};
