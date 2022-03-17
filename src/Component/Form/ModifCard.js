export default function ModifCard({modifTitle, modifDesc, setmodifTitle, setmodifDesc, changeTodo}) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-3">
            <form className="d-flex align-items-center  flex-column">
                <input 
                    value={modifTitle}
                    type="test"
                    placeholder="modifier le titre"
                    onChange={e => (setmodifTitle(e.target.value))}
                    className="form-control mb-2"
                />
                <input 
                    value={modifDesc}
                    type="test"
                    placeholder="modifier la tache"
                    onChange={(e => (setmodifDesc(e.target.value)))}
                    className="form-control mb-2"
                />
                <button id="changeTodo" className="btn btn-primary" onClick={changeTodo}>Changer</button>
            </form>
        </div>
    )
}