import './styles/Canvas.css';
import phone from './assets/phone.svg'
import linked from './assets/linked.svg'
import email from './assets/email.svg'
import git from './assets/git.svg'

export default function Canvas({ form1, form2 }) {
  console.log(form2);

  function convertArray(skills) {
    if (typeof skills !== 'string') {
      return [];
    }

    return skills.split(',').map(skill => skill.trim());
  }

  let skills = form2["Skills"];
  skills = convertArray(skills);
  console.log(typeof skills);

  return (
    <>
      <div className="Can">
        <div className='child1'>
          <h2 className='child1_1'>{form1["Name"]}</h2>

          {form1["LinkedIn"]===null||form1["LinkedIn"]===""?null:(<span><img src = {linked}></img><h4 className='child1_2'>{form1["LinkedIn"]}</h4></span>)}
          {form1["GitHub"]===null||form1["GitHub"]===""?null:(<span><img src = {git}></img><h4 className='child1_3'>{form1["GitHub"]}</h4></span>)}  
          {form1["Mobile"]===null||form1["Mobile"]===""?null:(<span><img src = {phone}></img><h4 className='child1_4'>{form1["Mobile"]}</h4></span>)}
          {form1["Address"]===null||form1["Address"]===""?null:(<span><h4 className='child1_5'>Address:{form1["Address"]}</h4></span>)}
          {form1["Email"]===null||form1["Email"]===""?null:(<span className='child1_5' ><img src = {email}></img><h4 >{form1["Email"]}</h4></span>)}
        </div>

        <div className='child2'>
          <div className='child3'>
            
            <h3>Skills</h3>
            <hr></hr>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="child4">
            <h2>Education</h2>
            <hr></hr>
            {form2["School"]===null||form2["School"]===""?null:(
            <div className = "school">
                    <div className="schild1">
                    <h4>School: {form2["School"]}</h4>
                    <h4>Grade: {form2["School Grade"]}</h4>
                    </div>
                    <div className="schild1">
                    <h4>from: {form2["Start date1"]}</h4>
                    <h4>to: {form2["End date1"]}</h4>
                    </div>
            </div>)}
            {form2["Bachelor"]===null||form2["Bachelor"]===""?null:(
            <div className = "school">
                    <div className="schild1">
                    <h4>Bachelor's: {form2["Bachelor"]}</h4>
                    <h4>CGPA: {form2["Bachelor Grade"]}</h4>
                    </div>
                    <div className="schild1">
                    <h4>from: {form2["Start date2"]}</h4>
                    <h4>to: {form2["End date2"]}</h4>
                    </div>
            </div>)}
            {form2["Post Graduation"]===null||form2["Post Graduation"]===""?null:(
            <div className = "school">
                    <div className="schild1">
                    <h4>Post Graduation: {form2["Post Graduation"]}</h4>
                    <h4>CGPA: {form2["Post Graduation Grade"]}</h4>
                    </div>
                    <div className="schild1">
                    <h4>from: {form2["Start date3"]}</h4>
                    <h4>to: {form2["End date3"]}</h4>
                    </div>
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}
