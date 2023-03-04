import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
const Login = ({ history }) => {
  // const isLogin = useSelector((state) => state.auth.isAuthenticated);
  // if (isLogin) history.push('/app');
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userName && password) {
      console.log(userName, password);
      const data = {
        userName: userName,
        password: password
      }
      localStorage.setItem("auth", JSON.stringify(data));
      setTimeout(() => {  
        < Redirect to = "/app/dashboard" />
      }, 1000)
    }
    else {
      alert("please fill all the field");
    }
  }
  return (
    <>
      <div className="container pt-5">
        <div className="row mt--2">
          <div className="col-md-6 order2">
          </div>
          <div className="col-md-6">
            <div className="card full-height ">
              <div className="card-body">
                <div className="signup-text text-center mb-5">
                  <h1>
                    Sign in
                  </h1>
                </div>
                <div className="form-signup">
                  <div className="form-group form-floating-label">
                    <input
                      id="inputFloatingLabel1"
                      type="text"
                      className="form-control input-solid inpt-sld"
                      placeholder="Enter your email in here"
                      name="email"
                      autoComplete="off"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      //   value={form.email || ''}
                      //   onChange={(evt) => inputChangeHandler(evt.target.name, evt.target.value)}
                      required
                    />
                    {/* <label htmlFor="inputFloatingLabel1" className="placeholder">
                      Your Email or Username
                    </label> */}

                    {/* {form.emailError.length
                      ? form.emailError.map((err, i) => <ErrorSpan key={i} error={err} />)
                      : null} */}
                  </div>
                  <div className="form-group form-floating-label position-relative">
                    <div className="input-group-prepend position-absolute">
                      <span
                        className="input-group-text"
                        id="basic-addon1"
                        onClick={() => setShowPassword(!showPassword)}
                        onKeyDown={() => setShowPassword(!showPassword)}
                      >
                        <i
                          className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <input
                      id="inputFloatingLabel2"
                      className="form-control input-solid inpt-sld"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password in here"
                      name="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {/* <label htmlFor="inputFloatingLabel2" className="placeholder">
                      Enter your password in here
                    </label> */}

                    {/* {form.passwordError.length
                      ? form.passwordError.map((err, i) => <ErrorSpan key={i} error={err} />)
                      : null} */}
                  </div>
                  <p className="text-right">
                    <Link to="/auth/forgot_password">Recovery passwod?</Link>
                  </p>
                  <div className="card-action text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={(e) => onSubmitHandler(e)}
                    >
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
