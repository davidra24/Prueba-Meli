import React, { useContext, useEffect, useState } from 'react';
import { DetailItem } from '../components/DetailItem';
import { Loading } from '../components/Loading';
import { ItemsContext } from '../context/ItemsContext';
import { get } from '../util/HttpUtil';
import { Breadcum } from '../components/Breadcum';
import '../styles/detail.scss';
import { Layout } from '../containers/Layout';
import notFound from '../images/404.svg';
import { API_BASE_ITEMS } from '../util/constants';

/**
 * 
 * @param {ReactProps} props Propiedades que ereda un componente de React
 * @returns Página de detalle del producto
 */
export const Detail = (props) => {
  const { state } = useContext(ItemsContext);
  const [loading, setLoading] = useState(true);
  const {
    match: { params },
  } = props;

  useEffect(() => {
    if (!state.item || state.item.id !== params.id) {
      callApi(params.id);
    } else {
      setLoading(false);
    }
  }, [params]);

  const callApi = async (id) => {
    setLoading(true);
    return await get(`${API_BASE_ITEMS}/${id}`).then((response) => {
      const { data } = response;
      if(data){
        state.setItem(data.item);
      } else {
        state.setItem(null)
      }
      setLoading(false);
    });
  };

  return (
    <Layout
      title={state.item === null ? '' : state.item.title}
      description={state.item === null ? '' : state.item.description}>
      {loading ? (
        <Loading />
      ) : state.item === null ? (
        <section className='detail__container-no-item'>
          <img src={notFound} alt="not found"/>
          No se ha encontrado el ítem
        </section>
      ) : (
        <div className='detail__container'>
          <section className='detail__breadcum'>
          <Breadcum categories={state.item.categories} />
          </section>
          <section className='detail__item'>
            <DetailItem item={state.item} />
          </section>
        </div>
      )}
    </Layout>
  );
};
