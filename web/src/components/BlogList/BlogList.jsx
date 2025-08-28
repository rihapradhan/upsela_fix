import BlogItem from '../BlogItem/BlogItem'
import BtnLink from '../BtnLink/BtnLink'

const BlogList = (props) => {
  const arrayPost = props.blogItems ? props.blogItems : []

  return (
    <>
      {arrayPost.map((item, index) => (
        <div className="blog-info-list" key={index}>
          <BlogItem
            blogItem={item}
            isTitle={props.isTitle}
            isButton={props.isButton}
            isVideo={props.isVideo}
          />
        </div>
      ))}
    </>
  )
}

export default BlogList
