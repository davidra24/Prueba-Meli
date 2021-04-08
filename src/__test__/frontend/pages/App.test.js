import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { App } from '../../../frontend/pages/App';

describe('<App />', () => {
  const app = mount(
    <ProviderMock>
      <App />
    </ProviderMock>
  );
  
  test('Render del componente App', () => {
    expect(app.length).toEqual(1);
  });

});
