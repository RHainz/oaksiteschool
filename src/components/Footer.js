import oakLogo from "../srcimags/oak-Logo-png-quadrado.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


export function Footer() {
  return (
    <footer className="h-auto bg-white">
      <div className="flex flex-col items-center my-10 gap-5">
        <img src={oakLogo} alt="Oak school logo"></img>
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/oakenglishschool"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className="facebook-icon text-emerald-900"
            />
          </a>
          <a
            href="https://www.instagram.com/oakenglishschool/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="instagram-icon text-emerald-900"
            />
          </a>
        </div>
        <a
          className="text-emerald-900"
          href="https://wa.me/5515996996998"
          target="_blank"
          rel="noreferrer"
        >
          (15) 99699-6998
        </a>
        <p className="text-emerald-900">
          ©2023 Oak School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}