import { Container, Navbar } from 'react-bootstrap'

export default function Header({ title }) {
  return (
    <Navbar sticky="top" className="app-navbar shadow-sm" data-bs-theme="dark">
      <Container fluid="lg" className="justify-content-center py-1">
        <Navbar.Brand className="app-title m-0 text-center">
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
