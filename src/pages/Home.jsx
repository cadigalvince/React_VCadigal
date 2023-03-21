import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard."

function Home() {
  const [post, setPosts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(async res => await res.json())
      .then(data => setPosts(data.product))



  }, [])
  return (
    <div classmate="container">
      {post.map((post, i) =>
        <ProductCard post={post}></ProductCard>
      )}
    </div>
  )
}

export default Home