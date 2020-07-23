import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/app/components/Card';

it('should renders card', () => {
    const wrapper = shallow(<Card content="lorem ipsum" title="lorem ipsum" />);

    expect(wrapper).toMatchSnapshot();
});
