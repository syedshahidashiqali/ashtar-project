import { NavDropdown } from "react-bootstrap";

function NavDropDownItem({ imgSrc, altText, text }) {
  return (
    <NavDropdown.Item href="#action3">
      <div className="iconWrapper">
        <img src={imgSrc} alt={altText} />
      </div>
      <span>{text}</span>
    </NavDropdown.Item>
  );
}

export default NavDropDownItem;
