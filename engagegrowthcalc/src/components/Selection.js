import * as React from 'react';
import {useEffect} from "react";

const Selection = (props) => {
    let pool = props.pool;
    let name = props.name;
    let actual = props.actual ?? ""

    const [value, setValue] = React.useState(props.initial ?? name);

    useEffect(() => {
        if(value !== actual) {
            setValue(actual.name)
        }
    },[actual])

    const handleChange = (event) => {
        let choice = event.target.value
        setValue(choice)
        props.set(pool.find(x => x.name === (typeof x.name === "number" ? parseInt(choice) : choice)));
        console.log("value of " + name + " set to " + event.target.value)
    }

    return (
        <select value={value} onChange={handleChange}>
            {pool.map(x => <option value={x.name}>{x.name}</option>)}
        </select>
    )
}

export default Selection
