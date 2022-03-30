import Header from './components/header/header'

import './App.css'
import LandingSection from './components/landingSection/landingSection'
import WalkthroughSection from './components/walkthroughSection/walkthroughSection'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="forPattern container">
        <LandingSection />
        <WalkthroughSection />

      </div>

    </div>
  )
}

export default App
