// 페이지: mypage
// 프로필박스에서 버튼 눌러 이동 > 프로필 정보 출력 & 수정하는 공간

const MypageComp = () => {
    return ( 
        <div>
            <h2>내 정보</h2>
            <div className="profile-info"
            style={{width:'200px', height:'200px', 
            backgroundColor:'lightyellow', borderRadius:'50%',
            marginLeft:'90px', marginBottom:'30px'}}>
            </div>
                
            
        </div>
    );
}

export default MypageComp;