"use client";

import { ReactNode, useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type AlertProps = {
  message?: string;
  icon?: ReactNode;
  duration?: number
  children?: ReactNode;
  variant?: 'filled' | 'outlined' | 'standard';
  severity: 'success' | 'error' | 'warning' | 'info';
}

export default function CustomAlert({ message, severity, variant, icon, duration, children }: AlertProps) {

  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  // Open the alert when the message changes
  useEffect(() => {
    const timer = window.setTimeout(() => { // we use a timeout to ensure the alert opens after the component has rendered
      if (message || children) handleOpen()
    }, 0)

    return () => window.clearTimeout(timer)
  }, [message, children])

  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={duration ?? 6000} onClose={handleClose}>
      <Alert
        icon={icon}
        onClose={handleClose}
        severity={severity}
        variant={variant}
      >
        {children || message}
      </Alert>
    </Snackbar>
  )
}