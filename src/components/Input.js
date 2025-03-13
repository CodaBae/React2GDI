function Input ({placeholder, inputStyle, labelName, labelStyle }) {
    return(
        <div id="input_cont">
            <label style={labelStyle}> {labelName} </label>
            <input style={inputStyle} placeholder={placeholder}/>
        </div>
    )
}

export default Input