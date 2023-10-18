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

const Badge = ({ message, type = BadgeTypes.DEFAULT }: BadgePropType) => {
  const colorClass = {
    [BadgeTypes.DANGER]: "bg-red-100 text-red-800",
    [BadgeTypes.DARK]: "bg-gray-100 text-gray-800",
    [BadgeTypes.INFO]: "bg-indigo-100 text-indigo-800",
    [BadgeTypes.LOVE]: "bg-pink-100 text-pink-800",
    [BadgeTypes.SUCCESS]: "bg-green-100 text-green-800",
    [BadgeTypes.WARNING]: "bg-yellow-100 text-yellow-800",
    [BadgeTypes.DEFAULT]: "bg-blue-100 text-blue-800",
  }[type];

  const className = `text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${colorClass} dark:${colorClass
    .replace(/bg/, "bg")
    .replace(/text/, "text")}`;

  return <span className={className}>{message}</span>;
};

export default Badge;