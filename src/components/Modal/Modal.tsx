import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    children: ReactNode; // Permet d'accepter des enfants
}

const Modal = ({ children, isOpen }: ModalProps) => {
    return (
        <main className={`${isOpen ? 'flex' : 'hidden'} z-50 modal absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50  justify-center items-center`}>
            {children}
        </main>
    )
}

export default Modal