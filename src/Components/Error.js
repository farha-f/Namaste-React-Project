import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error=useRouteError();
    console.log(error,"hjd");
return(
    <div>
        <h1>Oppss..</h1>
        <h2>Something Went Wrong</h2>
    </div>
)
}
export default Error;