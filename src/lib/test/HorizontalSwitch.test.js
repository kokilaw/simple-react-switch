import renderer from 'react-test-renderer'
import React from 'react'
import HorizontalSwitch from '../HorizontalSwitch'

describe('HorizontalSwitch', () => {
    it('renders properly', () => {
        const tree = renderer.create(<HorizontalSwitch />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
