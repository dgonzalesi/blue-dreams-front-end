import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/reducer/user';

const Login = ({ setCurrUser, setShow }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = 'https://blue-dreams-back-end.herokuapp.com/login';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) { throw data.error; }

      localStorage.setItem('token', response.headers.get('Authorization'));
      data.token = response.headers.get('Authorization');
      dispatch(signUp(data));
      setCurrUser(data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet,
        <a href="#signup" onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
};
export default Login;
