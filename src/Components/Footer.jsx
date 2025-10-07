import React from 'react'

const Footer = () => {
  const storeBadges = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
      alt: "Google Play",
    },
    {
      src: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
      alt: "App Store",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
  ];
  return (
    <footer className="w-100 py-4" style={{ backgroundColor: "#141414", overflowX: "hidden" }}>
        <div className="d-flex text-center mt-3 mb-5 justify-content-center mx-0">
          <div className="col-6 col-md-3">
            <a href="#" className="d-block text-decoration-none">Audio Description</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Investor Relations</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Legal Notices</a>
          </div>

          <div className="col-6 col-md-3">
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Help Centre</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Jobs</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Cookie Preferences</a>
          </div>

          <div className="col-6 col-md-3">
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Gift Cards</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Terms of Use</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Corporate Information</a>
          </div>

          <div className="col-6 col-md-3">
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Media Centre</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Privacy</a>
            <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Contact Us</a>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {storeBadges.map((badge, index) => (
              <div key={index} className="store-buttons">
                <img src={badge.src} alt={badge.alt} style={{ height: "40px" }} />
              </div>
            ))}
          </div>
        </div>


      <hr className="width-100" style={{ height: "0.2px" }} />

      <div className="text-center mb-3 text-secondary">
        <p className="mb-1">
          This site is for educational use only. All posters and images belong to their respective
          owners. No ownership or endorsement claimed.
        </p>
        <p className="mb-1">© 2025 vibe.Inc. All rights reserved. | Dhruv Kapoor</p>
        <p className="mb-2">Follow us on :</p>
      </div>

      <div className="social-icons">
        <div className="footer-links d-flex justify-content-center gap-3 fs-5">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="fs-4 me-3">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer


