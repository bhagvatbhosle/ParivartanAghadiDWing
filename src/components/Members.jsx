import { useState } from 'react'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap'

const PLACEHOLDER = 'https://ui-avatars.com/api/?name=Member&background=e7efff&color=173b6c&size=400'
const assetUrl = (path) => path?.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path

export default function Members({ members }) {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section id="members" className="section-block bg-light">
      <Container>
        <div className="section-heading text-center mb-4 mb-md-5">
          <span className="text-primary fw-semibold">Our Panel</span>
          <h2 className="fw-bold mt-1">Meet Your Members</h2>
          <p className="text-secondary mx-auto mb-0">Dedicated residents working together for the welfare of D Wing.</p>
        </div>
        <Row className="g-4">
          {members.map((member) => (
            <Col xs={12} sm={6} lg={4} xl={3} key={`${member.fullName}-${member.flatNo}`}>
              <Card
                className="member-card h-100 text-center"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedMember(member)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') setSelectedMember(member)
                }}
              >
                <div className="member-photo-wrap">
                  <Card.Img
                    variant="top"
                    src={assetUrl(member.photo) || PLACEHOLDER}
                    alt={`Portrait of ${member.fullName}`}
                    onError={(event) => { event.currentTarget.src = PLACEHOLDER }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fs-5 mb-1">{member.fullName}</Card.Title>
                  <Card.Text className="text-primary fw-semibold mb-0">Flat {member.flatNo}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={Boolean(selectedMember)} onHide={() => setSelectedMember(null)} centered scrollable>
        {selectedMember && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Member Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center mb-4">
                <img
                  className="modal-avatar"
                  src={assetUrl(selectedMember.photo) || PLACEHOLDER}
                  alt={`Portrait of ${selectedMember.fullName}`}
                  onError={(event) => { event.currentTarget.src = PLACEHOLDER }}
                />
                <h3 className="fs-4 mt-3 mb-1">{selectedMember.fullName}</h3>
                <div className="text-primary fw-semibold">Flat {selectedMember.flatNo}</div>
              </div>
              <dl className="mb-0">
                <div className="profile-row"><dt>Education</dt><dd>{selectedMember.education}</dd></div>
                <div className="profile-row"><dt>Permanent Address</dt><dd>{selectedMember.permanentAddress}</dd></div>
              </dl>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  )
}
