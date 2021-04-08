import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Item } from '../components/Item';
import { ItemsContext } from '../context/ItemsContext';
import { get } from '../util/HttpUtil';
import { Loading } from '../components/Loading';
import '../styles/result.scss';
import { Breadcum } from '../components/Breadcum';
import { Layout } from '../containers/Layout';
import { API_BASE_ITEMS, API_QUERY } from '../util/constants';

/**
 * 
 * @returns Página componente de resultados de busqueda de productos
 */

const Results = () => {
  const history = useHistory();
  const actualSearch = history.location.search;
  const query = actualSearch.split('=')[1];
  const { state } = useContext(ItemsContext);
  const [loading, setLoading] = useState(true);

  if (!actualSearch) history.push('/');

  useEffect(async () => {
    if (
      state.search.items === undefined ||
      state.searchQuery === undefined ||
      state.searchQuery !== actualSearch
    ) {
      await callApi(query);
    } else {
      setLoading(false);
    }
  }, [history.location]);

  const callApi = async (query) => {
    setLoading(true);
    return await get(`${API_BASE_ITEMS}${API_QUERY}${query}`).then((response) => {
      const { data } = response;
      state.setSearchQuery(query);
      state.setSearch(data);
      setLoading(false);
    });
  };
  return (
    <Layout
      title={`Resultados para: ${query}`}
      description={`Resultados de la búsqueda para: ${query}`}>
      {loading ? (
        <Loading />
      ) : (
        <div className='result__container'>
          <section className='result__breadcum'>
            <Breadcum categories={state.search.categories} />
          </section>
          <section className='result__items'>
            {state.search.items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </section>
        </div>
      )}
    </Layout>
  );
};

export default Results