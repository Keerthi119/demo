
function Service(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src = {props.image} className="card-image" />
            </div>
            
            <h2 className="card-title">{props.title}</h2>
            <h4 className="card-sub-title">{props.subTitle}</h4>
            <p className="card-desc">{props.desc}</p>
            <button className="card-btn">Read More</button>
        </div>
    )
}
export default Service;