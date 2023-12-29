import { toKebabCase } from "./stringModifiers";

export const linkMenuItems = (arr: string[]): string => {
  if (!Array.isArray(arr) || arr.length <= 0) return "";

  const modifier = "r";
  const linkWithoutModifier = arr
    .map((desination) => toKebabCase(desination))
    .join("/");
  return `/${modifier}/${linkWithoutModifier}`;
};
