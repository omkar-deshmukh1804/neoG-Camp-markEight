import { useState } from 'react'
import './App.css'
import data from '../emoji.json'

function App() {
  
  const [output, setOutput] = useState("")
  const [message, setMessage] = useState("Click on the emoji or search your emoji.")

  const handleInputChange = function (e) {
    setOutput(() => {
      return e.target.value
    })
    handleEmojiClick(e.target.value)
  }


  const handleEmojiClick = function (receivedItem) {
    if (receivedItem == null || receivedItem == "") {
      setMessage("Click on the emoji or search your emoji.")
      return;
    }
    
    let checks = data.filter((item) => {
      return item.emoji == receivedItem
    })
    let currentSelection = checks[0]
    currentSelection ? setMessage(currentSelection.description.toUpperCase()) : setMessage("Emoji is unrecognisable :(");
    currentSelection && setOutput(() => {
      return currentSelection.emoji
    })
  }

  return (
    <div className="container">
      <header className="container--header">
        <p className='text--shadow'> Inside Out !</p>
      </header>
      <section className='container--section'>
        <main className='container--main'>
          <input type="text" className='container--input' onChange={handleInputChange}/>
          <h6 className='container--output'>{output}</h6>
          <h5 className='message'>{message}</h5>
          <div className='container--emoji'>{
            data.map((item, index) => {
              if (Number(item["unicode_version"])<13.0 && index <= 1800) {
                return (
                  <span className='emojis' key={index} onClick={()=>handleEmojiClick(item.emoji)}>{item.emoji}</span>
                )
              }
            })
            
          }
          </div>
        </main>
      </section>
    </div>
  )

}

export default App
