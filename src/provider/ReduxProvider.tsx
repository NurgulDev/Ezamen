import { store } from "@/redux/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
interface typeRedux {
  children: ReactNode;
}
const ReduxProvider: FC<typeRedux> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
