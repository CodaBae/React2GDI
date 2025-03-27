function Input ({placeholder, inputStyle, labelName, labelStyle, func }) {
    return(
        <div id="input_cont">
            <label style={labelStyle}> {labelName} </label>
            <input onChange={func} style={inputStyle} placeholder={placeholder}/>
        </div>
    )
}

export default Input