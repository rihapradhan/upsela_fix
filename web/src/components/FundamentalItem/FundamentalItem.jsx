const FundamentalItem = (props) => {
  const {title, img, para} = props.FundamentalData;
  return (
    <>
      <div className="fundamental-item">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>
         {para}
        </p>
      </div>
    </>
  )
}

export default FundamentalItem
