import { useInput } from '../../../frontend/hooks/useInput';
import { renderHook } from '@testing-library/react-hooks';

describe('useInput hook', () => {
  test('Retorno de useInput', () => {
    const valueMock = 'test value mock use Input'

    const { result } = renderHook(() => useInput(valueMock));
    const { onChange, clean, value } = result.current
    
    expect(value).toEqual(valueMock)
    expect(typeof onChange).toBe('function')
    expect(typeof clean).toBe('function')
  });
});