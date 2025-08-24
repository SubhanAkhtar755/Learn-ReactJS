 
import '../App.css'
import { useGetAllproductsQuery } from '../RTK-Query/index'
import {Link} from "react-router-dom"
function Shop() {
  const { data, error, isLoading } = useGetAllproductsQuery('mindIt')
  console.log(data);
  console.log(error);
  console.log(isLoading);
  return (
       <div>
      <h1>Shop</h1>
       <Link className='Link' to={'/'}>Go to Home</Link>
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

export default Shop;






