import unixToDate from "../../../../../utils/unixToDate";
import {TodoStatus} from "../../../IApp";
import {TDates} from "./IDates";

const Dates = ({status, createDate, expectDoneTo, doneDate}: TDates) =>
    <div style={{gridRow:'2/3',gridColumn:'1/2'}}>
        <p>Create at : {unixToDate(createDate)}</p>
        <p>Expect to : {unixToDate(expectDoneTo)}</p>
        {
            status === TodoStatus.done &&
            <p>Done at : {doneDate && unixToDate(doneDate)}</p>
        }
    </div>

export default Dates;
