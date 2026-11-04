import { Container, Navbar } from 'react-bootstrap'
import diyaNavbar from '../data/photos/diya-gradient.gif'

export default function Header({ title }) {
  return (
    <Navbar sticky="top" className="app-navbar shadow-sm" data-bs-theme="dark">
      <Container fluid="lg" className="justify-content-center position-relative py-1">
        <Navbar.Brand className="app-title m-0 text-center">
          {title}
        </Navbar.Brand>
        <img src={diyaNavbar} alt="" className="navbar-diya" />
      </Container>
    </Navbar>
  )
}
