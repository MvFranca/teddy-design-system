import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import Close from "../../icons/close.svg";
import clsx from "clsx";

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

export const Modal = ({
  title,
  textButton,
  alert,
  onSubmit,
  onConfirm,
  onClose,
  isOpen,
  children,
}: ModalProps) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-white p-6 rounded-lg shadow-md w-full max-w-[400px] transform transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[1rem] font-bold">{show && title}</h3>
          {onClose && (
            <button
              onClick={onClose}
              className="cursor-pointer text-gray-500 hover:text-red-500"
            >
              <img src={Close} width={12} height={12} />
            </button>
          )}
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {alert && (
            <p className="text-red-600 text-sm bg-red-100 p-2 rounded">
              {alert}
            </p>
          )}

          {children}

          <Button
            type="submit"
            fullWidth
            variant="solid"
            size="sm"
            onClick={onConfirm}
            className="mt-[5px]"
          >
            {textButton}
          </Button>
        </form>
      </div>
    </div>
  );
};
