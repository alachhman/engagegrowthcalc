import * as React from 'react';

const Selection = (props) => {
    let pool = props.pool;
    let name = props.name;

    const [value, setValue] = React.useState(name);

    const handleChange = (event) => {
        setValue(event.target.value)
        props.set(pool.find(x => x.name === event.target.value));
    }

    return (
        <select value={value} onChange={handleChange}>
            {pool.map(x => <option value={x.name}>{x.name}</option>)}
        </select>
    )
}

export default Selection
