import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <Typography align="center" color="common.white">
          © 2020 - {new Date().getFullYear()}, suchcodewow
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
