const UpselaBlock = (props) => {
  const { imgSrc, text, number } = props
  return (
    <>
      <div className={`upsela-block ${number}`}>
        <img src={imgSrc} alt="" />
        <p>{text}</p>
      </div>
    </>
  )
}

export default UpselaBlock
