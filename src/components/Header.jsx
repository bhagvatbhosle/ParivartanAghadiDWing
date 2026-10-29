import { Container, Navbar } from 'react-bootstrap'

export default function Header({ title, isMarathi, onLanguageClick }) {
  return (
    <Navbar sticky="top" className="app-navbar shadow-sm" data-bs-theme="dark">
      <Container fluid="lg" className="justify-content-center position-relative py-1">
        <Navbar.Brand className="app-title m-0 text-center">
          {title}
        </Navbar.Brand>
        <button
          type="button"
          className="language-button"
          onClick={onLanguageClick}
          aria-pressed={isMarathi}
        >
          {isMarathi ? 'In English' : 'In Marathi'}
        </button>
      </Container>
    </Navbar>
  )
}
