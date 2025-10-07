import React, { useState } from "react";

const DialogueBox = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  }

  return (
    <section className="form-box">
      <div className="container">
        <div className="modal fade" id="myModal">
          <div
            className="modal-dialog modal-dialog-centered border-0"
            style={{ maxWidth: "450px", width: "85%", margin: "auto" }}
          >
            <div className="modal-content text-white">
              <div className="modal-header border-0 d-block text-center position-relative">
                <h3 className="modal-title fw-bold mt-4">Log In</h3>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 mt-2 me-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body px-4">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3" style={{ borderRadius: "12px", height: "40px" }}>
                    <span className="input-group-text bg-white border-0" style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}>
                      <i className="fa fa-user text-black"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Username or Email Address"
                      id="username"
                      onChange={handleChange}
                      style={{ borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }}
                    />
                  </div>

                  <div className="input-group mb-3 mx-auto" style={{ borderRadius: "12px", height: "40px" }}>
                    <span className="input-group-text bg-white border-0" style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}>
                      <i className="fa fa-lock text-black"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control border-0"
                      placeholder="Password"
                      style={{ borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-info text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-secondary fw-bold mb-3" style={{ borderRadius: "12px", height: "42px" }}>
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
                  <a href="#" className="btn px-3 py-2">
                    <i className="fab fa-facebook-f fs-5"></i>
                  </a>
                  <a href="#" className="btn px-3 py-2">
                    <i className="fab fa-x-twitter fs-5"></i>
                  </a>
                  <a href="#" className="btn px-3 py-2">
                    <i className="fab fa-google fs-5"></i>
                  </a>
                </div>

                <div className="text-center">
                  <span>
                    Do not have an account?{" "}
                    <a href="#" className="text-info text-decoration-none">
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
