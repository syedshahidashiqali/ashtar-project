import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className={styles.textWrapper}>
              <h1>
                Product Built <br />
                with Precision
              </h1>
              <span>Scalable, secure and futuristic.</span>
              <Button variant="outline-success">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
