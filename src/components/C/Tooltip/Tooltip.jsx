import "./Tooltip.scss"

export default function Tooltip({c, text}) {
    return(
        <div className={`${c} tooltip`}>
            <p>{text}</p>
        </div>
    )
}