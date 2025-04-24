import React from "react";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const sizeMap: Record<HeadingProps["level"], string> = {
  1: "text-5xl",
  2: "text-4xl",
  3: "text-3xl",
  4: "text-2xl",
  5: "text-xl",
  6: "text-lg",
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = `font-bold ${sizeMap[level]} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
};
