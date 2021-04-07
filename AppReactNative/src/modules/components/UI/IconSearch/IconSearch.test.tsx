import React from 'react';
import { shallow, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'react-native-vector-icons/AntDesign';
import { IconSearch } from '..';
import { defaultStyles } from '../../../../constans';

configure({ adapter: new Adapter() });

describe('IconSearch', () => {
  it('should match to snapshot', () => {
    const component = shallow(<IconSearch isVisible />);
    expect(component).toMatchSnapshot();
  });

  it('should contains an icon component', () => {
    const component = shallow(<IconSearch isVisible />);
    expect(component.find(Icon).length).toBe(1);
  });

  it('icon size should be large', () => {
    const component = shallow(<IconSearch isVisible />);
    expect(component.find({ size: defaultStyles.fontSize.large }).length).toBe(
      1,
    );
  });

  it('should contain right icon name', () => {
    const component = shallow(<IconSearch isVisible />);
    expect(component.find({ name: 'search1' }).length).toBe(1);
  });

  it('icon color should be grey', () => {
    const component = shallow(<IconSearch isVisible />);
    expect(component.find({ color: defaultStyles.colors.grey }).length).toBe(1);
  });
});
