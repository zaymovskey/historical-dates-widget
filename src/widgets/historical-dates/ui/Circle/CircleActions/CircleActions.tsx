import styles from "./CircleActions.module.scss";
import { ArrowIcon, IconButton } from "@/shared/ui";

interface CircleActionsProps {
  activeIndex: number;
  itemsLength: number;
  className?: string;
}

export function CircleActions({
  activeIndex,
  itemsLength,
  className
}: CircleActionsProps) {
  return (
    <div className={className}>
      <div className={styles.itemIndex}>
        {"0" + (activeIndex + 1)}/{"0" + itemsLength}
      </div>
      <div className={styles.actionButtons}>
        <IconButton variant="outline" className={styles.actionButton}>
          <ArrowIcon direction="left" />
        </IconButton>
        <IconButton variant="outline" className={styles.actionButton}>
          <ArrowIcon direction="right" />
        </IconButton>
      </div>
    </div>
  );
}
