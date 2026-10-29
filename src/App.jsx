import Header from './components/Header'
import Hero from './components/Hero'
import Members from './components/Members'
import Manifesto from './components/Manifesto'
import members from './data/members.json'
import manifesto from './data/manifesto.json'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Members members={members} />
        <Manifesto items={manifesto} />
      </main>
    </>
  )
}
