import { AnimationEventHandler } from "react";

export type WithAnimationEventHandlers<T> = {
  onAnimationEnd?: AnimationEventHandler<T> | undefined;
  onAnimationStart?: AnimationEventHandler<T> | undefined;
};
