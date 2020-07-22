import React, { FunctionComponent, ReactNode } from 'react';
import { Grid } from '@material-ui/core';
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
        <Grid container direction="row" justify="flex-end" alignItems="center">
            <Button
                text="Fechar"
                styles={{
                    width: 'max-content',
                }}
                handleClick={closeModal}
            />
        </Grid>
    </Modal>
);

export default CustomModal;
