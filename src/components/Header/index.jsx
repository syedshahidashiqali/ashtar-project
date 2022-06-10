import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import "./index.scss";
import logo from "../../images/logo.svg";

// Tech link
import BCImg from "../../images/BC.svg";
import VRImg from "../../images/VR.svg";
import cloudImg from "../../images/cloud.svg";
import AIImg from "../../images/AI.svg";
import QCImg from "../../images/QC.svg";
import IOTImg from "../../images/IOT.svg";
import PTImg from "../../images/PenetrationTesting.svg";
// Engineering link
import fullStackImg from "../../images/full-stack.svg";
import mobileAppImg from "../../images/mobile-app.svg";
import uiUxImg from "../../images/ui-ux.svg";
import systemEngImg from "../../images/system-engr.svg";
import devopsImg from "../../images/devops.svg";
// Services link
import prodDesignImg from "../../images/product-design.svg";
import consultingImg from "../../images/consulting.svg";
import fullCycleDevImg from "../../images/full-cycle-dev.svg";
import maintenanceImg from "../../images/maintenance-and-support.svg";
import { useState } from "react";
import NavDropDownItem from "./NavDropDownItem";

function Header() {
  const [show, setShow] = useState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  });

  return (
    <div className={"headerWrapper"}>
      <Navbar bg="light" expand={"lg"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="devstack logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div className={"offCanvasBodyWrapper"}>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-4">
                  <NavDropdown
                    title="Technologies"
                    id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                    show={show.show1}
                    onMouseEnter={() =>
                      setShow({
                        show1: true,
                        show2: show.show2,
                        show3: show.show3,
                        show4: show.show4,
                      })
                    }
                    onMouseLeave={() =>
                      setShow({
                        show1: false,
                        show2: show.show2,
                        show3: show.show3,
                        show4: show.show4,
                      })
                    }
                  >
                    <div className="dropDownWrapper d-flex justify-content-between">
                      <div className="dropDownItemsLeft">
                        <NavDropDownItem
                          imgSrc={BCImg}
                          text="Blockchain"
                          altText="blockchain icon"
                        />
                        <NavDropDownItem
                          imgSrc={VRImg}
                          text="Virtual / Augmented Reality"
                          altText="virtual reality icon"
                        />
                        <NavDropDownItem
                          imgSrc={cloudImg}
                          text="Cloud Transformation"
                          altText="cloud icon"
                        />
                        <NavDropDownItem
                          imgSrc={AIImg}
                          text="Machine Learning and AI"
                          altText="AI icon"
                        />
                      </div>
                      <div className="dropDownItemsRight">
                        <NavDropDownItem
                          imgSrc={QCImg}
                          text="Qunatum Computing"
                          altText="quantum computing icon"
                        />
                        <NavDropDownItem
                          imgSrc={IOTImg}
                          text="Internet of Things"
                          altText="Internet of Things icon"
                        />
                        <NavDropDownItem
                          imgSrc={PTImg}
                          text="Penetration Testing"
                          altText="penetration testing icon"
                        />
                      </div>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title="Engineering"
                    id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                    show={show.show2}
                    onMouseEnter={() =>
                      setShow({
                        show1: show.show1,
                        show2: true,
                        show3: show.show3,
                        show4: show.show4,
                      })
                    }
                    onMouseLeave={() =>
                      setShow({
                        show1: show.show1,
                        show2: false,
                        show3: show.show3,
                        show4: show.show4,
                      })
                    }
                  >
                    <div className="dropDownWrapper d-flex justify-content-between">
                      <div className="dropDownItemsLeft">
                        <NavDropDownItem
                          imgSrc={fullStackImg}
                          text="Full Stack Web Development"
                          altText="full-stack web development icon"
                        />
                        <NavDropDownItem
                          imgSrc={mobileAppImg}
                          text="Mobile Development"
                          altText="mobile development icon"
                        />
                        <NavDropDownItem
                          imgSrc={uiUxImg}
                          text="UI/UX Design"
                          altText="ui / ux icon"
                        />
                      </div>
                      <div className="dropDownItemsRight">
                        <NavDropDownItem
                          imgSrc={systemEngImg}
                          text="System Engineering"
                          altText="system engineering icon"
                        />
                        <NavDropDownItem
                          imgSrc={devopsImg}
                          text="DevOps Engineering"
                          altText="DevOps Engineering icon"
                        />
                      </div>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                    show={show.show3}
                    onMouseEnter={() =>
                      setShow({
                        show1: show.show1,
                        show2: show.show2,
                        show3: true,
                        show4: show.show4,
                      })
                    }
                    onMouseLeave={() =>
                      setShow({
                        show1: show.show1,
                        show2: show.show2,
                        show3: false,
                        show4: show.show4,
                      })
                    }
                  >
                    <div className="dropDownWrapper d-flex justify-content-between">
                      <div className="dropDownItemsLeft">
                        <NavDropDownItem
                          imgSrc={prodDesignImg}
                          text="Product Design"
                          altText="Product Design icon"
                        />
                        <NavDropDownItem
                          imgSrc={consultingImg}
                          text="Consulting"
                          altText="Consulting icon"
                        />
                      </div>
                      <div className="dropDownItemsRight">
                        <NavDropDownItem
                          imgSrc={fullCycleDevImg}
                          text="Full-Cycle Development"
                          altText="Full-Cycle Development icon"
                        />
                        <NavDropDownItem
                          imgSrc={maintenanceImg}
                          text="Maintenance and"
                          altText="Support icon"
                        />
                      </div>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    title="Resources"
                    id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                    show={show.show4}
                    onMouseEnter={() =>
                      setShow({
                        show1: show.show1,
                        show2: show.show2,
                        show3: show.show3,
                        show4: true,
                      })
                    }
                    onMouseLeave={() =>
                      setShow({
                        show1: show.show1,
                        show2: show.show2,
                        show3: show.show3,
                        show4: false,
                      })
                    }
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">IP Protection</Nav.Link>
                </Nav>
                <Button variant="outline-success">Contact Us</Button>
              </Offcanvas.Body>
            </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
