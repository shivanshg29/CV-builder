import { useState } from 'react'
import Canvas from './Canvas'
import './App.css'
import Side from './sidePanel'

function App() {
  
  const sides = [
    {
      title: "side1",
      id:1,
      main:"BioData",
      data:{Name:"",
      Mobile:null,
      Email:null,
      LinkedIn:null,
      Address:null,
      GitHub:null
    }
    },
    {
      title: "side2",
      id:2,
      main:"Skills & Education",
      data:{Skills:[],
      School:null,
      "School Grade":null,
      "Start date1":null,
      "End date1":null,
      Bachelor:null,
      "Bachelor Grade":null,
      "Start date2":null,
      "End date2":null,
      "Post Graduation":null,
      "Post Graduation grade":null,
      "Start date3":null,
      "End date3":null,
      }}
  ]
  const [Active,setActive] = useState(0);
  const [form1,setform1] = useState(sides[0]["data"]);
  const [form2,setform2] = useState(sides[1]["data"]);
  
const submitHandler = (e)=>{
  e.preventDefault();
  let parent = e.target.parentNode;
  let children = parent.querySelectorAll('input');
  
  let identi = e.target.getAttribute("identi");
  const updatedFormData = { ...sides[parseInt(identi)]["data"] };
  children.forEach((child)=>{
    let key1 = child.getAttribute("id");
    updatedFormData[key1]= child.value
  })
  if (identi === "0") {
    setform1(updatedFormData);
  } else {
    setform2(updatedFormData);
  }
  
  
}
  
  return (
  <>
    <div className='main'>
      <Side  id={0} downHandler={()=>setActive(0)} isActive= {Active===0} sides = {sides} submitHandler={submitHandler} form = {form1}/>
      <Side id ={1} downHandler={()=>setActive(1)} isActive= {Active===1} sides = {sides} submitHandler={submitHandler} form = {form2} />
      
    </div>
    <>
    <Canvas form1 = {form1} form2 = {form2}  />
    </>
    </>
    
    
  )
}

export default App
