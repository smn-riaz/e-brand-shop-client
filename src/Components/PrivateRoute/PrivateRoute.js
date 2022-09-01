import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CustomerInfoContext } from "../../App";


 const PrivateRoute = ({children})  => {
    const { customerInfo } = useContext(CustomerInfoContext);
    
    return customerInfo.email ? children :<Navigate to="/signin" />
    }

export default PrivateRoute