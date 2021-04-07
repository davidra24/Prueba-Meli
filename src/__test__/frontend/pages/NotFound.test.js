import React from 'react'
import { shallow } from "enzyme";
import { NotFound } from '../../../frontend/pages/NotFound';

describe('<NotFound />', () => {
    test('Render del componente App', () => {
        const notFound = shallow(
            <NotFound />
        )
        
        expect(notFound.length).toEqual(1)
    })
})