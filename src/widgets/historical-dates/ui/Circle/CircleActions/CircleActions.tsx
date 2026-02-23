import { normalizeIndexInRange } from "@/shared/lib";
import styles from "./CircleActions.module.scss";
import { ArrowIcon, IconButton } from "@/shared/ui";

export type ChangeIndexHandler = (next: number) => void;

interface CircleActionsProps {
  activeIndex: number;
  itemsLength: number;
  className?: string;
  onChangeIndex?: ChangeIndexHandler;
}

export function CircleActions({
  activeIndex,
  itemsLength,
  className,
  onChangeIndex
}: CircleActionsProps) {
  const changeIndex = (index: number) => {
    const normalizedIndex = normalizeIndexInRange(index, itemsLength);
    onChangeIndex?.(normalizedIndex);
  };

  return (
    <div className={className}>
      <div className={styles.itemIndex}>
        {"0" + (activeIndex + 1)}/{"0" + itemsLength}
      </div>
      <div className={styles.actionButtons}>
        <IconButton
          variant="outline"
          className={styles.actionButton}
          onClick={() => changeIndex(activeIndex - 1)}
        >
          <ArrowIcon direction="left" />
        </IconButton>
        <IconButton
          variant="outline"
          className={styles.actionButton}
          onClick={() => changeIndex(activeIndex + 1)}
        >
          <ArrowIcon direction="right" />
        </IconButton>
      </div>
    </div>
  );
}
