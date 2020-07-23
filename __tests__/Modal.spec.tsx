import React from 'react';
import Modal from 'react-modal';
import { shallow } from 'enzyme';

import CustomModal from '../src/app/components/Modal';

it('renders react-modal', () => {
    const handleClose = jest.fn();
    const wrapper = shallow(
        <CustomModal isOpen={true} closeModal={handleClose} />,
    );
    expect(wrapper.find(Modal)).toHaveLength(1);
});
