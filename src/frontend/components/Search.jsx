import React, { useContext } from 'react';
import '../styles/search.scss';
import logo from '../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { getQuery } from '../util/HttpUtil';
import { ITEMS_SEARCH } from "../util/constants";
import { ItemsContext } from '../context/ItemsContext';

export const Search = () => {
  const busqueda = useInput('');
  const history = useHistory();
  const { state } = useContext(ItemsContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { status, data } = await getQuery(busqueda.value);
    if (status === 200) {
      state.setSearchQuery(busqueda.value)
      state.setSearch(data);
      history.push(`${ITEMS_SEARCH}${busqueda.value}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='search__container'>
      <Link to='/'>
        <img src={logo} alt='logo Mercado libre' className='search__logo' />
      </Link>
      <div className='search__box'>
        <input
          type='text'
          className='search__input'
          placeholder='Nunca dejes de buscar'
          value={busqueda.value}
          onChange={busqueda.onChange}
        />
        <button className='search__submit'>
          <span className='search__sumbit-icon'></span>
        </button>
      </div>
    </form>
  );
};
