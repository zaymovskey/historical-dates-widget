import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HistoricalPeriodEvent } from "../../model/types";
import { EventsCard } from "./EventCard/EventCard";
import { ArrowIcon, IconButton } from "@/shared/ui";
import styles from "./EventsSlider.module.scss";
import { Navigation, Pagination } from "swiper/modules";

interface EventsSliderProps {
  items: HistoricalPeriodEvent[];
}

export function EventsSlider({ items }: EventsSliderProps) {
  return (
    <div className={styles.root}>
      <IconButton
        className={styles.prev}
        size={40}
        onMouseDown={(e) => e.preventDefault()}
        variant="filled"
      >
        <ArrowIcon direction="left" width={5} color="#3877EE" />
      </IconButton>

      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
          disabledClass: styles.disabled
        }}
        spaceBetween={25}
        slidesPerView={1.5}
        pagination={{ clickable: true, enabled: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
            pagination: false
          }
        }}
      >
        {items.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsCard key={event.id} event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        className={styles.next}
        size={40}
        onMouseDown={(e) => e.preventDefault()}
        variant="filled"
      >
        <ArrowIcon direction="right" width={5} color="#3877EE" />
      </IconButton>
    </div>
  );
}
