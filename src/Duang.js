import React from 'react';
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Duang2 from './Duang2'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('can render and updata a counter', () => {
  // 测试首次渲染和 effect
  act(() => {
    ReactDOM.render(<Duang2 />, container)
  })
  const button = container.querySelector('button')
  const label = container.querySelector('p')
  expect(label.textContent).toBe('You Cliked 0 times')
  expect (document.title).toBe('You clicked 0 times')

  // 测试第二次渲染和 effect
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  expect(label.textContent).toBe('YOU cliked 1 times')
  expect(document.title).toBe('you cliked 1 times')
})