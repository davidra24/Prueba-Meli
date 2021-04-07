import React from 'react'
import { shallow, mount } from "enzyme";
import { Search } from "../../../frontend/components/Search";
import { ProviderMock } from "../../../__mocks__/ProviderMock";

describe('<Search />', () => {
    test('Render del componente Search', () => {
        const searchComponent = shallow(
            <ProviderMock>
                <Search />
            </ProviderMock>
        )
        expect(searchComponent.length).toEqual(1)
    })
    test('Comprobar botón de búsqueda', () => {
        const handleSubmit = jest.fn();
        const searchComponent = mount(
            <ProviderMock>
                <Search search={{}} handleSubmit={handleSubmit} />
            </ProviderMock>
        )
        searchComponent.find('form').simulate('submit');
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
})