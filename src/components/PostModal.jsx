// import { useEffect } from "react";
// import { useRef, useState } from "react";
// import styled from 'styled-components';

// const PostModal=(props)=> {
//     const {title, content, date, clickNum} =props;
//     const [modal, setModal] = useState(false);


//     const toggleModal = () => {
//         setModal(!modal);
//     };


//     // DOM에 직접..
//     const modalElement = useRef();
//     useEffect( ()=>{
//         modalElement.current.style.color = "blue";
//     } )

//     // {
//     //     modal ? 
//     //     document.body.classList.add('active-modal')
//     //     :
//     //     document.body.classList.remove('active-modal')
//     // }
    

//     return (
//         <Wrapper>
//         <button onClick={toggleModal} className="btn-modal">
//             상세보기
//         </button>

//         {modal && (
//             <div className="modal">
//             <div onClick={toggleModal} className="overlay">
//                 <div className="modal-content">
//                     <h2>제목: {title[clickNum]}</h2>
//                     <p> 📜 발행: {date.getMonth()+1}월{date.getDate()}일 </p>
//                     <p>{content[clickNum]}</p>
//                     <button className="close-modal" onClick={toggleModal}>닫기</button>
//                 </div>
//             </div>
//             </div>
//         )}
//             <h2>제목: {title[clickNum]}</h2>

//             <h3>useRef</h3>
//             <div type="text" ref={modalElement} />
//         </Wrapper>
//     );
// }
// export default PostModal;


// const Wrapper = styled.div`
// body.active-modal {
//     overflow-y: hidden;
// }

// .btn-modal {
//     padding: 5px 10px;
//     display: block;
//     margin: 100px auto 0;
//     font-size: 18px;
// }

// .modal, .overlay {
//     width: 100vw;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     position: fixed;
// }

// .overlay {
//     background: rgba(49,49,49,0.8);
// }

// .modal-content {
//     position: absolute;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     line-height: 1.4;
//     background: #f1f1f1;
//     padding: 14px 28px;
//     border-radius: 3px;
//     max-width: 600px;
//     min-width: 300px;
// }

// .close-modal {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     padding: 3px 5px;
// }
// `