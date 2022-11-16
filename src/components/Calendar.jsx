import '../App.css';
import {useState} from 'react';
import moment from 'moment';

const Calendar = () => {
    const [getMoment, setMoment] = useState(moment());

    const today = getMoment;    // today == moment()
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr =() => {
        let result = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
            result = result.concat (
            <tr key={week}>
            {
            Array(7).fill(0).map((data, index) => {
            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
            if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                    <td key={index} style={{border:'1px solid red', borderRadius:'50%'}} >
                        <span>{days.format('D')}</span>
                    </td>
                );
            } else if (days.format('MM') !== today.format('MM')){
                return(
                    <td key={index} style={{color:'lightgray'}} >
                        <span>{days.format('D')}</span>
                    </td>
                );
            } else {
                return(
                    <td key={index}  >
                        <span>{days.format('D')}</span>
                    </td>
                    );
                }
            })
            }
            </tr>
            );
        }
        return result;
    }

    return ( 
        <div className='calendar'>

            <div className="cal-control">
            <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}> 　◀　 </button>
            <span>{today.format('YYYY / MM ')}</span>  
            <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} > 　▶　 </button>
            </div>
            <table className='cal-table'>
                <tbody>
                {calendarArr()} 
                </tbody>
            </table>

        </div>
    );
}

export default Calendar;