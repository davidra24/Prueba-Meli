import React from 'react';
import '../styles/search.scss';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

/**
 *
 * @param {ReactEvent} handleSubmit Acción que ejecutará el formulario una vez ejecutada la acción del formulario
 * @param {useInputHook} search Hook de manejo de input de formulario
 * @returns Componente de búsqueda con lógica traer la lista de productos del API
 */
export const Search = ({ handleSubmit, search }) => (
  <form onSubmit={handleSubmit} className='search__container'>
    <Link to='/'>
      <img className='search__logo' src={logo} alt='logo Mercado libre' className='search__logo' />
    </Link>
    <div className='search__box'>
      <input
        type='text'
        className='search__input'
        placeholder='Nunca dejes de buscar'
        value={search.value}
        onChange={search.onChange}
      />
      <button className='search__submit' aria-label="search">
        <span className='search__sumbit-icon'></span>
      </button>
    </div>
  </form>
);
