import React from 'react';
import { shallow } from 'enzyme';
import Divider from '../src/app/components/Divider';

it('should renders Divider', () => {
    const wrapper = shallow(<Divider space={50} />);

    expect(wrapper).toMatchSnapshot();
});
