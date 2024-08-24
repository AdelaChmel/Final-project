import HomePage from './Homepage';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';
import { useReducer } from "react";

const reducer = (availableTimes, action) => {
     if (action.type === 'initialize') return initializeTime();
     if (action.type === '') return availableTimes.pop();
     return availableTimes;
}

function initializeTime() {
          return [
               '17:00',
               '18:00',
               '19:00',
               '20:00',
               '21:00',
               '22:00'
          ];
     }

function Main() {
     //const [availableTimes, setAvailableTimes] = useState(initialTimes);
     const initialState =
          [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00'
          ]
     const [availableTimes, dispatch] = useReducer(reducer, initialState);
     
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<Chicago />} />
               <Route path="/reservation" element={<BookingPage availableTimes={availableTimes} />} />
          </Routes>
     )
}

export default Main;