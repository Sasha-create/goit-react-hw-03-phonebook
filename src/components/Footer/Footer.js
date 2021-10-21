import s from "./Footer.module.scss";
// import logoGoIT from "../../images/logoGoIT.png";
// import { ReactComponent as Kapusta } from "../../images/icons/kapusta-clean.svg";

const Footer = ({ page }) => {
  //   let footerClass = [];

  return (
    <footer className={s.FooterClass}>
      <div className={s.Social}>
        <ul className={s.Link}></ul>
      </div>
    </footer>
  );
};
export default Footer;
