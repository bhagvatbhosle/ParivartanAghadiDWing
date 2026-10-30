import { useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function Manifesto({ items, isMarathi = false }) {
  const [visibleCount, setVisibleCount] = useState(5)

  return (
    <section id="manifesto" className="section-block manifesto-section">
      <Container>
        <div className="section-heading text-center mb-4 mb-md-5">
          <span className="text-primary fw-semibold">{isMarathi ? 'आमची वचनबद्धता' : 'Our Commitment'}</span>
          <h2 className="fw-bold mt-1">{isMarathi ? 'आमचे प्रतिज्ञापत्र' : 'Our Manifesto'}</h2>
          <p className="text-secondary mx-auto mb-0">{isMarathi ? 'पारदर्शक, सुरक्षित आणि चैतन्यपूर्ण सामुदायिक जीवनासाठी व्यावहारिक आश्वासने.' : 'Practical promises for transparent, safe and vibrant community living.'}</p>
        </div>
        <div className="manifesto-list mx-auto">
          <ListGroup>
            {items.slice(0, visibleCount).map((item, index) => (
              typeof item === 'string' ? (
                <ListGroup.Item as="li" key={item} className="manifesto-item"><span>{item}</span></ListGroup.Item>
              ) : (
                <ListGroup.Item as="li" key={`${item.title}-${index}`} className="manifesto-item">
                  <div className="fw-bold fs-5 mb-1">{item.title}</div>
                  <div className="text-secondary">{item.description}</div>
                </ListGroup.Item>
              )
            ))}
          </ListGroup>
        </div>
        {visibleCount < items.length && (
          <div className="text-center mt-4">
            <button
              type="button"
              className="manifesto-load-button"
              onClick={() => setVisibleCount((count) => count + 5)}
            >
              {isMarathi ? 'आणखी दाखवा...' : 'Load more...'}
            </button>
          </div>
        )}
        <div className="panel-taglines text-center" aria-label={isMarathi ? 'पॅनल प्रतिज्ञा' : 'Panel taglines'}>
          <p>{isMarathi ? 'व्यक्तीपेक्षा विचार मोठा, आश्वासनांपेक्षा कृती महत्त्वाची आणि वैयक्तिक स्वार्थापेक्षा सोसायटीचे हित सर्वोच्च!' : 'Ideas matter more than individuals, action matters more than promises, and the society’s interest comes above personal gain!'}</p>
          <p>{isMarathi ? 'आपली सोसायटी, आपली जबाबदारी, आपला अभिमान!' : 'Our society, our responsibility, our pride!'}</p>
          <p>{isMarathi ? 'सन सिटी परिवर्तन आघाडी — सर्वांच्या सहभागातून, सर्वांच्या विकासासाठी! 🙏' : 'Sun City Parivartan Aghadi — through everyone’s participation, for everyone’s development! 🙏'}</p>
        </div>
      </Container>
    </section>
  )
}
