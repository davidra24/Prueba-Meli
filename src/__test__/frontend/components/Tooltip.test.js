import React from 'react'
import { shallow, mount } from "enzyme";
import { Tooltip } from "../../../frontend/components/Tooltip";

describe('<Tooltip />', () => {
    test('Render del componente tooltip', () => {
        const tooltip = shallow(
            <Tooltip />
        )
        expect(tooltip.length).toEqual(1)
    })
    test('Render de montaje de tooltip y uso de props', () => {
        const textTooltipMock = 'Test de montaje de tooltip'
        const tooltip = mount(
            <Tooltip text={textTooltipMock}></Tooltip>
        )
        expect(tooltip.find('.tooltiptext').text()).toEqual(textTooltipMock);
    })
})