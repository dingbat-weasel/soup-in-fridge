import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b-2 border-slate-300 bg-slate-200">
      <nav>
        <ul className="flex justify-end gap-6 px-8 py-4">
          <li className="mr-auto">
            <Link to="/">soup in fridge, love you</Link>
          </li>
          <li>
            <Link to="archive">Archive</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
