 
import { useEffect } from 'react';
import '../App.css'
import { useGetAllproductsQuery } from '../RTK-Query/index'
import {Link} from "react-router-dom"
function HomePage() {
    const { data, error, isLoading } = useGetAllproductsQuery('mindIt',{
      // pollingInterval:5000
    })
    console.log(data);
    console.log(error);
    console.log(isLoading);
  return (
       <div>
      <h1>Home</h1>
      <Link className='Link' to={'/Shop'}>Go to Shop</Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.map((v) =>(
          <ul key={v.id}>
             <li>{v.title}</li>
             <p>{v.category}</p>
             <p >[{v.rating.rate} , {v.rating.count}]</p>
             <p>{v.description}</p>
           
          </ul>

        )
       )}
       </div>
  )
}

export default HomePage;






