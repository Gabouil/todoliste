export default function ContentCard({title, desc}) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mb-3">
            <h1 className="w-100 h-25">{title}</h1>
            <p className="w-100 h-75">{desc}</p>
        </div>
    )
}