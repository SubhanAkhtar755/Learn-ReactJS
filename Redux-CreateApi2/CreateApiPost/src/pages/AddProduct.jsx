 
import '../App.css'
import {useGetAllproductsPostMutation} from "../RTK-Query/index"
import { useGetAllproductsQuery } from '../RTK-Query/index'
function ShopA() {
   
    const { data, error, isLoading } = useGetAllproductsQuery('mindIt',{
        // pollingInterval:5000
      })
        console.log(data);
        
    const [addPost,result] = useGetAllproductsPostMutation('products')
    const PostApi = ()=>{
      let post ={
        id: 1,
        title: "1",
        price: 1,
        description: "1",
        category: "1",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120
        }
       }
       addPost(post)
      
    }
  
   console.log(result);
   
    
  return (
       <div>
      <h1>A</h1>
      <h1><button onClick={PostApi}>Send Post</button></h1>
      {result.data ?
      <ul>
        <li>{result.data && result.data.id}</li>
        <li>{result.data && result.data.description}</li>
      </ul>:null
      }
       </div>
  )
}

export default ShopA;






