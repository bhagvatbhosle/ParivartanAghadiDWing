import { Container, ListGroup } from 'react-bootstrap'

export default function Manifesto({ items }) {
  return (
    <section id="manifesto" className="section-block manifesto-section">
      <Container>
        <div className="section-heading text-center mb-4 mb-md-5">
          <span className="text-primary fw-semibold">Our Commitment</span>
          <h2 className="fw-bold mt-1">Our Manifesto</h2>
          <p className="text-secondary mx-auto mb-0">Practical promises for transparent, safe and vibrant community living.</p>
        </div>
        <div className="manifesto-list mx-auto">
          <ListGroup numbered>
            {items.map((item, index) => (
              typeof item === 'string' ? (
                <ListGroup.Item as="li" key={item} className="manifesto-item"><span>{item}</span></ListGroup.Item>
              ) : (
                <ListGroup.Item as="li" key={item.id ?? index} className="manifesto-item">
                  <div className="fw-bold fs-5 mb-1">{item.title}</div>
                  <div className="text-secondary">{item.description}</div>
                </ListGroup.Item>
              )
            ))}
          </ListGroup>
        </div>
      </Container>
    </section>
  )
}
