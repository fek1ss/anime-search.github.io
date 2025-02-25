import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    if (!props.isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={props.toggle}>
            <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
                <p>{props.children}</p>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
    );
}
