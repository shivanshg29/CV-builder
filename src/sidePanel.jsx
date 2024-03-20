import './styles/sidePanel.css'
import downArrow from './assets/down.svg'
import { useState } from 'react'
export default function Side({id,downHandler,isActive,sides,submitHandler,form}){
     
     
    const [formdata,setdata] = useState(form)
      return (
        <div className = "side">
            <h3 >{sides[id]["main"]}
            <img src= {downArrow} onClick={downHandler}/>
            </h3>
           {isActive?(
            <form className = "form1">
                {Object.keys(sides[id]["data"]).map((key)=>(
                    
                    <div className="formElements" key={key}>
  <label htmlFor={key}>{key}</label>
  {key.includes("date") ? (
    <input type="date" id={key} name={key} required />
  ) : (
    
    <input type="text" id={key} name={key}  value = {formdata[key]} onChange={(e)=>setdata({...formdata,[key]:e.target.value})} required />
  )}
</div>
                    
          ))}
            <button type = "submit" onClick={submitHandler} identi = {id}>Submit</button>
            </form>):null}
        </div>
      )

}