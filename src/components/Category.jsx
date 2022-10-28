import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

function Category() {
    
    return (
        <>
            <Dropdown.Menu className='category-box' show >
            <Dropdown.Item eventKey="1">category1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">category2</Dropdown.Item>
            <Dropdown.Item eventKey="5">Separated link</Dropdown.Item>
            <Dropdown.Item eventKey="6">Separated link</Dropdown.Item>
            <Dropdown.Item eventKey="7">Separated link</Dropdown.Item>
            <Dropdown.Item eventKey="8">Separated link</Dropdown.Item>
            <Dropdown.Item eventKey="9">Separated link</Dropdown.Item>
            <Dropdown.Item eventKey="10">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </>
    );
}

export default Category;