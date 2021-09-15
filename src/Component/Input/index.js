import './style.css'
function Input({ type, placeholder, value, onChange }) {
    return (
        <input className='mainInput' type={type} onChange={onChange} placeholder={placeholder} value={value} />
    )
}

export default Input;