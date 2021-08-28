import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Button, Modal as ModalBoostrap, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AvForm from 'availity-reactstrap-validation/lib/AvForm';

function Modal() {
    const { modal, setModal } = useContext(ModalContext);
    if (modal == null) return <></>
    return <ModalBoostrap isOpen={modal != null} centered={true}>
        <AvForm onValidSubmit={modal.onValidSubmit}>
            <ModalHeader>
                {modal.title}
            </ModalHeader>
            <ModalBody>
                {modal.content}
            </ModalBody>
            <ModalFooter>
                {modal.footer ?? <div><div className="btn btnMainOutlined" onClick={() => setModal(null)}>Salir</div>
                    {modal.button}</div>}

            </ModalFooter>
        </AvForm>
    </ModalBoostrap>
}

export default Modal;