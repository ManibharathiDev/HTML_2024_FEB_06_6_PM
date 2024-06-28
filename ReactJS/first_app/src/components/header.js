function Header(props){

    console.log(props.title);

   return(
       <>
        <div>
            <h1>Headers</h1>
            <h3>{props.title}</h3>
            <h4>{props.priority}</h4>
        </div>
       </>
   ); 
}
export default Header;