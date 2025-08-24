 
import '../App.css'
import {useSelector , useDispatch} from 'react-redux'
import { increment} from "../store/reducers/counter"
function HomePage() {
   
    const stateCounter = useSelector(state => state.counter);
    console.log('ok2ok2' ,stateCounter);
    const dispatch = useDispatch( );
    const incrementCounter = () =>{ dispatch(increment({name: 'ok2ok'}))};
  
  return (
       <div>
         <button className='btn' onClick={incrementCounter}>
          count is {stateCounter.count}
        </button>
     
       </div>
  )
}

export default HomePage;






