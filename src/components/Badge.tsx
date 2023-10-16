import React from "react";

export enum BadgeTypes {
  DEFAULT = "default",
  DARK = "dark",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  LOVE = "love",
}

interface BadgePropType {
  message: string;
  type?: BadgeTypes;
}

const badgeColors: Record<BadgeTypes, string> = {
  [BadgeTypes.DANGER]: "red",
  [BadgeTypes.DARK]: "gray",
  [BadgeTypes.INFO]: "indigo",
  [BadgeTypes.LOVE]: "pink",
  [BadgeTypes.SUCCESS]: "green",
  [BadgeTypes.WARNING]: "yellow",
  [BadgeTypes.DEFAULT]: "blue",
};

const Badge = ({ message, type = BadgeTypes.DEFAULT }: BadgePropType) => {
  const color = badgeColors[type];
  const badgeClass = `bg-${color}-100 text-${color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`;
  return <span className={badgeClass}>{message}</span>;
};

export default Badge;
