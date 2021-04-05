import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrencyFormat } from '../hooks/useCurrencyFormat';
import '../styles/item.scss';
import { ITEMS_SEARCH_PATH } from '../util/constants';
import { Tooltip } from './Tooltip';

/**
 * 
 * @param {Item} item Información de item traida desde item?search=:keyword
 * @returns Componente de Item para lista de resultados de busqueda
 */
export const Item = ({ item }) => (
  <Link className='item__container' to={`${ITEMS_SEARCH_PATH}/${item.id}`}>
    <img className='item__img' src={item.picture} alt={item.title} />
    <div className='item__info-container'>
      <div className='item__info-shipping'>
        <p className='item__price'>
          {useCurrencyFormat(item.price.amount, item.price.currency)}
        </p>
        {item.free_shipping && (
          <Tooltip text='Envío gratis'>
            <span className='item__shipping'></span>
          </Tooltip>
        )}
      </div>
      <h3 className='item__title'>{item.title}</h3>
    </div>
    <p className='item__address'>{item.address}</p>
  </Link>
);
