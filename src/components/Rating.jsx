import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
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
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;

    let reviewnote = ""; 
    switch (score) {
        case 1 : 
        return reviewnote = "최악이예요! "
        case 2 : 
        return reviewnote = "별로"
        case 3 : 
        return reviewnote = "그냥 그래요"
        case 4 : 
        return reviewnote = "꽤 좋아요"
        case 5 : 
        return reviewnote = "매우 좋아요! "
    }
  };



  return (

    <Wrap>
    <p> {sendReview() }</p>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
      <br></br>
      <button type='submit' onClick={()=>{
        alert("감사합니다");
        {props.setModal(!props.modal)}
        }}>제출</button>
    </Wrap>

  );
}

export default Rating;




const Wrap = styled.div`
  padding: 10px;
`;

const RatingText = styled.div`
color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
<<<<<<< HEAD
=======

>>>>>>> 3fb7e2181d53af958e84563c27b08670dd6a9270
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
`;