import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HistoricalPeriodEvent } from "../../model/types";
import { EventsCard } from "@/widgets/historical-dates/ui/EventsSlider/EventCard/EventCard";

interface EventsSliderProps {
  items: HistoricalPeriodEvent[];
}

export function EventsSlider({ items }: EventsSliderProps) {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsCard key={event.id} event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
