export function CounterBox(props) {
    return (
        <div {...props}>
            <h3 style={{marginBottom: 0, color: props.labelColor}}>{props.label}</h3>
            <h1 style={{marginTop: 0, color: props.valueColor}}>{props.value}</h1>
        </div>
    )
}