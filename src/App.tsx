import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Presentation } from './screens/Presentation'
import { About } from './screens/About'
import { Experiences } from './screens/Experiences'
import { Projects } from './screens/Projects'
import { Skills } from './screens/Skills'
import { Contact } from './screens/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main>
        <Presentation/>
        <About/>
        <Skills/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </main>
    </ThemeProvider>
  )
}

export default App
