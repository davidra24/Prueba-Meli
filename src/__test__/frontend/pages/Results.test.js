import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Results } from '../../../frontend/pages/Results';

describe('<Results />', () => {
  const results = mount(
    <ProviderMock>
      <Results />
    </ProviderMock>
  );
  test('Render del componente Results', () => {
    expect(results.length).toEqual(1);
  });
});