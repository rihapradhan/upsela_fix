import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const ResultSolution = (props) => {
  const { jsonData } = useSharedData()

  // const ResultSolution = jsonData.ResultSolution
  const resultSolution = props.resultSolution

  return (
    <>
      <div className="result-solution">
        <div className="container">
          <h2 className="m-t-30">
            {props.solutionTitle ? props.solutionTitle : 'Results & Solutions'}
          </h2>
          {props.solutionDescription && (
            <p
              className={`result-solution-content ${
                props.textCenter ? 'text-center' : ''
              } m-b-30`}
            >
              {props.solutionDescription}
            </p>
          )}
          {resultSolution?.map((item) => (
            <div key={item.id} className="row result-contents">
              <div className="col-md-6">
                <div className="result-content">
                  <p className="sm-text">{item.number}</p>
                  <h3>{item.title}</h3>
                  <div
                    className="result-text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="result-img">
                  <img src="/images/img1.jpg" alt="" />
                </div>
              </div>
            </div>
          ))}
          {/* <div className="row result-contents">
            <div className="col-md-6">
              <div className="result-content">
                <p className="sm-text"> {ResultSolution[1].number}</p>
                <div
                  className="result-text"
                  dangerouslySetInnerHTML={{ __html: ResultSolution[1].text }}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="result-img">
                <img src={ResultSolution[1].img} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ResultSolution
