import React, { useState } from "react";
import API from '../../api';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ ensure bootstrap JS is imported
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";

const DialogueBox = () => {
  const [visible, setVisible] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      identifier: emailOrUsername,
      password: password,
    };

    try {
      const res = await API.post("/users/login", loginData);
      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user || {}));

      setMessage("Login successful!");

      // ✅ Close login modal safely
      const loginModalEl = document.getElementById('myModal');
      const loginModal = bootstrap.Modal.getInstance(loginModalEl) || new bootstrap.Modal(loginModalEl);
      loginModal.hide();

      // Optional: redirect after a short delay
      setTimeout(() => {
        window.location.hash = "#/Dashboard";
      }, 500);

      // ✅ Reset fields
      setEmailOrUsername("");
      setPassword("");
      setVisible(false);

    } catch (err) {
      setMessage(err?.response?.data?.message || "Login failed");
    }
  };

  // ✅ Smooth switch to Sign Up modal
  const switchToSignup = () => {
    // Hide login modal
    const loginModalEl = document.getElementById('myModal');
    const loginModal = bootstrap.Modal.getInstance(loginModalEl) || new bootstrap.Modal(loginModalEl);
    loginModal.hide();

    // Show signup modal after a tiny delay to ensure DOM update
    setTimeout(() => {
      const signupModalEl = document.getElementById('signupModal');
      const signupModal = bootstrap.Modal.getInstance(signupModalEl) || new bootstrap.Modal(signupModalEl);
      signupModal.show();
    }, 50);
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

                {message && (
                  <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <div className="input-group mb-3" style={{ height: "40px", borderRadius: "12px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faUser} className="text-black" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Username or Email Address"
                      required
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                    />
                  </div>

                  <div className="input-group position-relative mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>

                    <div className="position-relative w-100">
                      <input
                        type={visible ? "text" : "password"}
                        className="form-control border-0"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingRight: "45px" }}
                      />

                      <span
                        className="eye-icon"
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <a href="#" className="box-options text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-secondary fw-bold mb-3" style={{ height: "42px", borderRadius: "12px" }}>
                      Login
                    </button>
                  </div>
                </form>

                <div className="d-flex align-items-center text-light my-4">
                  <hr className="flex-grow-1" />
                  <span className="px-3">Or login with</span>
                  <hr className="flex-grow-1" />
                </div>

                <div className="d-flex justify-content-center gap-4 mb-4">
                  <a href="#" className="fa fa-facebook btn px-3 py-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#" className="btn px-3 py-2"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="btn px-3 py-2"><FontAwesomeIcon icon={faGoogle} /></a>
                </div>

                <div className="text-center">
                  <span>
                    Do not have an account?{" "}
                    <span
                      onClick={switchToSignup}
                      className="box-options text-decoration-none"
                      style={{ cursor: "pointer" }}
                    >
                      Sign up now
                    </span>
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
