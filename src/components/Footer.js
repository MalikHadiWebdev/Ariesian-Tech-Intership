// import React from "react";
// import "./Footer.css";
// import {
//   FaUser,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaYoutube,
//   FaGithub,
//   FaInstagram,
//   FaFacebook,
//   FaTiktok,
//   FaWhatsapp,
//   FaLinkedin,
// } from "react-icons/fa";
// import logo from "../assets/images/malik_hadi_logo.png";

// const Footer = () => {
//   return (
//     <>
//       <footer className="p-5 bg-dark text-light d-flex flex-column">
//         <div className="row justify-content-evenly">
//           <div className="col-4">
//             <h5>Contact</h5>
//             <ul className="nav flex-column">
//               <li className="nav-item mb-2">
//                 <a href="/" className="nav-link p-0 text-secondary">
//                   <FaUser /> Malik Hadi
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a
//                   href="https://wa.me/923155878228"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="nav-link p-0 text-secondary"
//                 >
//                   <FaWhatsapp /> +92 315-5878228
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a
//                   href="mailto:malikhadizulfiqar@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="nav-link p-0 text-secondary"
//                 >
//                   <FaEnvelope /> malikhadizulfiqar@gmail.com
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Rawalpindi%2C+Pakistan"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="nav-link p-0 text-secondary"
//                 >
//                   <FaMapMarkerAlt /> Rawalpindi, Pakistan
//                 </a>
//               </li>
//               <li>
//                 <ul className="nav social_icons col-xl-6 mt-3 justify-content-start list-unstyled d-flex">
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://www.youtube.com/@webnchill"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaYoutube
//                         id="youtube"
//                         className="social_icon"
//                         size={22}
//                       />
//                     </a>
//                   </li>
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://github.com/TSxMURSHAD"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaGithub id="github" className="social_icon" size={22} />
//                     </a>
//                   </li>
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://www.linkedin.com/in/malik-hadi-zulfiqar-5a932a29b/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaLinkedin
//                         id="linkedin"
//                         className="social_icon"
//                         size={22}
//                       />
//                     </a>
//                   </li>
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://www.instagram.com/malikhadi.4/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaInstagram
//                         id="instagram"
//                         className="social_icon"
//                         size={22}
//                       />
//                     </a>
//                   </li>
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://www.tiktok.com/@malikhadi456?lang=en"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaTiktok id="tiktok" className="social_icon" size={22} />
//                     </a>
//                   </li>
//                   <li className="ms-3">
//                     <a
//                       className="text-secondary"
//                       href="https://www.facebook.com/hadi.malikhadi.1"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaFacebook
//                         id="facebook"
//                         className="social_icon"
//                         size={22}
//                       />
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           <div className="col-2">
//             <h5>Section</h5>
//             <ul className="nav flex-column">
//               <li className="nav-item mb-2">
//                 <a href="/" className="nav-link p-0 text-secondary">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/about" className="nav-link p-0 text-secondary">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/taskspdf" className="nav-link p-0 text-secondary">
//                   All-Tasks-pdf
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="offerletter" className="nav-link p-0 text-secondary">
//                   Offer Letter
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-2">
//             <h5>Tasks</h5>
//             <ul className="nav flex-column">
//               <li className="nav-item mb-2">
//                 <a href="/task1" className="nav-link p-0 text-secondary">
//                   Task 1
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/task2" className="nav-link p-0 text-secondary">
//                   Task 2
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/task3" className="nav-link p-0 text-secondary">
//                   Task 3
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/task4" className="nav-link p-0 text-secondary">
//                   Task 4
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/task5" className="nav-link p-0 text-secondary">
//                   Task 5
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a href="/task6" className="nav-link p-0 text-secondary">
//                   Task 6
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-2">
//             <img src={logo} alt="logo" style={{ width: 150, height: 150 }} />
//           </div>
//         </div>
//         <div className="d-flex justify-content-center py-4 my-4 border-top">
//           <p className="text-secondary text-center">
//             <span className="navbar-text">
//               Internship at <strong>Ariesian Tech</strong>
//               <br />
//             </span>
//             © 2024 Malik Hadi, Inc. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/images/malik_hadi_logo.png";

const Footer = () => {
  return (
    <>
      <footer className="p-5 bg-dark text-light d-flex flex-column">
        <div className="row justify-content-evenly">
          <div className="col-4">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-secondary">
                  <FaUser /> Malik Hadi
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://wa.me/923155878228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-0 text-secondary"
                >
                  <FaWhatsapp /> +92 315-5878228
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="mailto:malikhadizulfiqar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-0 text-secondary"
                >
                  <FaEnvelope /> malikhadizulfiqar@gmail.com
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rawalpindi%2C+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link p-0 text-secondary"
                >
                  <FaMapMarkerAlt /> Rawalpindi, Pakistan
                </a>
              </li>
              <li>
                <ul className="nav social_icons col-xl-6 mt-3 justify-content-start list-unstyled d-flex">
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://www.youtube.com/@webnchill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube
                        id="youtube"
                        className="social_icon"
                        size={22}
                      />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://github.com/TSxMURSHAD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub id="github" className="social_icon" size={22} />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://www.linkedin.com/in/malik-hadi-zulfiqar-5a932a29b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        id="linkedin"
                        className="social_icon"
                        size={22}
                      />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://www.instagram.com/malikhadi.4/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        id="instagram"
                        className="social_icon"
                        size={22}
                      />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://www.tiktok.com/@malikhadi456?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok id="tiktok" className="social_icon" size={22} />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a
                      className="text-secondary"
                      href="https://www.facebook.com/hadi.malikhadi.1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook
                        id="facebook"
                        className="social_icon"
                        size={22}
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-secondary">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/taskspdf" className="nav-link p-0 text-secondary">
                  All-Tasks-pdf
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/offerletter" className="nav-link p-0 text-secondary">
                  Offer Letter
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Tasks</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/task1" className="nav-link p-0 text-secondary">
                  Task 1
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/task2" className="nav-link p-0 text-secondary">
                  Task 2
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/task3" className="nav-link p-0 text-secondary">
                  Task 3
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/task4" className="nav-link p-0 text-secondary">
                  Task 4
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/task5" className="nav-link p-0 text-secondary">
                  Task 5
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/task6" className="nav-link p-0 text-secondary">
                  Task 6
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h5>
              <strong>Malik Hadi</strong>
            </h5>
            <p>
              A passionate software developer with skills in frontend
              development, creating innovative and user-friendly applications.
            </p>
            <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
          </div>
        </div>

        {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
          <div>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
            />
            <p>© 2023 Malik Hadi. All rights reserved.</p>
          </div>
        </div> */}
        <div className="d-flex justify-content-center py-4 my-4 border-top">
          <p className="text-secondary text-center">
            <span className="navbar-text">
              Internship at <strong>Ariesian Tech</strong>
              <br />
            </span>
            © 2024 Malik Hadi, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
