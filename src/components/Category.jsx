
import Form from 'react-bootstrap/Form';
import '../App.css';


function Category() {
    // 전체를 들고와서 구분해서 사용 > 서버의 일을 프론트에서 하는중
  
  return (
    
      <div>
        <br />
      <Form.Select aria-label="Default select example">
      <option>게시글 분류</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">One</option>
      <option value="5">Two</option>
      <option value="6">Three</option>
    </Form.Select>
      </div>
  );
}

export default Category;