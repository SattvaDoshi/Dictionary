import React from 'react'
import './Meaning.css'

const Meaning = ({category, word,meanings }) => {
  return (
    <>
        <div className="meaning">
          
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: "10px", width:"100%" }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
     
        {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: "white",
                  color : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                
              </div>
            ))
          )
        )
      )}

        </div>    
    </>
  )
}

export default Meaning