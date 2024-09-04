import { useState } from "react";

function ReservationForm( {availableTimes}) {
     const [date, setDate] = useState("");
     const [time, setTime] = useState("");
     const [numberOfGuest, setNumberOfGuest] = useState("");
     const [occasion, setOccasion] = useState("Occasion");;

     const getIsFormValid = () => {
          return (
               date &&
               numberOfGuest &&
               occasion !== "Occasion"
          );
     };
     
     const clearForm = () => {
          setDate("")
          setTime("")
          setNumberOfGuest("")
          setOccasion("Occasion")
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          alert("Reservation was created");
          clearForm();
     };

     return (
          <>
          <div class="hero bg-grey h-3/6  w-3/5 tablet:w-4/5 mx-auto">
          <form
               style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
               onSubmit={handleSubmit}>
               <label htmlFor="res-date">Choose date</label>
               <input
                    type="date"
                    id="res-date"
                    required
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
                    required
                    value={numberOfGuest}
                    onChange={(e) => setNumberOfGuest(e.target.value)}/>
               
               <label htmlFor="occasion">Occasion</label>
               <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
                    <option value="occasion">Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
               </select>
               
               <button class="btn rounded-lg bg-yellow mt-3 font-abc mb-6" type="submit" disabled={!getIsFormValid()}>Make your reservation</button>
                    </form>
                    </div>
               </>
     )
}

export default ReservationForm;