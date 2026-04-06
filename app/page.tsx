
'use client'

import CustomAlert from "@/components/CustomAlert";
import CustomDialog from "@/components/CustomDialog";
import { Box, Button, Container } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const btn = <Container><Button>Open Dialog</Button></Container>
  return (
    <CustomDialog trigger={btn} open={open} setOpen={setOpen}>
      <Box>Hi, I am a custom dialog</Box>
      {/* <CustomAlert message='Hello, I am a custom alert!' severity="info" trigger={<Button>Open The Alert</Button>} /> */}
      <Button onClick={() => setOpen(false)}>Close The Dialog</Button>
    </CustomDialog>
  );
}
