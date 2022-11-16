const TextInput =({ value, setValue })=> {
    return (
    <>
        <input 
        value={value} type="text" onChange={(e)=>{
            setValue=(e.target.value);
        }}/>
    </>
    );
}
export default TextInput;