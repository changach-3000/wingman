import { useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import APPCONTEXT from "./../context/APP";
import { API_ROOT } from "./../Config/config";

const baseUrl = API_ROOT;

const useAxios = () => {
  const { token } = useContext(APPCONTEXT);

  return async (obj, showToasts = false) => {
    try {
      const { headers, method, data, url, params } = obj;

      let res = await axios({
        headers: { Authorization: `Bearer ${token}`, ...headers },
        method: method,
        url: `${baseUrl}/${url}`,
        data: data,
        params: params,
      });

      if (showToasts) {
        // Handle success and show toast
        if (res.status === 201) {
          toast.success("Resource created successfully");
        } else if (res.status === 200) {
          toast.success("Resource fetched successfully");
        } // You can add more status codes and corresponding messages as needed
      }

      return res.data;
    } catch (error) {
      console.log(error);

      if (error.response && error.response.data && error.response.data.errors) {
        // Handle specific error response with "errors" field
        const { errors } = error.response.data;

        // Assuming the backend returns an array of error messages
        if (Array.isArray(errors)) {
          errors.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          if (showToasts) {
            if (error.response.status === 400) {
              toast.error("Bad request: Invalid input");
            } else if (error.response.status === 401) {
              toast.error("Unauthorized: Please log in");
            } else if (error.response.status === 404) {
              toast.error("Resource not found");
            } else {
              toast.error("An error occurred");
            }
          }
        }
        //
      } else if (error.message) {
        if (showToasts) {
          // Network error or other issues
          toast.error(error.message);
        }
      } else {
        //
        if (showToasts) {
          toast.error("An error occurred");
        }
      }

      return "error"; // Return null or handle the error further
    }
  };
};

export default useAxios;
