import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";





const LoginScreen = () => {
  const [username, setUsername] = useState('')

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {
        name: username || 'USER'
      }
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    });

    console.log('Sesion iniciada')
  }

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" className="form-control w-25" />

      <button
        className="btn btn-primary mt-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen