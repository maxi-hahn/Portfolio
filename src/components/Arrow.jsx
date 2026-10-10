import "./arrow.css"

const Arrow = ({avanzar}) => {
  return (
    <>
<button className="button" onClick={()=>{avanzar()}}>
  <div className="line one">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line two">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line three">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    <div className="line four">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line five">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line six">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line seven">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
</button></>
  )
}

export default Arrow