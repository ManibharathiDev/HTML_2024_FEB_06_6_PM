//ES6 -> Lambda Expression

import SuperAdmin from "./components/superadmin";
import User from "./components/user";

const Home = () =>{

    let role = "super_admin"
    if(role == "super_admin")
        {
            return(
                <SuperAdmin/>
            )
        }
        else{
            return(
                <User/>
            )
        }

    /*let role = "user";
    if(role == "super_admin")
        {
            return(
                <>
                <h1>Super Admin</h1>
                </>
            )
        }
        else{
            return (
                <>
                    <h1>Normal user</h1>
                </>
            )
        }*/


    /*let a = 5;
    if(a == 5)
        {
            return(
                <>A is Five</>
            )
        }
        else{
            return(
                <>A is not a Five</>
            )
        }
    */
     /*let myElement = <h1>Ram Nager</h1>   
     let a = 5;   
     const docs = () =>{
        if(a == 5)
            {
                return(
                    <>
                        <h1>A is Five</h1>
                    </>
                )
            }
            else{
                return(
                    <>
                        <h1>A is not a Five</h1>
                    </>
                )
            }
     }


    return(
        <div>
                    <h1>I am from the home</h1>
                    {
                        docs()
                    }
        </div>
        
    )*/
}

// function Home(){
//     return(
//         <h1>I am from the home</h1>
//     )
// }
export default Home;