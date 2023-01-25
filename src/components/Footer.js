import oakLogo from "../srcimags/oak-Logo-png-quadrado.png"
import { Facebook } from "@heroicons/react";

export function Footer() {
  return (
    <footer className="h-auto bg-white">
      <div className="flex flex-col items-center my-10 gap-5">
        <img src={oakLogo} alt="Oak school logo"></img>
        <a href="https://www.facebook.com/your-page-name">
          <Facebook size={32} color="#1877F2" className="facebook-icon" />
        </a>

        <p>(15) 99699-6998</p>
        <p>©2023 Oak School. All rights reserved.</p>
      </div>
    </footer>
  );
}