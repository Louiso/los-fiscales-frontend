import React, { FC } from "react";

interface ErrorLogProps {
  error: any;
}

const ErrorLog: FC<ErrorLogProps> = ({ error }) => {
  return <div>{error.message}</div>;
};

export default ErrorLog;
