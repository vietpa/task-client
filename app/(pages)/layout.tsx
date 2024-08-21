import React, { Suspense, useState } from "react";
import { Container } from "@mui/material";
import Loading from "./loading";

export const experimental_ppr = true;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ width: '100%', display: 'flex' }}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </Container>
    </>
  )
}

export default Layout;
