'use client'

import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { ReactElement, ReactNode, useState } from "react"


type DialogProps = {
  title?: string,
  actions?: ReactNode,
  children: ReactNode,
  trigger: ReactElement,
}

export default function CustomDialog({ trigger, title, actions, children }: DialogProps) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {!open && <Box onClick={handleOpen}>{trigger}</Box>}

      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        {
          actions && (
            <DialogActions>
              {actions}
            </DialogActions>
          )
        }
      </Dialog >
    </>
  )
}