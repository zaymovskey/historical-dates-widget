import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HistoricalPeriodEvent } from "../../model/types";
import { EventsCard } from "@/widgets/historical-dates/ui/EventsSlider/EventCard/EventCard";
import { ArrowIcon, IconButton } from "@/shared/ui";
import styles from "./EventsSlider.module.scss";
import { Navigation } from "swiper/modules";

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
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
          disabledClass: styles.disabled
        }}
        spaceBetween={50}
        slidesPerView={3}
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
