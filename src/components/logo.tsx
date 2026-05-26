import logoIcon from "../assets/minha-foto-01.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="circle">
        <img src={logoIcon} alt="Foto" className="foto" />
        <div className="texto-circular">
          <span>M</span>
          <span>i</span>
          <span>l</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
          <span> </span>
          <span>T</span>
          <span>o</span>
          <span>m</span>
          <span>é</span>
          <span> </span>
          <span>d</span>
          <span>a</span>
          <span> </span>
          <span>S</span>
          <span>i</span>
          <span>l</span>
          <span>v</span>
          <span>a</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
