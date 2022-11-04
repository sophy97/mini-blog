import Form from 'react-bootstrap/Form';
import '../App.css';

function Category() {
  return (
      <Form.Select aria-label="Default select example">
      <option>게시글 분류</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">One</option>
      <option value="5">Two</option>
      <option value="6">Three</option>
    </Form.Select>
  );
}

export default Category;