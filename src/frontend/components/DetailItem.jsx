import React from 'react';
import {
  translateCondition,
  useCurrencyFormat,
} from '../hooks/useCurrencyFormat';
import '../styles/detailitem.scss';
import { Tooltip } from './Tooltip';

/**
 * 
 * @param {Item} item Información de ítem traida desde /item/:id
 * @returns Componente de Item para detalle del producto
 */
export const DetailItem = ({ item }) => (
  <article className='detail__item-container'>
      <picture className='detail__item-image-container'>
        <img className='detail__item-image' src={item.picture} alt={item.title} />
      </picture>
    <div className='detail__item-buy'>
      <div className='detail__item-condition'>
        <p className='detail__item-condition-p'>{translateCondition(item.condition)}</p>
        <p>&nbsp;-&nbsp;</p>
        <p className='detail__item-condition-sold'>{item.sold} vendidos</p>
        {item.free_shipping && (
        <Tooltip text='Envío gratis'>
          <span className='item__shipping'></span>
        </Tooltip>
      )}
      </div>
      <h4 className='detail__item-title'>{item.title}</h4>
      <p className='detail__item-amount'>
        {useCurrencyFormat(item.price.amount, item.price.currency)}
      </p>
      <button className='detail__item-button'>Comprar</button>
    </div>
    <div className='detail__item-description'>
      <h5 className='detail__item-description-title'>
        Descripción del producto
      </h5>
      <p className='detail__item-description-description'>{item.description}</p>
    </div>
  </article>
);
