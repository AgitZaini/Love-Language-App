import CardImage from "../style/images/BackgroundImageCard.png";
// import left from "../style/images/klik-left.svg";
// import right from "../style/images/klik-right.svg";
// import exit from "../style/images/Exit.png";
import reset from "../style/images/reset.png";
import Navbar from "./component/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ResultPage(params) {
    const [result, setResult] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState({
        name: "",
        desc: "",
    });
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token");
    useEffect(() => {
        axios({
            method: "get",
            url: "main/resultUser",
            headers: {
                access_token: token,
            },
        })
            .then(({ data }) => {
                setResult(data);
            })
            .catch((error) => console.log(error.message));
    }, []);
    const toggleModal = (e) => {
        if (e == "how") setModal({ name: "How To Comminicate", desc: result.typeLove?.howToCommunicate });
        if (e == "action") setModal({ name: "Actions To Take", desc: result.typeLove?.actionsToTake });
        if (e == "things") setModal({ name: "Things To Avoid", desc: result.typeLove?.thingsToAvoid });
        setShowModal(true);
    };
    const clickReset = () => {
        axios({
            method: "delete",
            url: "main/deleteResult",
            headers: {
                access_token: token,
            },
        })
            .then(({ data }) => console.log("Sukses Delete"))
            .catch((error) => console.log(error.message));
            navigate("/question")
    };
    return (
        <>
            <div className="defaultBg">
                <div className="card">
                    <Navbar isLogin={token ? "login" : null} />
                    <div className="backgroundImageCard">
                        <img src={CardImage} alt="" />
                    </div>
                    <div className="content">
                        <h1 className="test-result">YOUR LOVE LANGUAGE</h1>
                    </div>
                    {"no" === result.code ? (
                        <div className="typeCard" style={{ top: "22px", height: "300px" }}>
                            <h1 style={{ color: "red", marginTop: "100px" }}>Love Language doesn't exist yet</h1>
                        </div>
                    ) : (
                        <>
                            <div className="typeCard" style={{ top: "22px", height: "300px" }}>
                                <h1>{result.typeLove?.name}</h1>
                                <h2>Description:</h2>
                                <p>{result.typeLove?.description}</p>
                            </div>
                            <div className="result-button">
                                <button className="howTo btn" name="howTo" value={"howToValues"} onClick={() => toggleModal("how")}>
                                    How To Communicate
                                </button>
                                <button className="actions btn" name="action" onClick={() => toggleModal("action")}>
                                    Action To Take
                                </button>
                                <button className="thingsTo btn" name="thingsTo" onClick={() => toggleModal("things")}>
                                    Things To Avoid
                                </button>
                            </div>
                            {showModal ? (
                                <div>
                                    <div className="modal-background" onClick={() => setShowModal(false)}></div>
                                    <div className="modal" id="wraping">
                                        <h1>{modal?.name}</h1>
                                        <p>
                                            {modal?.desc}
                                            {/* Mereka akan merasa dimengerti, */}
                                            {/* Mereka akan merasa dimengerti, diperhatikan, dan dihargai lebih dari segala pengorbanan yang diusahakan olehmu untuk memberikan hadiah tersebut kepadanya. */}
                                        </p>
                                    </div>
                                </div>
                            ) : null}
                            <div className="content-button">
                                <div className="reset">
                                    <button>
                                        <img src={reset} alt="" onClick={() => clickReset()} />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="content-button">
                        {/* <div className="swipe">
                            <button className="left">
                                <img src={left} alt="" />
                            </button>
                            <button className="right">
                                <img src={right} alt="" />
                            </button>
                        </div>
                        <div className="exit">
                            <button>
                                <img src={exit} alt="" />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
