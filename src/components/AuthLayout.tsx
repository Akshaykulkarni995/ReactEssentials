import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }: any) => {
  const authStatus = useSelector((state: any) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? null : <>{children}</>;
};

export default Protected;
