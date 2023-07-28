import { configureStore } from "@reduxjs/toolkit";
import messageinstanceReducer from "./messageInstanceSlice";
import appReducer from "./appSlice";
export default configureStore({
  reducer: {
    app: appReducer,
    messageinstance: messageinstanceReducer,
  },
});
