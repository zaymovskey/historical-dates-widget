import styles from "./HistoricalDates.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { periods } from "../model/data";
import { CircleItem, Circle } from "./Circle/Circle";

export function HistoricalDates() {
  const circleItems: CircleItem[] = periods.map((period) => ({ label: period.label }));

  return (
    <section className={styles.root}>
      <div className={styles.axes} aria-hidden="true" />

      <Circle items={circleItems} />

      <div className={styles.events}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
