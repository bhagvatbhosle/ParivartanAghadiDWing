import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Members from './components/Members'
import Manifesto from './components/Manifesto'
import members from './data/members.json'
import manifesto from './data/manifesto.json'

export default function App() {
  const [showMembersButton, setShowMembersButton] = useState(false)
  const [headerTitle, setHeaderTitle] = useState('SunCity Ambegaon D Wing  -  Parivartan Aghadi')

  useEffect(() => {
    const updateButtonVisibility = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight
      setShowMembersButton(distanceFromBottom < 120)
    }

    updateButtonVisibility()
    window.addEventListener('scroll', updateButtonVisibility, { passive: true })
    window.addEventListener('resize', updateButtonVisibility)

    return () => {
      window.removeEventListener('scroll', updateButtonVisibility)
      window.removeEventListener('resize', updateButtonVisibility)
    }
  }, [])

  const scrollToMembers = () => {
    document.getElementById('members')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header title={headerTitle} />
      <main>
        <Hero />
        <Members
          members={members}
          onPhotoClick={() => setHeaderTitle('सन सिटी आंबेगाव विंग डी - परिवर्तन आघाडी')}
        />
        <Manifesto items={manifesto} />
      </main>
      {showMembersButton && (
        <button
          type="button"
          className="members-jump-button"
          onClick={scrollToMembers}
          aria-label="Go to members section"
          title="Go to members"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
          </svg>
        </button>
      )}
    </>
  )
}
