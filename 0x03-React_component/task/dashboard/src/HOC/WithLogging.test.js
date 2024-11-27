import { shallow } from "enzyme"
import WithLogging from "./WithLogging"
import Login from "../Login/Login"

describe('WithLogging', () => {
  test('console log is called with "Component" when wrapped element is pure html', () => {
    console.log = jest.fn()
    const Component = WithLogging(() => <h1>foo</h1>)
    const wrapper = shallow(<Component />)
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted')
    wrapper.unmount()
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount')
  })
  test('console log is called with <component name> when wrapped element is a named component', () => {
    console.log = jest.fn()
    const Component = WithLogging(Login)
    const wrapper = shallow(<Component />)
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted')
    wrapper.unmount()
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount')
  })
})
