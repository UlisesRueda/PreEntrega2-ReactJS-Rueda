import React from "react";

const Title = (props) => {
    console.log(props);
    return(
        <h1 className="brand">{props.greeting}</h1>
    )
}

export default Title