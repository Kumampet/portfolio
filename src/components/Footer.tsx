'use client'
import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = (): React.ReactNode => {
  return (
    <React.Fragment>
      <AppBar component="footer" position="static" sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: 'black' }}>
              ©2023 Kumampet
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Footer;