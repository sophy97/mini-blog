
/*
블로그 포스트 작성 영역
텍스트박스에 작성한 내용 > 버튼 눌러 그 내용(데이터)을
Preview 에 id값으로 붙여넣는 기능을 하는 공간
*/
const WriteComp = () => {

    return ( 
        <div>
            <h2>포스트 작성</h2>
            <textarea cols="60" rows="30">
            </textarea>
            <br />
            <button> 저장 </button>
        </div>
    );
}

export default WriteComp;
