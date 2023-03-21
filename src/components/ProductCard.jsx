function ProductCard(post) {
  return (
    <a href={"/product/" + postMessage.post.id} className>
      <img scr={post.post.image[0]}></img>
      <h2>{post.post.tile}</h2>
      <h3>p {post.post.price}</h3>
      <span className="discount"> -%{post.post.discount}
      </span>
      <hr />
      <p>{post.post.descripion}</p>

    </a>
  )
}
export default ProductCard