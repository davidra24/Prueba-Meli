import React from 'react'
import { mount, shallow } from "enzyme";
import { Breadcum } from "../../../frontend/components/Breadcum";
import { CategoriesMock } from '../../../__mocks__/CategoriesMock';

describe('Test de componente Breadcum', () => {
    const breadcum = mount(
        <Breadcum categories={CategoriesMock} />
    )
    test('Test de render de Breadcum', () => {
        expect(breadcum.length).toEqual(1)
    })
    test('Validatión Breadcum', () => {
        const numberNodes = breadcum.find('p');
        expect(numberNodes).toHaveLength(CategoriesMock.length);
    })
})