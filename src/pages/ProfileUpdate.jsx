import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import DataContext from '../Context/DataContext';



function ProfileUpdate() {
    // 데이터 초기값
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // 데이터 수정을 위해 액션값 받아옴
    const {state, action} = useContext(DataContext);
    const [file, setFile] = useState("");
    const imgShow = useRef();

  //파일 가져오는 함수 (e객체로부터 들고옴) : file state 생성해두기
  const onLoadFile =(e)=> {
    //이벤트객체의 target.files를 통해 원하는 파일 들고올 수 있다
    setFile(e.target.files[0]);
    imgShow.current.style.backgroundSize = "cover";
    imgShow.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
  }

  //저장버튼 누르면 state에 사진 저장하고 모달창 종료하는 함수
  const updateProfile =()=>{
    //user값은 객체형태였으니 ()안에 다시 객체형태로 
    action.setUser({
      ...state.user, profile : URL.createObjectURL(file)
    })
    handleClose();
  }


  return (
    <>
      <Button variant="outline" size='xs' onClick={handleShow}
      style={{ border:'1px solid darkgray' }} >
        프로필사진 수정
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>프로필 사진을 추가하세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 추가된 사진 미리보기("objectURL사용:createimageURL") */}
          <div ref={imgShow} style={{width:'300px', height:'200px', 
          backgroundColor:'lightgray', borderRadius:'30%'}}>
          </div>
          {/* 모달 바디 > 사진 파일을 받을 input태그 가져오기 */}
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>추가할 이미지를 선택하세요</Form.Label>
            <Form.Control type="file" onChange={onLoadFile} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* 모달 푸터 > 사진 취소와 저장 */}
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="dark" onClick={updateProfile}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileUpdate;