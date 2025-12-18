import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUpBox = () => {
  const [visible, setVisible] = useState(false);      // Password field
  const [visible2, setVisible2] = useState(false);    // Confirm Password field

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.username.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setMessage("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3013/users/register", form);
      setMessage("Account created successfully!");

      // ✅ Close the signup modal safely
      const signupModalEl = document.getElementById('signupModal');
      const signupModal = bootstrap.Modal.getInstance(signupModalEl) || new bootstrap.Modal(signupModalEl);
      signupModal.hide();

      // ✅ Reset form fields and eye visibility
      setForm({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setVisible(false);
      setVisible2(false);

      // Optional: redirect after short delay
      setTimeout(() => {
        window.location.hash = "#/SignupDashboard";
      }, 500);
    } catch (err) {
      setMessage(err?.response?.data?.error || "Sign up failed");
    }
  };

  const switchToLogin = () => {
    // Hide signup modal
    const signupModalEl = document.getElementById("signupModal");
    const signupModal =
      bootstrap.Modal.getInstance(signupModalEl) ||
      new bootstrap.Modal(signupModalEl);

    signupModal.hide();

    // Show login modal after small delay
    setTimeout(() => {
      const loginModalEl = document.getElementById("myModal");
      const loginModal =
        bootstrap.Modal.getInstance(loginModalEl) ||
        new bootstrap.Modal(loginModalEl);

      loginModal.show();
    }, 50);
  };


  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="signupModal">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "460px", width: "85%", margin: "auto" }}>
            <div className="modal-content text-white">
              <div className="modal-header border-0 d-block text-center position-relative">
                <h2 className="modal-title fw-bold mt-4">Sign Up</h2>
                <button type="button" className="btn-close position-absolute top-0 end-0 mt-2 me-3" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body px-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faUser} className="text-black" />
                    </span>
                    <input type="text" name="username" className="form-control border-0" placeholder="Full Name" value={form.username} onChange={handleChange} />
                  </div>

                  {/* Email */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                    </span>
                    <input type="email" name="email" className="form-control border-0" placeholder="Email Address" value={form.email} onChange={handleChange} />
                  </div>

                  {/* Phone */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faPhone} className="text-black" />
                    </span>
                    <input type="tel" name="phone" className="form-control border-0" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                  </div>

                  {/* Password */}
                  <div className="input-group mb-3" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>

                    <div className="position-relative w-100">
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        className="form-control border-0"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        style={{ paddingRight: "45px" }}
                      />

                      <span
                        className="eye-icon"
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="input-group mb-4" style={{ height: "40px" }}>
                    <span className="input-group-text bg-white border-0">
                      <FontAwesomeIcon icon={faLock} className="text-black" />
                    </span>

                    <div className="position-relative w-100">
                      <input
                        type={visible2 ? "text" : "password"}
                        name="confirmPassword"
                        className="form-control border-0"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={{ paddingRight: "45px" }}
                      />

                      <span
                        className="eye-icon"
                        onClick={() => setVisible2(!visible2)}
                      >
                        {visible2 ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-secondary fw-bold" style={{ height: "42px", borderRadius: "12px" }} type="submit">
                      Create Account
                    </button>
                  </div>
                </form>

                {message && (
                  <p className="text-center mt-3 fw-bold text-warning">{message}</p>
                )}

                <div className="text-center mt-4">
                  Already have an account?{" "}
                  <span onClick={switchToLogin} className="box-options text-decoration-none" style={{ cursor: "pointer" }}>
                    Login here
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

export default SignUpBox;
