import React, { createContext, useContext, useState, ReactNode } from 'react';

import Modal from '@/shared/modal/Modal';

type ModalName = 'createPost';
interface ModalConfig {
  Component: React.FC<any>;
  props: any;
}
interface ContextValue {
  // eslint-disable-next-line no-unused-vars
  show: (name: ModalName, props?: any) => void;
  hide: () => void;
}

const ModalContext = createContext<ContextValue>({ show: () => {}, hide: () => {} });

export const ModalProvider: React.FC<{
  registry: Record<ModalName, React.FC<any>>;
  children: ReactNode;
}> = ({ registry, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState<ModalConfig | null>(null);

  const show = (name: ModalName, props: any = {}) => {
    let Component: React.FC<any>;

    if (name in registry) {
      Component = registry[name];
    } else {
      console.error(`Modal with name "${name}" is not registered.`);
      return;
    }
    setCurrent({ Component, props });
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
    setCurrent(null);
  };

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      {current && (
        <Modal isOpen={isOpen} onClose={hide}>
          <current.Component {...current.props} onClose={hide} />
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
