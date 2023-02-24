import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/slices/auth";


function Layout({ children }) {
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  },[])

  return (
    <>
      { children }
    </>
  )
}

export default Layout;