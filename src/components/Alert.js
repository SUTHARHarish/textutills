import React from 'react'
import { toast } from 'react-toastify';


function alert(props) {
    const capitalize = (world)=>{
        const lower = world.toLowerCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
    <strong>{ capitalize(props.alert.types)}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}

export default alert
