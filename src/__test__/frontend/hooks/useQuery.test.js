import { useQuery } from '../../../frontend/hooks/useQuery';
import { renderHook } from '@testing-library/react-hooks';

describe('useQuery hook', () => {
  test('Retorno de useQuery', () => {
    const testQuery = 'smart tv'
    const { result } = renderHook(() => useQuery(testQuery));
    const event = { preventDefault() {} }
    const { search, handleSubmit } = result.current
    
    expect(search.value).toBe(testQuery)
    handleSubmit(event).then(response => {
      const { status, data } = response
      expect(status).toBe(200)
      expect(data).not.toBeNull()
    })
  });
});
