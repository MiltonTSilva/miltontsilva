import Navbar from "./navbar";
import Theme from "./theme";
import Logo from "./logo";



const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <Theme />
    </header>
  );
};

export default Header;
