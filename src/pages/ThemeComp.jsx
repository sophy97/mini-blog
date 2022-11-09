// Layout의 요소로, 프로필박스 우측에 늘 고정
// 카테고리 대신. 주제별로 포스트를 나누는 공간
/**
 * 홈 : 일상글
 * 주제2 : 루틴(일/공부/운동)기록
 * 주제3 : 감정(이모지로 간단히 기록하기) > 귀여운거 찾아놓으삼
 */

import { Link } from 'react-router-dom';
import '../App.css';

const ThemeComp = () => {
    
    return ( 
        <div className='themes'>
            <ul>
                <li><Link to='/' >
                　Home( daily )　</Link>        
                </li>
                <li>Routine Log </li>
                <li>Emotional Log</li>
            </ul>
        </div>
    );
}

export default ThemeComp;