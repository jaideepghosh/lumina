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
  [BadgeTypes.DANGER]: "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
  [BadgeTypes.DARK]: "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300",
  [BadgeTypes.INFO]: "bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
  [BadgeTypes.LOVE]: "bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
  [BadgeTypes.SUCCESS]: "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
  [BadgeTypes.WARNING]: "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
  [BadgeTypes.DEFAULT]: "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
};

const Badge = ({ message, type = BadgeTypes.DEFAULT }: BadgePropType) => {
  const color = badgeColors[type];
  return <span className={color}>{message}</span>;
};

export default Badge;
