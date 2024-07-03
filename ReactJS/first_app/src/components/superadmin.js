import allading_image from '../images/alladin.jpg'
const SuperAdmin = () =>{

    let myStyle = {
        backgroundColor:"#FFFF00",
            color:"#FFFFFF",
            padding:"10px"
    }

    return(
        //inline css
        //background-color
        <>
        <h1 className="myHeading" style={{
            backgroundColor:"#FF0000",
            color:"#FFFFFF",
            padding:"10px"
        }}>I am the Super Admin</h1>
        <h1 style={myStyle}>I am the Super Admin</h1>
        <img src={allading_image} width="30%"/>
        </>
        
    )
}
export default SuperAdmin;