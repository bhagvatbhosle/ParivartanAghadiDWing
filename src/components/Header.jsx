import { Container, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar sticky="top" className="app-navbar shadow-sm" data-bs-theme="dark">
      <Container fluid="lg" className="justify-content-center py-1">
        <Navbar.Brand className="app-title m-0 text-center">
          Suncity Ambegaon D Wing Parivartan Aghadi
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
