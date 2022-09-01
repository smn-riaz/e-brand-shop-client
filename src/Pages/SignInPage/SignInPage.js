import React, { useContext, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { CustomerInfoContext } from "../../App";

const SignInPage = () => {
  const navigate = useNavigate();
  const {setCustomerInfo} = useContext(CustomerInfoContext)
  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:5000/customer/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password}),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data.length>0){
          setCustomerInfo(data.data[0])
          navigate("/")
        } else if(data.data.length === 0){
              setIsUserAvailableMessage(true);
                setTimeout(() => {
                setIsUserAvailableMessage(false);
              }, 10000);
        }
      })
  };

  return (
    <main
      className="registerPage p-5"
      style={{
        backgroundImage: "url(https://i.ibb.co/80vc4Dm/register.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex justify-content-center row">
      <h3 className="text-center fw-bold">SIGN IN</h3>
      <div className=" col-lg-5 col-md-8 col-sm-9 p-2 login-container p-4">
      
        <Form onSubmit={handleLoginSubmit}>
          {isUserAvailableMessage && (
            <h6 className="text-center text-danger">Email or Password wrong</h6>
          )}
          <div className="p-2 m-1">
            <label for ="name" className="fw-bold">Email :
            </label> <br />  
             <input
              id="name"
              ref={emailRef}
              type="email"
              className="px-3 py-2 w-100"
              required
            />
          </div>
          <div className="p-2 m-1">
          <label for ="password" className="fw-bold">Password : 
            </label><br />  
            <input
            id="password"
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              className="px-3 py-2 w-100"
              required
            />
          </div>
          <label for="showPassword">
                <input type="checkbox" className="mx-3" onClick={handleShowPassword} />{" "}
                {showPassword ? "hide" : "show"}
              </label>

          <div className="p-2 m-1">
            <button
              type="submit"
              className="border-0 w-100 py-2 mx-auto fw-bold"
            >
              SIGN IN
            </button>
            <h6 className="fw-bold py-2">
              New to Vromon - Tour?{" "}
              <span className="toggle-text" onClick={() => navigate("/register")}>
                <u>REGISTER</u> Now.
              </span>
            </h6>
          </div>
        </Form>
      </div>
      </div>
    </main>
  );
};

export default SignInPage;
