import { useState } from 'react';

export function useDialog(isOpen = false) {
  const [open, setOpen] = useState(isOpen);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen((isOpen) => !isOpen);

  return {
    open,
    onOpen,
    onClose,
    onToggle,
    setOpen,
  };
}
