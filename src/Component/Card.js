export default function Card({key, title, desc, ID, status, items, setitems}) {


    const deleteTodo = () => {
        let newlist = items.filter(e => e.ID != ID)
        setitems(newlist)
    }
    const handleStatus = () => {
        switch(status) {
            case true:
                status =false
                break
            case false:
                status = true
                break
        }
        let newlist = items.map(e => {
            if(e.ID == ID) {
                return {...e, status: status}
            }
            return e;
        })
        setitems(newlist)
    }
    
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-4" key={ID}>
            <div className={`${status ? "btn-success" : "btn-warning"} btn w-100 mb-2`} htmlFor={ID}>
                <div className="d-flex flex-column align-items-center justify-content-between mb-3">
                    <h1 className="w-100 h-25">{title}</h1>
                    <p className="w-100 h-75">{desc}</p>
                </div>
            </div>
            <button className={`${status ? "btn-warning" : "btn-success"} btn ml-2 w-25 mb-1`} onClick={() => handleStatus()}>{status ? "À faire":"Fait"} </button>
            <button className="btn btn-danger ml-2 w-25 mb-1" onClick={() => deleteTodo()}>Supprimer</button>
        </div>
    )
}