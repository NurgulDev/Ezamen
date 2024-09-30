"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";
interface typeRootLayoutClient {
  children: ReactNode;
}
const RootLayoutClient: FC<typeRootLayoutClient> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default RootLayoutClient;
