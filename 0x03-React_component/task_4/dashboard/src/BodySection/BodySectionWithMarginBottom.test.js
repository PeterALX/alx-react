import { shallow } from "enzyme"
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom"
import BodySection from "./BodySection"

describe('BodySectionWithMarginBottom', () => {
  test('renders title in h2 tag and children', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test">
        <p>children</p>
      </BodySectionWithMarginBottom>
    )

    expect(wrapper.find(BodySection)).toHaveLength(1)

    const bodySectionProps = wrapper.find(BodySection).props()
    expect(bodySectionProps.title).toEqual('test');
    expect(bodySectionProps.children).toEqual(<p>children</p>);
  })
})
