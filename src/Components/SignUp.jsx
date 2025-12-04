import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const SignupBox = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // API: demo signup reqres (won't actually create account)
  const handleSignupAPI = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        {
          email,
          password,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log(response.data);
      alert(`Account created, ${username}!`);
    } catch (error) {
      console.error(error);
      alert("Signup failed. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await handleSignupAPI();
  };

  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="signupModal">
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "460px", width: "85%", margin: "auto" }}
          >
            <div className="modal-content text-white">

              <div className="modal-header border-0 d-block text-center position-relative">
                <h2 className="modal-title fw-bold mt-4">Sign Up</h2>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 mt-2 me-3"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body px-4">
                <form onSubmit={handleSubmit}>

                  {/* Username */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faUser} className="text-black" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Full Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                    </span>
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faPhone} className="text-black" />
                    </span>
                    <input
                      type="tel"
                      className="form-control border-0"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="input-group mb-3" style={{ height: "40px", position: "relative" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>
                    <input
                      type={visible ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      }}
                    >
                      {visible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* Confirm Password */}
                  <div className="input-group mb-4" style={{ height: "40px", position: "relative" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>
                    <input
                      type={visible2 ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setVisible2(!visible2)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {visible2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* Submit */}
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary fw-bold"
                      style={{ height: "42px", borderRadius: "12px" }}
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>

                </form>

                <div className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="#" className="box-options text-decoration-none">
                    Login here
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupBox;
