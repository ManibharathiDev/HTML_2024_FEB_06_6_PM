const Child = (props) =>{
    return(
        <tr>
            <td>
                {
                    props.stu_name
                }
            </td>
            <td>
                {
                    props.stu_age
                }
            </td>
        </tr>
    )
}
export default Child;