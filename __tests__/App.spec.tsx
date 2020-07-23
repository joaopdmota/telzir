import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app/pages/App';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
});
