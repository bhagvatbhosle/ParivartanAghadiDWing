import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Members from './components/Members'
import Manifesto from './components/Manifesto'
import members from './data/members.json'
import marathiMembers from './data/members-marthi.json'
import manifesto from './data/manifesto.json'
import marathiManifesto from './data/manifesto-marthi.json'

export default function App() {
  const [showMembersButton, setShowMembersButton] = useState(false)
  const [headerTitle, setHeaderTitle] = useState('SunCity Ambegaon D Wing  -  Parivartan Aghadi')
  const [isMarathi, setIsMarathi] = useState(false)

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
      <Header
        title={headerTitle}
        isMarathi={isMarathi}
        onLanguageClick={() => {
          setIsMarathi((current) => {
            const nextLanguage = !current
            setHeaderTitle(nextLanguage
              ? 'सन सिटी आंबेगाव विंग डी - परिवर्तन आघाडी'
              : 'SunCity Ambegaon D Wing  -  Parivartan Aghadi')
            return nextLanguage
          })
        }}
      />
      <main>
        <Hero />
        <Members members={isMarathi ? marathiMembers : members} />
        <Manifesto
          items={isMarathi ? marathiManifesto : manifesto}
          isMarathi={isMarathi}
        />
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
