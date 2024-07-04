import {useState} from 'react';
const MyForm = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")

    const setFName = (e) =>{
        console.log(e.target.value);
        setFirstName(e.target.value);
        
    }

    const setLName=(e)=>{
        setLastName(e.target.value)
    }

    const getNames = ()=>{
        alert(firstName)
    }

    return(
        <div>

            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName}
                    onChange={(e)=>setFName(e)}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName}
                    onChange={(e)=>setLName(e)}
                    />
                </div>
                <input type="button" onClick={()=>getNames()} value="Click Me"/>
            </form>

        </div>
    )
}
export default MyForm