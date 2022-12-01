export const Input = (props) => {
    const {input, label, buttons} = props;

    // to do: render the input based on the values provided here.

    return (
        <div>
            <input id={input.id} value={input.value ? input.value : ''} type={input.type} onChange={input.onChange} checked={input.checked ? input.checked : ''} aria-label={input.ariaLabel ? input.ariaLabel : ''}/>
            {label ? <label htmlFor={label.name} className={label.isChecked}>{label.name}</label> : ''}
            {buttons.map((b,index) => {
                return <button key={index} onClick={b.onClick}>{b.label}</button>
            })}
        </div>
    )
    
}