import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Oops!</h1>
        <p className="text-gray-700">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-700 italic">
          {error?.statusText || error?.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
