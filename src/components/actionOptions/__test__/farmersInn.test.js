import React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy } from 'sinon'

import data from '../farmersInn'

/* eslint-disable no-restricted-syntax */

configure({ adapter: new Adapter() })

const props = {
  G: {
    players: {
      0: {
        land: [
          [
            { type: 'grain', contents: [] },
            { type: 'grain', contents: [] },
            { type: 'grain', contents: [] },
            { type: 'grain', contents: [] },
          ],
        ],
        dikes: [],
      },
    },
    supplies: {
      forestPark: 3,
    },
  },
  ctx: { currentPlayer: 0 },
  moves: {},
}

function checkForCheckboxes(mountedComponent, selector, expectedLength) {
  const grainFields = mountedComponent.find(selector)
  expect(grainFields).toHaveLength(expectedLength)

  for (const i of [...Array(expectedLength).keys()]) {
    const inputs = grainFields.at(i).find('input')
    expect(inputs).toHaveLength(1)
    expect(inputs.at(0).prop('type')).toEqual('checkbox')
  }
}

describe('The Farmers Inn component', () => {
  it('is visible', () => {
    expect(data.visible()).toBeTruthy()
  })

  it('shows checkboxes on grain and flax fields', () => {
    const Component = data.component
    const mountedComponent = mount(<Component {...props} />)

    checkForCheckboxes(mountedComponent, '.grain', 4)
    checkForCheckboxes(mountedComponent, '.flax', 0)
  })

  it('allows to select and deselect', () => {
    const Component = data.component
    const mountedComponent = mount(<Component {...props} />)
    // https://github.com/airbnb/enzyme/issues/216
    const grainField = mountedComponent
      .find('.grain')
      .at(0)
      .find('input')
      .at(0)
    grainField.simulate('change', { target: { checked: true } })
    expect(mountedComponent.state().checked.length).toBe(1)

    // deselect
    grainField.simulate('change', { target: { checked: false } })
    expect(mountedComponent.state().checked.length).toBe(0)
  })

  it('denies selecting more than 3', () => {
    const Component = data.component
    const mountedComponent = mount(<Component {...props} />)

    // https://github.com/airbnb/enzyme/issues/216
    // try to select all 4 grain fields
    for (const i of [0, 1, 2, 3]) {
      const field = mountedComponent
        .find('.grain')
        .at(i)
        .find('input')
        .at(0)
      field.simulate('change', { target: { checked: true } })
    }

    // tried to click on 4 checkboxes, still selected should be only 3
    // since this is the maximum amount allowed by farmers inn.
    expect(mountedComponent.state().checked.length).toBe(3)
  })

  it('denies selecting more than there are forests available', () => {
    const Component = data.component
    const propsWithOnlyOneForest = {
      ...props,
      G: {
        ...props.G,
        supplies: {
          forestPark: 1,
        },
      },
    }
    const mountedComponent = mount(<Component {...propsWithOnlyOneForest} />)

    // https://github.com/airbnb/enzyme/issues/216
    // try to select all 4 grain fields
    for (const i of [0, 1, 2, 3]) {
      const field = mountedComponent
        .find('.grain')
        .at(i)
        .find('input')
        .at(0)
      field.simulate('change', { target: { checked: true } })
    }

    // tried to click on 4 checkboxes, still selected should be only 1,
    // since there is only 1 forest tile
    expect(mountedComponent.state().checked.length).toBe(1)
  })

  it('calls into moves.option when clicking on done', () => {
    const Component = data.component
    const propsWithMoves = {
      ...props,
      moves: {
        option: spy(),
      },
    }
    const mountedComponent = mount(<Component {...propsWithMoves} />)

    // select two grain fields
    for (const i of [0, 1]) {
      const field = mountedComponent
        .find('.grain')
        .at(i)
        .find('input')
        .at(0)
      field.simulate('change', { target: { checked: true } })
    }

    // click on done
    const doneButton = mountedComponent.find({ type: 'submit' }).at(0)
    doneButton.simulate('click')

    // assert moves.option has been called appropriately
    const fn = propsWithMoves.moves.option
    expect(fn.getCall(0).args).toMatchObject([{ locs: [[0, 0], [0, 1]] }])
  })
})
