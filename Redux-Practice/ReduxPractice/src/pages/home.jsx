
import { useState } from 'react'
import '../App.css'
import {useSelector , useDispatch} from 'react-redux'
function HomePage() {
    const [count, setCount] = useState(0)
    const stateReal = useSelector(state => state.user1);
    console.log('ok' ,stateReal);
    const dispatch = useDispatch();
    const increment = () => dispatch({ type: 'INCREMENT' });
  
  return (
       <div>
         <button className='btn' onClick={increment}>
          count is {stateReal.counter}
        </button>
     
       </div>
  )
}

export default HomePage;






