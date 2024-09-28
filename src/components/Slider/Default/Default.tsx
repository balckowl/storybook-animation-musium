import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Default.module.css"

import "swiper/css"
import "swiper/css/effect-coverflow"
// import "swiper/css/pagenaiton"
// import "swiper/css/navigation"

export default function Default() {
    return (
        <div style={{ width: "80vw" }}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                autoplay={{
                    delay: 0,
                    // pauseOnMouseEnter: true,
                    // disableOnInteraction: false,
                }}
                speed={2000}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -25,
                    depth: 200,
                    modifier: 1.5,
                    slideShadows: false
                }}
                navigation={{
                    nextEl: ".swiper_button_next",
                    prevEl: ".swiper_button_prev",
                    hideOnClick: true,
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
            >
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/react.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/vite.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/nextjs.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/tailwindcss.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/storybook.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/authjs.png" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/prisma.svg" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "150px" }}>
                    <img src="/supabase.png" alt="" style={{ width: "100%", height: "150px", objectFit: "contain" }} />
                </SwiperSlide>

{/* 
                <div className={styles.slider_nav}>
                    <div className={`${styles.swiper_button_prev} swiper_button_prev`}>
                        <FaArrowLeft size={20} />
                    </div>
                    <div className={`${styles.swiper_button_next} swiper_button_next`}>
                        <FaArrowRight size={20} />
                    </div>
                </div> */}
            </Swiper>
        </div>
    )
}

