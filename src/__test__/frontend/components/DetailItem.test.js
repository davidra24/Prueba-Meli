import React from 'react'
import { shallow } from "enzyme";
import { DetailItemMock } from "../../../__mocks__/DetailItemMock";
import { DetailItem } from "../../../frontend/components/DetailItem";
import { translateCondition, useCurrencyFormat } from '../../../frontend/hooks/useCurrencyFormat';

describe('<DetailItem />', () => {
    const detailItem = shallow(
        <DetailItem item={DetailItemMock}/>
    )
    test('Render del componente DetailItem', () => {
        expect(detailItem.length).toEqual(1)
    })
    test('Render de propiedades de producto', () => {
        expect(detailItem.find('.detail__item-title').text()).toEqual(DetailItemMock.title);
        expect(detailItem.find('.detail__item-image').prop("src")).toEqual(DetailItemMock.picture);
        expect(detailItem.find('.detail__item-condition-p').text()).toEqual(translateCondition(DetailItemMock.condition));
        expect(detailItem.find('.detail__item-condition-sold').text()).toEqual(`${DetailItemMock.sold} vendidos`);  
        expect(detailItem.find('.detail__item-amount').text()).toEqual(useCurrencyFormat(DetailItemMock.price.amount, DetailItemMock.price.currency));
        expect(detailItem.find('.detail__item-description-description').text()).toEqual(DetailItemMock.description);
    })
})
