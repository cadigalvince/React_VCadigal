import { useEffect, useState } from "react"

function Home () {
    const [post, setPosts] = useState([])
    
    useEffect(() => {
fetch('https://dummyjson.com/products')
.then(async res => await res.json())
.then(data => setPosts(data.product))



},[])
return(
  <div classmate="container">
    {post.map((post, i) =>

    <div className={"card"}key={i}>
        <h1>{post.title}</h1>
        <img scr={post.image[0]}alt=""></img>
        <h3>{post.description}</h3>
        <h2>Price: {post.price}</h2>
        <h4>Discount: {post.discountPrecentage}%</h4>
      </div>
    )}
  </div>
)
}

export default Home