import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Item } from '../components/Item';
import { Search } from '../components/Search';
import { ItemsContext } from '../context/ItemsContext';
import { getQuery } from '../util/HttpUtil';
import { Loading } from '../components/Loading';
import '../styles/result.scss';
import { Breadcum } from '../components/Breadcum';

export const Results = () => {
  const history = useHistory();
  const actualSearch = history.location.search;
  const query = actualSearch.split('=')[1];
  //const busqueda = useInput(query.replace(/%20/g, ' '));
  const { state } = useContext(ItemsContext);
  const [loading, setLoading] = useState(true);

  if (!actualSearch) history.push('/');

  useEffect(async () => {
    console.log('effect');
    if (state.search.items === undefined 
      || state.searchQuery === undefined
      || state.searchQuery !== actualSearch) {
      await callApi(query);
    } else {
      setLoading(false);
    }
  }, [history.location]);

  const callApi = async (actualSearch) => {
    setLoading(true)
    return await getQuery(actualSearch).then((response) => {
      const { data } = response;
      state.setSearchQuery(actualSearch)
      state.setSearch(data);
      setLoading(false);
    });
  };
  return (
    <>
      <header>
        <Search />
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className='result__container'>
          <section className='result__breadcum'>
            {Breadcum(state.search.categories)}
          </section>
          <section className='result__items'>
            {state.search.items.map((item) => (
              <Item key={item.id} item={item}/>
            ))}
          </section>
        </div>
      )}
    </>
  );
};
