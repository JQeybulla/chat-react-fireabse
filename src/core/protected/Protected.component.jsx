import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase.js";
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../store/user/userSlice.js";

function ProtectedComponent({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Truiggered')
      if (user) {
        setUser(user);
        setLoading(false);
      }else {
        setUser(null);
        setLoading(true);
        dispatch(logout())
        navigate('/login')
      }
    })

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h1>...Loading</h1>
  }

  if (!user) {
    return <Navigate to='/login' />
  }

  return <>{children}</>

}

export default ProtectedComponent;
