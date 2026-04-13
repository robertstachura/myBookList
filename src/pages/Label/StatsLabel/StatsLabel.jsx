import "./StatsLabel.scss"

export default function Label({header, content}) {
    return(
        <div className="label">
            <h4 className="label__header">
                {header}
            </h4>
            <p className="label__content">{content}</p>
        </div>
    )
}