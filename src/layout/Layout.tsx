import Header from "@/components/global/Header";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ py: 4, px: 8 }}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
