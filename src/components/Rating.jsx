import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';



const ARRAY = [0, 1, 2, 3, 4];

function Rating() {



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
        return reviewnote = "1점 매우 나빠요 "
        case 2 : 
        return reviewnote = "2점 나빠요"
        case 3 : 
        return reviewnote = "3점 그냥그래요"
        case 4 : 
        return reviewnote = "4점 좋아요"
        case 5 : 
        return reviewnote = "5점 매우좋아요"


    }


  };

  return (

    <Wrap>

    <p> 별점 {sendReview() }</p>
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

 margin: auto;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #89CFD3;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #89CFD3;
  }
`;