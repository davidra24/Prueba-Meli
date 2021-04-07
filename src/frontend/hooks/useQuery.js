import { useContext } from 'react';
import { useHistory } from 'react-router';
import { get } from '../util/HttpUtil';
import { useInput } from './useInput';
import { ItemsContext } from '../context/ItemsContext';
import { API_BASE_ITEMS, API_QUERY, ITEMS_SEARCH } from '../util/constants';

export const useQuery = (searchDefault) => {
  const search = useInput(searchDefault);
  const history = useHistory();
  const { state } = useContext(ItemsContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { status, data } = await get(`${API_BASE_ITEMS}${API_QUERY}${search.value}`);
    if (status === 200) {
      state.setSearchQuery(search.value);
      state.setSearch(data);
      history.push(`${ITEMS_SEARCH}${search.value}`);
    } else {
      history.push('/404');
    }
  };
  return { search, handleSubmit };
};
