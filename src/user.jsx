function User(props) {
    return(
        
        <div className="card">
            <img src={props.path} alt="" />
        </div>
        
    )
}


function Item(props) {
    return(
        <div className="item">
            <img src={props.path} alt="" />
        </div>
    )
}

export { User, Item};


