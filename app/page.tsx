
import CustomAlert from "@/components/CustomAlert";
import CustomDialog from "@/components/CustomDialog";
import { Box, Button, Container } from "@mui/material";

export default function Home() {
  const btn = <Container><Button>Open Dialog</Button></Container>
  return (
    <CustomDialog trigger={btn}>
      <Box>Hi, I am a custom dialog</Box>
      <CustomAlert message='Hello, I am a custom alert!' severity="info" trigger={<Button>Open The Alert</Button>} />
    </CustomDialog>
  );
}
