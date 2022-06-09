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
import BCImg from "../../images/BC.svg";
import VRImg from "../../images/VR.svg";
import cloudImg from "../../images/cloud.svg";
import AIImg from "../../images/AI.svg";
import QCImg from "../../images/QC.svg";
import IOTImg from "../../images/IOT.svg";
import PTImg from "../../images/PenetrationTesting.svg";
import { useState } from "react";

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
                    // onMouseLeave={() =>
                    //   setShow({
                    //     show1: false,
                    //     show2: show.show2,
                    //     show3: show.show3,
                    //     show4: show.show4,
                    //   })
                    // }
                  >
                    <div className="dropDownWrapper d-flex justify-content-between">
                      <div className="dropDownItemsLeft">
                        <NavDropdown.Item href="#action3">
                          <img src={BCImg} alt="blockchain icon" />
                          <span>Blockchain</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          <img src={VRImg} alt="virtual reality icon" />
                          <span>Virtual / Augmented Reality</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          <img src={cloudImg} alt="cloud icon" />
                          <span>Cloud Transformation</span>
                        </NavDropdown.Item>
                      </div>
                      <div className="dropDownItemsRight">
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                      </div>
                    </div>
                    {/* <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
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
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
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
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
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
