// 헤더 영역 > 그 안에 피드백 받을 modalComp 포함
// > 헤더, 푸터는 APP에 바로 넣어둠
import Rating from "./Rating";
import '../App.css';
import { useState } from 'react';

const Header = () => {
    // 모달: 동적 ui 만들기 위한 state
    let [modal, setModal] = useState(false);
    
    return (
        <div>
            <img className="headerIMG" src="https://lh3.googleusercontent.com/g0PhqmP_abEna8hncrm_HK2-oLUJ6VVSChNj0AGk0TCun7ZQtqg20d6awyX4iRZZRlIeLeP1v-RbzQVBSgi6brspFBIsRgBZN3AWb9hYKONu6TEg1cBCBf9h1rSR60v1OXu-FVSxzg8KXA3gWb8JPmkeemn3b0kQVmvOGYih4MHOaatpn_IbKoG63x8GNvLSHNM8NirA9JYgVQK35gXMFcRBso6fauY9Lm0QKFYW7PifY2yrT91r3S75GzlV9cM3L0MnN9qqu3b82ctp2COAIlt-t5hjEZdaKsQdHVqVIimGglzEy8u5_vn4H3FEcn829B36ew9E6MBy3S6hfoKVJ481XqjdIxGqM3Z6SgwUz0jNgUnuluN1Ley_ofsPUNUOPTMMXfZVPujTFYS0AOqJOaxdlmp6iUxnLl-RRp6fSNfuMJuD3UBp7-uHnGGM0N1g4VAi7ruffrTgENDMhX_kZnI5ZjggIZBjuFRdM3xfEN4sdo9V0fiZ-t_hqNX0qSt5YSM4mN8C_btQlw6NSqJIW0YiXquNSDS-AZQ-p7lnRSW9l1bBZNF6UwA3DOlupcPs4042hPLo0LhOSdPztD2gZ8OO_ON8o_siK9Ed3z23J9g5IN1Dh_P8U8T5GVRuM9Ld8t8fU_fIyItXipsei66Ehwle0G0a6UB0pKBfd7z--hqgud9fMi28sXn0hx4xcNe4sRg-Ob6yVCGpcx_eDWGHg6kWHOz4-cH0b3pa2T0whlpxrQfNNst4nw-7EPeCISdbIJt45vllfxKYD6razC_ZhcNBfMhjFPQn4GCzCppUyC5C0_0REGoRnYVuVYrHByDZ1I980avzrghAgPIlf4aLjn-zqV-TlxYWo1QuC-cZA5ukDFX3pCaxJA_a9CANBX8NYU3tv8YyBdTUI3VSG9mN6gGu74wBNc27hbP7rEgqR38p=w470-h313-no?authuser=0" alt="" />
            <div className="header">
            <h5 style={{}}
            onClick={()=>{
                setModal(!modal);
            }}>🧐평가하기</h5>
{
    modal ? <Modal modal={modal} setModal={setModal} /> : null
} 
            </div>
        </div>
        );
    }

// 헤더 default 내보내기
export default Header;



// modal 컴포넌트 :피드백 받기위한 모달창
// (여기서 쓸거니까 당연 export안함^^)
const Modal = (props) => {
    
    return ( 
        <div className="feedback-modal">
            <Rating modal={props.modal} setModal={props.setModal} />
        </div>
        );
}

