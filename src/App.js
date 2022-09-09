import logo from './logo.svg'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import './App.css'
import { useRef, useEffect } from 'react'

function App() {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('.first-paragraph'),
      {
        opacity: 0.3,
        y: 60,
        x: window.innerWidth - 500,
        transition: 0.3,
        // transform: 'rotate(185deg)' ,
        rotate: '145deg',
        color: '#4a668b',
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        transition: 0.5,
        rotate: '0deg',
        color: '#794a8b',

        // transform: 'rotate(105deg) !important'  ,

        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top top',
          end: 'bottom center',
          scrub: true,
          pin: true,
        },
      },
    )
  }, [])

  return (
    <div className="App" ref={ref}>
      <header className="App-header first">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello</h1>
        <p className="first-paragraph">I'm Waqas</p>
      </header>
      <header className="App-header first2"></header>
    </div>
  )
}

export default App
