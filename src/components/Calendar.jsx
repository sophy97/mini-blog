import '../App.css';
import {useState} from 'react';
import moment from 'moment';

const Calendar = () => {
    const [getMoment, setMoment] = useState(moment());     
    const today = getMoment;    // today == moment()
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const arr = [1, 2, 3, 4, 5];
    const calendarArr=()=>{
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat(
            <tr key={week}>

            </tr>);
        }
        return result;
    }
    return ( 
        <div>
            <div className="control">
            <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>이전달</button>
            <span>{today.format('YYYY 년 MM 월')}</span>  
            <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
            </div>
            <table>
            <tbody>
            {arr} 
            </tbody>
            </table>
        </div>
    );
}

export default Calendar;