const Rests = (props) => {
  const { rests, challengesTitle, challengesDescription } = props
  // console.log('🚀 ~ file: Rests.jsx:6 ~ Rests ~ textCenter:', props.rests)

  return (
    <>
      <div className="rests p-tb-60">
        <div className="container">
          <h2
            className={`rests-title ${props.textCenter ? 'text-center' : ''} `}
          >
            {challengesTitle ? challengesTitle : 'Challenges'}
          </h2>
          {challengesDescription && (
            <p
              className={`rests-content ${
                props.textCenter ? 'text-center' : ''
              }`}
            >
              {challengesDescription}
            </p>
          )}
          <div className="row m-t-40">
            {rests?.map((item) => (
              <div key={item.id} className="col-sm-12 col-md-6">
                <div
                  className={`rest ${props.state ? 'bg-gray' : ''} ${
                    props.state ? 'rest-padd' : ''
                  } `}
                >
                  <img src={item.icon} alt="" className="m-b-40" />
                  <h3>{item.title}</h3>
                  <div className="rest-content">{item.description}</div>
                </div>
              </div>
            ))}
            {/* <div className="col-md-6">
              <div
                className={`rest ${props.state ? 'bg-gray' : ''} ${
                  props.state ? 'rest-padd' : ''
                } `}
              >
                <img
                  src={restItems[1].img}
                  alt=""
                  className="m-b-30"
                />
                <div className="rest-content">
                  {restItems[1].para}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Rests
