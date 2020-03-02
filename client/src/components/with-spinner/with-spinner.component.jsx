import React from "react";
import Spinner from "../spinner/spinner.component";

//passing in components
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
export default WithSpinner;
