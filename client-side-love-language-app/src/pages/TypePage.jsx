import CardImage from "../style/images/BackgroundImageCard.png";
import Navbar from "./component/Navbar";
// import left from "../style/images/klik-left.svg";
// import right from "../style/images/klik-right.svg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TypePage() {
    const token = localStorage.getItem("access_token");
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios.get("/main/types")
            .then(({ data }) => {
                setTypes(data.types);
            })
            .catch((error) => console.log(error.message));
    }, []);
    console.log(types);
    return (
        <>
            <div className="defaultBg">
                <div className="card">
                    <Navbar isLogin={token ? "login" : null} />
                    <div className="backgroundImageCard">
                        <img src={CardImage} alt="" />
                    </div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                            <SwiperSlide>
                                <div className="typeCard">
                                    <h1>{types[0]?.name}</h1>
                                    <h2>Description:</h2>
                                    <p>{types[0]?.description}</p>
                                    <h1 style={{fontSize: "30px", color: "maroon"}}>You can swipe to see the other types</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="typeCard">
                                    <h1>{types[1]?.name}</h1>
                                    <h2>Description:</h2>
                                    <p>{types[1]?.description}</p>
                                    <h1 style={{fontSize: "30px", color: "maroon"}}>You can swipe to see the other types</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="typeCard">
                                    <h1>{types[2]?.name}</h1>
                                    <h2>Description:</h2>
                                    <p>{types[2]?.description}</p>
                                    <h1 style={{fontSize: "30px", color: "maroon"}}>You can swipe to see the other types</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="typeCard">
                                    <h1>{types[3]?.name}</h1>
                                    <h2>Description:</h2>
                                    <p>{types[3]?.description}</p>
                                    <h1 style={{fontSize: "30px", color: "maroon"}}>You can swipe to see the other types</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="typeCard">
                                    <h1>{types[4]?.name}</h1>
                                    <h2>Description:</h2>
                                    <p>{types[4]?.description}</p>
                                    <h1 style={{fontSize: "30px", color: "maroon"}}>You can swipe to see the other types</h1>
                                </div>
                            </SwiperSlide>
                    </Swiper>
                    {/* <div className="content-button">
                        <div className="swipeLeftRight">
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
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
