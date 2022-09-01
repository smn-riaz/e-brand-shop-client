import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);

  const [validName, setValidName] = useState("");
  const [invalidNameMessage, setInvalidNameMessage] = useState(false);

  const [validEmail, setValidEmail] = useState("");
  const [invalidEmailMessage, setInvalidEmailMessage] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [strongPasswordMessage, setStrongPasswordMessage] = useState(false);


  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleEmailBlur = (event) => {
    if (
      String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValidEmail(event.target.value);
      setInvalidEmailMessage(false);
    } else {
      setInvalidEmailMessage(true);
    }
  };

  const handlePasswordBlur = (event) => {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (event.target.value.match(regularExpression)) {
      setConfirmPassword(event.target.value);
      setStrongPasswordMessage(false);
    } else {
      setStrongPasswordMessage(true);
    }
  };

  const handleNameBlur = (event) => {
   const name = event.target.value;
    if (name.match(/^[a-zA-Z]+$/g) && name.length > 3 && name.length < 21) {
      setValidName(name);
      setInvalidNameMessage(false);
    } else {
      setInvalidNameMessage(true);
    }
  };



  
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const name = validName.charAt(0) + validName.slice(1);
    const email = validEmail;
    const password = confirmPassword;
    const cart = []
    

    fetch("http://localhost:5000/customer/isEmailAvailable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result >0) {
          setIsUserAvailableMessage(true)
          setTimeout(() => {
            setIsUserAvailableMessage(false)
          }, 12000);
        } 


        else if (data.result === 0) {
          if (password && email && name) {
            const signupData = {
              name, 
              email, 
              password, 
              userRole:"customer",
              cart
            };
            fetch("http://localhost:5000/customer/addCustomer", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(signupData),
            })
              .then((res) => res.json())
              .then((data) => {
                if(data){
                  navigate("/signin")
                }
              });
          } else {
            // setRegistered(false)
          }
        }
      })


  };




  return (
    <main className="registerPage p-5"
      style={{
        backgroundImage: "url(https://i.ibb.co/80vc4Dm/register.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex justify-content-center row">
        <h3 className="text-center fw-bold">REGISTER</h3>
        <div className=" col-lg-5 col-md-8 col-sm-9 p-2 login-container m-4">
          <Form onSubmit={handleSignupSubmit}>
            {isUserAvailableMessage && (
              <h6 className="text-center alertText">
                This email has already used
              </h6>
            )}
            <div className="p-2 m-1">
              <label for="name"  className="fw-bold">Username: </label><br />
              <input
              id="name"
                type="text"
                className="px-3 py-2 w-100"
                required
                onBlur={handleNameBlur}
              />
            </div>
            {invalidNameMessage && (
              <h6 className="fw-bold alertText">
                Only character allowed (3-20)
              </h6>
            )}
            <div className="p-2 m-1">
              <label for="email" className="fw-bold">Email : </label><br />
              <input
              id="email"
                type="email"
                className="px-3 py-2 w-100"
                placeholder="Email"
                required
                onBlur={handleEmailBlur}
              />
            </div>
            {invalidEmailMessage && (
              <h6 className="alertText fw-bold ">Not valid email address</h6>
            )}
            <div className="p-2 m-1">
            <label for="password" className="fw-bold">Pasword : </label><br />
              <input
              id="password"
                type={showPassword ? "text" : "password"}
                className="px-3 py-2 w-100"
                required
                onBlur={handlePasswordBlur}
              />
              <label for="showPassword">
                <input type="checkbox" onClick={handleShowPassword} />{" "}
                {showPassword ? "hide" : "show"}
                <small className="px-4 fw-bold">
                  8-16 chars, a num, a special char, capital , small
                </small>
              </label>
            </div>

            <div>
              {strongPasswordMessage && (
                <h6 className="text-danger fw-bold">
                  Not strong password ! Plz, follow the format.
                </h6>
              )}
            </div>

            <div className="row d-flex justify-content-around px-1">
              <div className="col-5"></div>
            </div>

            <div className="p-2 m-1">
              <button
                type="submit"
                className="border-0 w-100 py-2 mx-auto fw-bold"
              >
                REGISTER
              </button>
            </div>
          </Form>
          <h6 className="fw-bold p-2">
            Already registered ?{" "}
            <span className="toggle-text" onClick={() => navigate("/signin")}>
              <u>SIGN IN.</u>
            </span>
          </h6>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
