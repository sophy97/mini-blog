import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';



const ARRAY = [0, 1, 2, 3, 4];

function Rating(props) {

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;

    let reviewnote = ""; 
    switch (score) {
        case 1 : 
        return reviewnote = "🤮 완전 쓰레기네요"
        case 2 : 
        return reviewnote = " 별로예요 "
        case 3 : 
        return reviewnote = " 보통이에요 "
        case 4 : 
        return reviewnote = " 꽤 좋아요 "
        case 5 : 
        return reviewnote = "😍 정말 좋아요! "
    }
  };



  return (

    <Wrap>
      <p>이 페이지를 평가해주세요</p>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="45"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
              />
            );
        })}
      </Stars>
      <br></br>
      <p> {sendReview() }</p>
      <span className='feedback-submit' 
        onClick={()=>{ alert("의견 주셔서 감사합니다 ! ");
                      {props.setModal(!props.modal)}
                }}>제출</span>
    </Wrap>

  );
}
export default Rating;



const Wrap = styled.div`
  padding: 10px;
`;
const Stars = styled.div`
  margin: auto;
  padding-top: 5px;
  & svg {
    color: gray;
    cursor: pointer;
  }
  :hover svg {
    color: #ffd966;
  }
  & svg:hover ~ svg {
    color: gray;
  }
  .yellowStar {
    color: #ffd966;
  }
  .feedback-submit:hover {
  cursor: pointer;
  padding: 2px 4px;
  }
`;