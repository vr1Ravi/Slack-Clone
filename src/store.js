import { configureStore } from "@reduxjs/toolkit";
import messageinstanceReducer from "./messageInstanceSlice";
import loadingSlice from "./loadingSlice";
import appReducer from "./appSlice";
export default configureStore({
  reducer: {
    app: appReducer,
    messageinstance: messageinstanceReducer,
    loading: loadingSlice,
  },
});
