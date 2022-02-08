import {Button} from "antd";
import {NavLink} from "react-router-dom";

export const StarshipsPage = () => {
  return (
    <div>
      <h2>Starships</h2>
      <Button type="default" style={{margin: "0 0 20px 0"}}>
        <NavLink to={`/`}>Back</NavLink>
      </Button>
    </div>
  )
}
