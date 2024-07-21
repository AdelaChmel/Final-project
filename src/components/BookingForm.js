import { useState } from "react";

function ReservationForm( {availableTimes}) {
     const [date, setDate] = useState("");
     const [time, setTime] = useState("");
     const [numberOfGuest, setNumberOfGuest] = useState("");
     const [occasion, setOccasion] = useState("Birthday");;

     const handleSubmit = (e) => {
          e.preventDefault();
          alert("Reservation was created");
     };

     return (
          <form
               style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
               onSubmit={handleSubmit}>
               <label htmlFor="res-date">Choose date</label>
               <input
                    type="date"
                    id="res-date"
                    value={date}
               onChange={e => setDate(e.target.value)} />
               
               <label htmlFor="res-time">Choose time</label>
               <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((time, index) => (
                         <option key={index} value={time}>
                              {time}
                         </option>
                    ))}
               </select>
               
               <label htmlFor="guests">Number of guests</label>
               <input type="number" placeholder="1" min="1" max="10" id="guests"
                    value={numberOfGuest}
                    onChange={(e) => setNumberOfGuest(e.target.value)}/>
               
               <label htmlFor="occasion">Occasion</label>
               <select id="occasion"
                    value={occasion}
                    onChange={(e)=> setOccasion(e.target.value)}>
               <option>Birthday</option>
               <option>Anniversary</option>
               </select>
               
               <input type="submit" value="Make Your reservation" />
          </form>
     )
}

export default ReservationForm;