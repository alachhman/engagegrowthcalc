const Divider = (props) => {
    let color = props.color ?? "white"
    let width = props.width ?? "1px"
    let type = props.type ?? "solid"
    return (
        <div style={{border: width + " " + type + " " + color}}/>
    )
}

export default Divider
