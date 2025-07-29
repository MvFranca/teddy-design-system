import React from "react";
interface ModalProps {
    title: string;
    textButton: string;
    alert?: string;
    onSubmit?: (event: React.FormEvent) => void;
    onConfirm?: (event: React.FormEvent) => void;
    onClose?: () => void;
    isOpen: boolean;
    children?: React.ReactNode;
}
export declare const Modal: ({ title, textButton, alert, onSubmit, onConfirm, onClose, isOpen, children, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
