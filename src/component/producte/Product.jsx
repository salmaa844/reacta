import React, { useEffect, useState } from 'react'

function Product() {
  let [producte, setProduct] = useState([]);
  const getProduct = async () => {
    let repone = await fetch("https://fakestoreapi.com/products");
    let data = await repone.json();
    setProduct(data);
  }
  useEffect(() => {
    getProduct();
  }, [])

  return (
    <>
      <div className='row'>
        {
          producte.map((ele) => {
            return (
              <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-100' />
              </div>)
          }

          )
        }
      </div>

    </>

  )
}

export default Product