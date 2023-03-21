import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

function ItemDetails() {
  const Params = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/product' + Params.id)
      .then(async (res) => await res.json())
      .then(i => setProduct(i))
  }, [])


  return (
    <div>
      {product == null ?
        <p>Loading...</p>
        :
      <>
          <p>{product.title}</p>
          <img Src={product.image[0]} atl="" />
          <p>{product.description}</p>
          <p>Price $ {product.price}</p>
          <p>Discount: {product.discountsPrecentage}%</p>
          </>
        }
          </div>
          )
    }

          export default ItemDetails