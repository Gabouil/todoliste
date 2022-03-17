export default function PreviewNewCard({inputTitle, inputeDesc}) {
    return (
    <div className="list-group w-50 btn border border-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-between mb-4" key='preview'>
            <div className="d-flex flex-column align-items-center justify-content-between mb-2">
                <h1 className="w-100 h-25">{inputTitle}</h1>
                <p className="w-100 h-75">{inputeDesc}</p>
            </div>
        </div>
    </div>
    )
}