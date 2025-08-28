import { Link } from "@redwoodjs/router"

const Button = (props) => {
  const { color, text, link } = props

  return (
    <>
      <Link to={link} className={`btn ${color} m-t-20`}>
        {text}
      </Link>
    </>
  )
}

export default Button
