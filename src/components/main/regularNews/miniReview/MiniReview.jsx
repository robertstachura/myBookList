import "./miniReview.scss"

export default function MiniReview() {

    const path = "https://cdn.pixabay.com/photo/2025/07/12/10/04/reinebringen-9710168_1280.jpg"

    return(
        <div className="mini-review">
            <div className="mini-review__img" style={{backgroundImage: `url(${path})`}}></div>
            <div className="mini-review__text">
                <h4 className="mini-review__text-title">Title</h4>
                <p className="mini-review__text-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, exercitationem veniam! Libero impedit ducimus dolorem itaque deserunt illum odio laborum.</p>
            </div>
        </div>
    )
}