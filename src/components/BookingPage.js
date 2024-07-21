import BookingForm from "./BookingForm";

function BookingPage( {availableTimes}) {
     return (
          <BookingForm availableTimes={availableTimes}/>
     )
}
export default BookingPage;