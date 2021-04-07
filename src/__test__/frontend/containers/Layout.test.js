import React from 'react'
import { shallow } from "enzyme";
import { Layout } from "../../../frontend/containers/Layout";
import { ProviderMock } from "../../../__mocks__/ProviderMock";

describe('<Layout />', () => {
    test('Render del container layout', () => {
        const layout = shallow(
            <ProviderMock>
                <Layout />
            </ProviderMock>
        )
        expect(layout.length).toEqual(1)
    })
    test('Render de montaje de layout y head', () => {
        
        const titleMock = 'Test titulo Layout';
        const descriptionMock = 'Test titulo Layout';
        const layout = shallow(
            <Layout title={titleMock} description={descriptionMock}></Layout>
        )
        expect(layout.find("meta[name='description']").props().content).toEqual(descriptionMock);
        expect(layout.find("title").text()).toEqual(`${titleMock} | Mercado Libre`);

        
    })
})