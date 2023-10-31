import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

function Restaurant() {

 
    let [restaurant, setRestaurant] = useState([]);
    const getRestaurant = async () => {
      let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      let data = await response.json();
      setRestaurant(data.recipes);
  
  
    }
    useEffect(() => {
      getRestaurant();
  
    }, [])
    
  return (
    <>
      <div className='col-md-4'>
      <div className='prod'>
        <h2>Pizza</h2>
        <div>
        {
          restaurant.map((ele) => {
            return (
              <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'/>
              </div>)
          }
          )
        }

      </div>

      </div>

      <div className='prod'>
        <h2>onion</h2>

      </div>
      
      <div className='prod'>
        <h2>salat</h2>

      </div>
      </div>

     

      
      
      </>
      




  )

}

export default Restaurant