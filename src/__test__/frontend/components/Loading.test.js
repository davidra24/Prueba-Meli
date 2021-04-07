import React from 'react'
import { shallow } from "enzyme";
import { Loading } from "../../../frontend/components/Loading";

describe('<Loading />', () => {
    const loading = shallow(
        <Loading />
    )
    test('Render del componente Loading', () => {
        expect(loading.length).toEqual(1)
    })
})