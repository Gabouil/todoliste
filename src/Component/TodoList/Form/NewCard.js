export default function NewCard({inputTitle, inputeDesc, setinputDesc, setinputTitle, addTodo}) {
    return (
        <form className="d-flex align-items-center mb-5 flex-column w-50">
            <input 
                value={inputTitle}
                type="test"
                placeholder="Titre"
                onChange={e => (setinputTitle(e.target.value))}
                className="form-control mb-2"
            />
            <input 
                value={inputeDesc}
                type="test"
                placeholder="Tache"
                onChange={e => (setinputDesc(e.target.value))}
                className="form-control mb-2"
            />
            <button id="addToTodo" className="btn btn-primary" onClick={addTodo}>Ajouter</button>
        </form>
    )
}