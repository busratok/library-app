import { FooterBtn, FooterContainer } from "./Footer.style";
import { lightIcon, darkIcon } from "../../helper/iconData";

const Footer = ({ chosenTheme, setChosenTheme }) => {
  return (
    <FooterContainer>
      <FooterBtn
        onClick={() =>
          setChosenTheme(chosenTheme === "light" ? "dark" : "light")
        }
        title="Switch theme"
      >
        {chosenTheme === "light" ? <>{lightIcon}</> : <>{darkIcon}</>}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
