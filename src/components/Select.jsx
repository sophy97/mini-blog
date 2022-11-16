const Select = ({ value, setValue, options }) => {
    return ( 
    <>
    <select
    // 텍스트 인풋과 동일하게 받은 props를 설정해 값 넘겨주도록
    value={value}
    onChange={(e) => {
        setValue(e.target.value);
    }} 
    >
    <option style={{textAlign:'center'}} value="" disabled>
    기분 선택
    </option>
    { options.map((item) => (
        // key값은 본래 고유의 아이디 넘버와 같은것으로 넘겨주어야 
        <option key={item} value={item}>
        {item}
        </option>
        ))}
    </select>
    </> 
    );
}

export default Select;