import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUpBox = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !phone || !password || !confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3013/api/users", {
        username,
        email,
        phone,
        password,
      });

      setMessage("Account created successfully!");

      setTimeout(() => {
        window.location.hash = "#/SignupDashboard";
      }, 800);
    } catch (err) {
      setMessage(err?.response?.data?.error || "Signup failed");
    }
  };

  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="signupModal">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "460px", width: "90%" }}>
            <div className="modal-content text-white">

              <div className="modal-header border-0 text-center position-relative">
                <h2 className="fw-bold mt-4">Sign Up</h2>
                <button type="button" className="btn-close position-absolute top-0 end-0 mt-2 me-3" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body px-4">
                <form onSubmit={handleSubmit}>

                  {/* Username */}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Full Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <input
                      type="tel"
                      className="form-control border-0"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="input-group mb-3 position-relative">
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type={visible ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ paddingRight: "40px" }}
                    />
                    <span
                      onClick={() => setVisible(!visible)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        zIndex: 10,
                      }}
                    >
                      {visible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* Confirm Password */}
                  <div className="input-group mb-4 position-relative">
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type={visible2 ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ paddingRight: "40px" }}
                    />
                    <span
                      onClick={() => setVisible2(!visible2)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        zIndex: 10,
                      }}
                    >
                      {visible2 ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <button className="btn btn-secondary w-100 fw-bold">
                    Create Account
                  </button>
                </form>

                {message && (
                  <p className="text-center mt-3 fw-bold text-warning">
                    {message}
                  </p>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBox;
