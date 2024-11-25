import { shallow } from "enzyme"
import BodySection from "./BodySection"

describe('BodySection', () => {
  test('renders title in h2 tag and children', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>children</p>
      </BodySection>
    )
    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('h2').text()).toBe('test')

    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('p').text()).toBe('children')
  })
})
