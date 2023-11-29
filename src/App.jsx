import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Meaning from './components/meaning/Meaning';


function App() {
  const [meaning, setmeaning] = useState([])
  const [category, setcategory] = useState("en")
  const [Word, setWord] = useState("")
  

  const dictionaryApi=async()=>{
    try{
      const data=await axios( `https://api.dictionaryapi.dev/api/v2/entries/${category}/${Word}`);     
      setmeaning(data.data)
    }catch(e){
      
    }
  }

 console.log(meaning); 

  useEffect(() => {
    dictionaryApi() 
  }, [category,Word])
  

  return (
  <div style={{height:'100vh', backgroundColor: "#282c34",color:"white"}}>
    <Container maxWidth="md" style={{display:"flex",flexDirection:"column",height:"100vh"}}>
    <Header category={category} setcategory={setcategory} Word={Word} setWord={setWord} />
    <Meaning category={category} word={Word} meanings={meaning} />
    </Container>
  </div>
  )
}

export default App
