import { Button, Col, Container, Row } from 'react-bootstrap'
import societyBackground from '../data/photos/SunCityAmbegaon.jpg'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `linear-gradient(110deg, rgba(14,46,91,.96), rgba(36,89,154,.88)), url(${societyBackground})` }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={9} xl={8}>
            <span className="hero-badge">Together for a Better Community</span>
            <h1 className="hero-title mt-3">A Stronger Suncity Ambegaon</h1>
            <p className="hero-lead">
              United, transparent and responsible leadership for the D Wing community.
              Meet our panel and discover our plan for a better tomorrow.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
              <Button size="lg" className="hero-button" onClick={() => scrollToSection('members')}>
                Members
              </Button>
              <Button size="lg" variant="outline-light" className="hero-button" onClick={() => scrollToSection('manifesto')}>
                Manifesto
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
