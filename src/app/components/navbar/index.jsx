import Image from "next/image";
import "./navbar.css";
const Navbar = ({ handleScroll }) => {
  return (
    <div className="navbarWrapper">
      <Image
        src="/logo.png"
        width={286}
        height={77}
        alt="frameflow logo"
        className="logo"
      />
      <div className="ctaBtn" onClick={handleScroll}>
        <p>Join Waitlist</p>
      </div>
    </div>
  );
};

export default Navbar;
