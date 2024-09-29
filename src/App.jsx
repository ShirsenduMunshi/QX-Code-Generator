import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QRCode from "react-qr-code";

const App = () => {
  const [text, setText] = useState("I Love My Work!!!");
  const [inputValue, setInputValue] = useState("");
  function  handleChange(e) {
    setInputValue(e.target.value);
  }
  function generateQR(){
    setText(inputValue);
    setInputValue("");
  }
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='container mx-auto max-w-[90%] max-h-[70vh] min-h-[70vh]'>
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center rounded-lg border border-blue-500 p-4">
            <QRCode value={text} size={256} fgColor={"#1c8adb"} />
          </div>
          <div className="border border-[#1c8adb] rounded-full mt-4 overflow-hidden">
            <input type="text" placeholder="Enter your text" value={inputValue} onChange={(e)=>{handleChange(e)}} className="h-[4vh] w-[57%] p-2 bg-[#87b9f32a] border-none outline-none"/>
            <button onClick={()=>{generateQR()}} className='h-[4vh] w-[43%] sm:p-2 px-2 text-sm font-bold text-white text-nowrap bg-[#4095f7] hover:bg-[#4095f7c4] active:bg-slate-700 border-none outline-none'>Generate</button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
