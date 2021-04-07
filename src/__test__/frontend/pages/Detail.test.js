import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import { Detail } from '../../../frontend/pages/Detail';

describe('<Detail />', () => {
const matchMock = { params: { id: 1 }, isExact: true, path: '', url: '' }
  const detail = mount(
    <ProviderMock>
      <Detail
        required={true}
        match={matchMock}
      />
    </ProviderMock>
  );
  test('Render del componente Detail', () => {
    expect(detail.length).toEqual(1);
  });
});
