
import './App.css';
import Main from  './components/Main';

export default function App() {
  return (
    <div className="App">
      <Main/>
      <Footer /> 
    </div>
  );
}
const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://github.com/Adithya-A-S" target="_blank" rel="noopener noreferrer">Adithya A S</a></p>
  )
}

const FooterStyle = {
  background: "#000000",
  fontSize: ".8rem",
  color: "white",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}


