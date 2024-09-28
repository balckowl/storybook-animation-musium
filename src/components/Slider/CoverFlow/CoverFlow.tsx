import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"

export default function CoverFlow() {
    return (
        <div style={{ width: "80vw" }}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true
                }}
                modules={[EffectCoverflow]}
            >
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "300px", height: "300px" }}>
                    <img src="/island.webp" alt="" style={{ width: "300px", height: "300px" }} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

