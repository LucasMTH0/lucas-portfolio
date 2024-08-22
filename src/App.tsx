import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Header } from './components/Header'
import { Presentation } from './screens/Presentation'
import { About } from './screens/About'
import { Experiences } from './screens/Experiences'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Presentation/>
      <About/>
      <Experiences/>
    </ThemeProvider>
  )
}

export default App
