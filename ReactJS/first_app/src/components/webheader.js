import WebFooter from "./webfooter";

function WebHeader(){
    return(
        <div>
            <WebFooter/>
            <div className="myHeader">
                <div className="header_left">
                    +91 9944033729
                </div>
                <div className="header_right">
                    manibharath159@gmail.com
                </div>
            </div>
        </div>
    )
}

// const WebHeader = () => {
//     return(
//         <div>
//             <div className="myHeader">
//                 <div className="header_left">
//                     +91 9944033729
//                 </div>
//                 <div className="header_right">
//                     manibharath159@gmail.com
//                 </div>
//             </div>
//         </div>
//     )
// }
export default WebHeader;