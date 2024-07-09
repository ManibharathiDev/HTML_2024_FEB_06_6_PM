import Child from "./child";
import MyForm from "./myform";
import { Link } from 'react-router-dom';
const WebMain = () => {

    const my_hobbies = ['Jocking','Reading',"Riding","Surfing"];
    
    const my_students = [
        {"id":1,"name":"Tamilarasan","age":"25"},
        {"id":2,"name":"Harshan","age":"22"},
        {"id":3,"name":"Kavi","age":"23"}
    ];
    return(
        <div>

            {/* <a href="#">Home</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>

<MyForm/>

            <ul>
            {
                my_hobbies.map((item)=>{
                    return(
                        
                        <li key={item}>
                        {
                            item
                        }
                        </li>
                    )
                })
            }
            </ul>


            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {
                        
                        my_students.map((item)=>{
                            return(
                                <Child key={item.id} stu_name={item.name} stu_age={item.age}/>
                                //  <tr>
                                //      <td>{item.name}</td>
                                //      <td>{item.age}</td>
                                //  </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        
        {/* {
            my_hobbies[0]
        }
        {
            my_hobbies[1]
        } */}
        <h1>My Forms</h1>
       
        </div>
    )
}
export default WebMain;