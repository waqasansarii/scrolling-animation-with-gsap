import logo from "./logo.svg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import "./App.css";
import { useRef, useEffect } from "react";
// import { SplitChars, Tween,Controls } from "react-gsap";
import About from "./Component/About";
// import { Tween } from 'gsap/gsap-core'

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {
        opacity: 0.1,
        y: 200,
        // x: window.innerWidth - 500,
        z : -1100 ,
        transition: 0.5,
        // rotate: "145deg",
        scale:'.3',
        color: "#4a668b",
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        transition: 0.5,
        // rotate: "0deg",
        scale:'1.2',
        color: "#794a8b",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".dev1"),
      {
        opacity: 0.1,
        y: 20,
        x: -window.innerWidth + 200,
        transition: 0.5,
        rotate: "45deg",
        color: "#794a8b",
      },
      {
        color: "#4a668b",
        opacity: .9,
        y: 20,
        x: 0,
        transition: 0.5,
        rotate: "-10deg",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".dev2"),
      {
        opacity: 0.1,
        y: 30,
        x: window.innerWidth + 200,
        z: -1000,
        transition: 0.5,
        scale: ".5",
        color: "#4a668b",
        rotate: '185deg',
      },
      {
        opacity: .9,
        y: 80,
        x: 30,
        z: -100 ,
        transition: 0.5,
        scale: "1.1",
        color: "#38368d",
        rotate:'10deg',
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div className="App" ref={ref}>
      <header className="App-header">
        <div className="first">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Hello</h1>
          <p className="first-paragraph">I'm Waqas</p>
          <h1 className="dev1"> I Am ReactJs Developer</h1>
          <h1 className="dev2">& BlockChain Developer</h1>
        </div>
      </header>
      {/* <About /> */}
    </div>
  );
}

export default App;
