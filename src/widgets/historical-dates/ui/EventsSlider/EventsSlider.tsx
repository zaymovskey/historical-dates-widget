import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HistoricalPeriodEvent } from "../../model/types";
import { EventsCard } from "./EventCard/EventCard";
import { ArrowIcon, IconButton } from "@/shared/ui";
import styles from "./EventsSlider.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { useGSAP, gsap } from "@/shared/lib";
import { HISTORICAL_DATES_ANIMATION } from "../../model/animation";

interface EventsSliderProps {
  items: HistoricalPeriodEvent[];
  activeIndex: number;
}

export function EventsSlider({ items, activeIndex }: EventsSliderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = rootRef.current;
      if (!el) return;
      gsap.killTweensOf(el);
      gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, ...HISTORICAL_DATES_ANIMATION });
    },
    { dependencies: [activeIndex] }
  );

  return (
    <div ref={rootRef} className={styles.root}>
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
