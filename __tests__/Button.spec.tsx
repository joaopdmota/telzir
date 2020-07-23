import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/app/components/Button';

it('should call mock function when button is clicked', () => {
    const mockFn = jest.fn();
    const tree = shallow(<Button text="button test" handleClick={mockFn} />);
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});
