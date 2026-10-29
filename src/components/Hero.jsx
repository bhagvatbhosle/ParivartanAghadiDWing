import { Button, Col, Container, Row } from 'react-bootstrap'
import societyBackground from '../data/photos/SunCityAmbegaon.jpg'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero({ isMarathi = false }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `linear-gradient(110deg, rgba(14,46,91,.96), rgba(36,89,154,.88)), url(${societyBackground})` }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={9} xl={8}>
            <h1 className="hero-title">{isMarathi ? 'सन सिटी - परिवर्तन आघाडी' : 'Sun City  - Parivartan Aghadi'}</h1>
            <p className="hero-lead">
              {isMarathi ? 'परिवर्तनाचा ध्यास, विकासाचा विश्वास!' : 'Passion for change, faith in development!'}
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
              <Button size="lg" className="hero-button" onClick={() => scrollToSection('members')}>
                {isMarathi ? 'सदस्य' : 'Members'}
              </Button>
              <Button size="lg" variant="outline-light" className="hero-button" onClick={() => scrollToSection('manifesto')}>
                {isMarathi ? 'प्रतिज्ञापत्र' : 'Manifesto'}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
