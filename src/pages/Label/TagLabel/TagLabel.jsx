import "./TagLabel.scss"

export default function TagLabel({name}) {
    return(
        <div className="tagLabel">
            <p className="tagLabel__name">{name}</p>
        </div>
    )
}