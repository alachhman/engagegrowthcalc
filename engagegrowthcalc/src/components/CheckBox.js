import * as React from 'react';

let CheckBox = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        props.set(!checked);
    };

    return (
        <label>
            <input type="checkbox" checked={checked} onChange={handleChange}/>
            {props.label}
        </label>
    )
}

export default CheckBox
