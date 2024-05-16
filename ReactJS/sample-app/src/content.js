function Content(props){
    console.log(props);
    return(
        <>
            <div className="content">
                <h1>
                    {
                        props.kavi
                    }
                </h1>
                {
                    (
                        <>
                           <h1>
                            {
                            props.kavi
                            } 
                           </h1>
                           {
                            props.area
                           } 
                        </>
                    )
                    
                }
                
            </div>
        </>
    );
}
export default Content;