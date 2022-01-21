import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker( {register} ) {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
   <div> 
    <div className="Start date"> 
     <p>Arrival Date</p>  
     
     <DatePicker {...register("dateStart")}
       selected={startDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       onChange={date => setStartDate(date)}
     />
     </div> 
     <div className="End date">
     <p>Checkout Date</p>
     <DatePicker {...register("dateEnd")}
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       minDate={startDate}
       onChange={date => setEndDate(date)}
     />
     </div>
   </div>
 );
}