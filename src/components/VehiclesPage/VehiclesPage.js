import {Button} from "antd";
import {NavLink} from "react-router-dom";

export const VehiclesPage = () => {
  return (
    <div>
      <h2>Vehicles</h2>
      <Button type="default" style={{margin: "0 0 20px 0"}}>
        <NavLink to={`/`}>Back</NavLink>
      </Button>
    </div>
  )
}
