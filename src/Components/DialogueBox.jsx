import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

const DialogueBox = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAPI = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      console.log(response.data);
      alert(`Welcome back, ${email || username}!`);
    } catch (error) {
      console.error(error);
      alert("Wrong email or password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple front-end validation
    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    await handleAPI();
  };

  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="myModal">
          <div
            className="modal-dialog modal-dialog-centered border-0"
            style={{ maxWidth: "450px", width: "85%", margin: "auto"}}
          >
            <div className="modal-content text-white">
              {/* Modal Header */}
              <div className="modal-header border-0 d-block text-center position-relative">
                <h2 className="modal-title fw-bold mt-4">Log In</h2>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 mt-2 me-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body px-4">
                <form onSubmit={handleSubmit}>
                  {/* Username Input */}
                  <div
                    className="input-group mb-3"
                    style={{ borderRadius: "12px", height: "40px" }}
                  >
                    <span
                      className="input-group-text bg-white border-0"
                      style={{
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} className="text-black" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Username or Email Address"
                      id="emailOrUsername"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setUsername(e.target.value);
                      }}
                      style={{
                        borderTopRightRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                    />
                  </div>

                  {/* Password Input with Eye Icon */}
                  <div
                    className="input-group mb-3 mx-auto"
                    style={{
                      position: "relative",
                      height: "40px",
                      borderRadius: "12px",
                    }}
                  >
                    <span
                      className="input-group-text bg-white border-0"
                      style={{
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                      }}
                    >
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>
                    <input
                      type={visible ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        borderTopRightRadius: "12px",
                        borderBottomRightRadius: "12px",
                        paddingRight: "40px",
                      }}
                      required
                    />
                    <span
                      onClick={() => setVisible(!visible)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#555",
                        zIndex: 10,
                      }}
                    >
                      {visible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* Remember me and Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="box-options text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary fw-bold mb-3"
                      style={{
                        borderRadius: "12px",
                        height: "42px",
                        border: "none",
                      }}
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>

                {/* Or login with */}
                <div className="d-flex align-items-center text-light my-4">
                  <hr className="flex-grow-1" />
                  <span className="px-3">Or login with</span>
                  <hr className="flex-grow-1" />
                </div>

                {/* Social Buttons */}
                <div className="d-flex justify-content-center gap-4 mb-4">
                  <a href="#" className="btn px-3 py-2">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="fa fa-facebook fs-4"
                    />
                  </a>
                  <a href="#" className="btn px-3 py-2">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa fa-twitter fs-4"
                    />
                  </a>
                  <a href="#" className="btn px-3 py-2">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="fa fa-google fs-4"
                    />
                  </a>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <span>
                    Do not have an account?{" "}
                    <a href="#" className="box-options text-decoration-none">
                      Sign up now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialogueBox;
