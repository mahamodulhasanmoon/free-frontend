
import { useContext } from "react";
import { Navigate, useLocation,  } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { LoaderIcon } from "react-hot-toast";



const PrivateRoutes = ({ children }:any) => {
  const {user,loading} = useContext(AuthContext)
  
  const { pathname } = useLocation();
  

  

  if (loading) {
    return <>
  <LoaderIcon />
    </>;
}


  if (!loading && !user?.email) {
    return <Navigate to='/login' state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoutes;