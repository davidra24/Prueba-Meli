import React from 'react'
import { shallow } from 'enzyme'
import { ItemMock } from '../../../__mocks__/ItemMock';
import { Item } from '../../../frontend/components/Item' ;
import { useCurrencyFormat } from '../../../frontend/hooks/useCurrencyFormat';

describe('<Item />', () => {
    const itemComponent = shallow(
        <Item item={ItemMock} />
    )
    test('Render componente Item', () => {
        expect(itemComponent.length).toEqual(1)
    })
    test('Render de titulo de producto', () => {
        expect(itemComponent.find('.item__title').text()).toEqual(ItemMock.title);
        expect(itemComponent.find('.item__img').prop("src")).toEqual(ItemMock.picture);
        expect(itemComponent.find('.item__price').text()).toEqual(useCurrencyFormat(ItemMock.price.amount, ItemMock.price.currency));
        expect(itemComponent.find('.item__address').text()).toEqual(ItemMock.address);
    })
})