"use client";

import { ReactNode, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ReactElement } from "react";

type AlertProps = {
  icon?: ReactNode;
  duration?: number
  trigger?: ReactElement;
  message?: string | ReactNode; // immediately show the alert when the message passes or changes
  variant?: 'filled' | 'outlined' | 'standard';
  severity: 'success' | 'error' | 'warning' | 'info';
}

export default function CustomAlert({ message, severity, variant, icon, duration, trigger }: AlertProps) {

  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  // Open the alert when the message changes and there is no trigger element to open it manually
  useEffect(() => {
    const timer = setTimeout(() => { // we use a timeout to ensure the alert opens after the component has rendered
      if (message && !trigger) handleOpen()
    }, 0)

    return () => clearTimeout(timer)
  }, [message, trigger])

  return (
    <>
      {trigger && <Box onClick={handleOpen}>{trigger}</Box>}

      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={duration ?? 6000} onClose={handleClose}>
        <Alert
          icon={icon}
          onClose={handleClose}
          severity={severity}
          variant={variant}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}