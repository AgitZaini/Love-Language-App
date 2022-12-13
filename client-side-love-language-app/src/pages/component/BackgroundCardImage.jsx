import CardImage from "../../style/images/BackgroundImageCard.png";
import "../../style/style.css";

export default function BackgroundCardImage() {
    return (
        <>
            <div className="backgroundImageCard">
                <img src={CardImage} alt="" />
            </div>
        </>
    );
}
