import './login.css';
import ring from '../../assets/web-icon/ring.png';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logincom = () => {
  const [registry, setRegistry] = useState(true);
  const [login, setLogin] = useState(false);
  const [Signin, setSignin] = useState(false);
  const navigate = useNavigate();

  // Log in authentication variables
  const [InvalidPass, setInvalidPass] = useState(false);
  const [InvalidUser, setInvalidUser] = useState(false);
  const [InvalidPassUser, setInvalidPassUser] = useState(false);
  const [LogUsername, setLogUsername] = useState('');
  const [LogPassword, setLogPassword] = useState('');
  const LogUserRef = useRef();
  const LogPassref = useRef();

  // Sign in authentication variables
  const [SignUsername, setSignUsername] = useState('');
  const [SignPassword, setSignPassword] = useState('');
  const ConfirmRef = useRef();
  const SignUserRef = useRef();

  const handleLogin = () => {
    setRegistry(false);
    setLogin(true);
  };

  const handleSignin = () => {
    setRegistry(false);
    setSignin(true);
  };

  const handleHomePage = () => {
    navigate('/home');
  };

  const AuthLogin = () => {
    const correctUsername = 'reymark';
    const correctPassword = 'dequito';

    if (LogUsername !== correctUsername && LogPassword !== correctPassword) {
      setInvalidUser(false);
      setInvalidPass(false);
      setInvalidPassUser(true);
      return;
    }
    if (LogUsername === correctUsername && LogPassword === correctPassword) {
      navigate('/home');
      return;
    }
    if (LogUsername !== correctUsername) {
      LogUserRef.current.style.border = '2px solid red';
      setInvalidUser(true);
      setInvalidPassUser(false);
    }
    if (LogPassword !== correctPassword) {
      LogPassref.current.style.border = '2px solid red';
      setInvalidPass(true);
      setInvalidPassUser(false);
    }
  };

  const AuthSignin = () => {
    const hasNoValue = SignUsername === '';
    const ConfirmPassword = ConfirmRef.current.value;

    if (hasNoValue) {
      SignUserRef.current.style.border = '2px solid red';
      console.log('please input value!');
      return;
    }
    if (ConfirmPassword !== SignPassword) {
      ConfirmRef.current.style.border = '2px solid red';
      return;
    }
    if (!hasNoValue && ConfirmPassword === SignPassword) {
      navigate('/home');
    }
  };

  return (
    <div className='login'>
      <div className='bacground'>
        <h1>MARKIES</h1>
        
        <div className='login-box'>
          <div className='grid-1'>
            {InvalidPass && <span>password didnt matched</span>}
            {InvalidUser && <span>username didnt matched</span>}
            {InvalidPassUser && <span>username & password didnt matched</span>}
            <div className='impulsive'>
              {registry && (
                <>
                  <button onClick={handleLogin}>Log in</button>
                  <button onClick={handleSignin}>Sign in</button>
                  <button onClick={handleHomePage}>Skip for now</button>
                </>
              )}
              {login && (
                <>
                  <input
                    ref={LogUserRef}
                    value={LogUsername}
                    onChange={(e) => setLogUsername(e.target.value)}
                    placeholder='username'
                    type='text'
                  />
                  <input
                    ref={LogPassref}
                    value={LogPassword}
                    onChange={(e) => setLogPassword(e.target.value)}
                    placeholder='password'
                    type='password'
                  />
                  <button onClick={AuthLogin}>Login</button>
                </>
              )}
              {Signin && (
                <>
                  <input
                    ref={SignUserRef}
                    value={SignUsername}
                    onChange={(e) => setSignUsername(e.target.value)}
                    placeholder='username'
                    type='text'
                  />
                  <input
                    value={SignPassword}
                    onChange={(e) => setSignPassword(e.target.value)}
                    placeholder='password'
                    type='password'
                  />
                  <input
                    ref={ConfirmRef}
                    placeholder='confirm-password'
                    type='password'
                  />
                  <button onClick={AuthSignin}>Create account</button>
                </>
              )}
            </div>
          </div>
          
          <div className='grid-2'>
            <hr />
            <div className='circle'>
              <img src={ring} alt='ring' />
            </div>
            <hr />
          </div>
        </div>
        <p className='login-footer-text'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indulge in the finest flavors with our premium food products, crafted with the freshest ingredients to bring gourmet quality to your table—satisfy your cravings today!
        </p>
      </div>
    </div>
  );
};

export default Logincom;
