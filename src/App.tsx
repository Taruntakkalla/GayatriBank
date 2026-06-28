

import './App.css'
import DarkVariantExample from "./components/carousel.tsx"
import Products from './components/MultiCarousel.tsx'

function App() {
  

  return (
    <>
      <div
  style={{
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      display: "inline-block",
      color: "#ED1C24",
      fontSize: "20px",
      fontWeight: "bold",
      animation: "moveRight 10s linear infinite",
    }}
  >
    🚨  IFSC Code has been changed 🚨, Bank timings 10.00 - 7.00
  </div>
</div>
      <DarkVariantExample/>
      <Products/>
  
    </>
  )
}

export default App
