import React, { useState } from "react";
import API from '../../api';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";

const DialogueBox = () => {
  const [visible, setVisible] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // --- REAL LOGIN LOGIC (Updated for identifier) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      identifier: emailOrUsername, // updated key to match backend
      password: password,
    };

    try {
      const res = await API.post("/users/login", loginData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user || {}));

      setMessage("Login successful!");

      // ✅ CLOSE MODAL (SAFE WAY)
      const modalElement = document.getElementById("myModal");
      if (modalElement && window.bootstrap) {
        const modalInstance =
          window.bootstrap.Modal.getInstance(modalElement) ||
          new window.bootstrap.Modal(modalElement);

        modalInstance.hide();
      }

      setTimeout(() => {
        window.location.hash = "#/Dashboard";
      }, 800);

    } catch (err) {
      setMessage(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered border-0"
            style={{ maxWidth: "450px", width: "85%", margin: "auto" }}>

            <div className="modal-content text-white">

              {/* Header */}
              <div className="modal-header border-0 d-block text-center position-relative">
                <h2 className="modal-title fw-bold mt-4">Log In</h2>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 mt-2 me-3"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body px-4">

                {/* Alert Message */}
                {message && (
                  <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  {/* Email / Username */}
                  <div className="input-group mb-3" style={{ height: "40px", borderRadius: "12px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faUser} className="text-black" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Username or Email Address"
                      required
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="input-group mb-3 position-relative" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>
                    <input
                      type={visible ? "text" : "password"}
                      className="form-control border-0"
                      placeholder="Password"
                      required
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
                        zIndex: 10,   // ensure it’s above input
                        userSelect: "none" // prevent text selection while clicking
                      }}
                    >
                      {visible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* Remember + Forgot */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <a href="#" className="box-options text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid">
                    <button className="btn btn-secondary fw-bold mb-3" style={{ height: "42px", borderRadius: "12px" }}>
                      Login
                    </button>
                  </div>
                </form>

                {/* OR */}
                <div className="d-flex align-items-center text-light my-4">
                  <hr className="flex-grow-1" />
                  <span className="px-3">Or login with</span>
                  <hr className="flex-grow-1" />
                </div>

                {/* Social */}
                <div className="d-flex justify-content-center gap-4 mb-4">
                  <a href="#" className="fa fa-facebook btn px-3 py-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#" className="btn px-3 py-2"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="btn px-3 py-2"><FontAwesomeIcon icon={faGoogle} /></a>
                </div>

                {/* Signup Link */}
                <div className="text-center">
                  <span>
                    Do not have an account?{" "}
                    <a href="#" className="box-options text-decoration-none"
                      data-bs-toggle="modal" data-bs-target="#signupModal">
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
