import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="absolute bottom-0 h-12 w-full border-t border-t-slate-600 bg-slate-100">
      <nav className=" flex justify-center">
        <ul>
          <li className="text-center">
            <p>Made with love</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
