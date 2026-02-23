import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HistoricalPeriodEvent } from "../../model/types";
import { EventsCard } from "./EventCard/EventCard";
import { ArrowIcon, IconButton } from "@/shared/ui";
import styles from "./EventsSlider.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { useGSAP, gsap } from "@/shared/lib";
import { ANIMATION_DURATION } from "../../model/animations";

interface EventsSliderProps {
  items: HistoricalPeriodEvent[];
}

export function EventsSlider({ items }: EventsSliderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [visibleItems, setVisibleItems] = useState(items);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    gsap.to(el, {
      autoAlpha: 0,
      duration: ANIMATION_DURATION / 2,
      onComplete: () => {
        setVisibleItems(items);

        gsap.to(el, {
          autoAlpha: 1,
          duration: ANIMATION_DURATION / 2
        });
      }
    });
  }, [items]);

  useGSAP(() => {
    const el = rootRef.current;
    if (!el) return;
    gsap.set(el, { autoAlpha: 1 });
  }, []);

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
        {visibleItems.map((event) => (
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
