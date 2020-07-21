import React, { FunctionComponent, ReactNode } from 'react';
import Modal from 'react-modal';
import Button from '../Button';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    contentLabel?: string;
    children?: ReactNode;
}

const styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CustomModal: FunctionComponent<ModalProps> = ({
    isOpen,
    closeModal,
    contentLabel,
    children,
}) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel={contentLabel}
    >
        {children}

        <Button
            text="Fechar"
            styles={{
                width: 'max-content',
            }}
            handleClick={closeModal}
        />
    </Modal>
);

export default CustomModal;
