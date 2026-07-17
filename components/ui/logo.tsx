"use client";

import React from "react";
import { cn } from "@/lib/utils";

type LogoVariant = "horizontal" | "stacked" | "symbol" | "wordmark";
type LogoTheme = "primary" | "black" | "white" | "monochrome-dark" | "monochrome-light" | "grayscale";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
  size?: number;
}

export function Logo({
  variant = "horizontal",
  theme = "primary",
  className,
  size = 32,
  ...props
}: LogoProps) {
  // Define color mapping based on theme
  const colors = {
    primary: {
      deepForest: "#1F4D3D",
      amber: "#C48A2C",
      text: "#1F4D3D", // Updated to Deep Forest instead of Charcoal
    },
    black: {
      deepForest: "#000000",
      amber: "#000000",
      text: "#000000",
    },
    white: {
      deepForest: "#FFFFFF",
      amber: "#FFFFFF",
      text: "#FFFFFF",
    },
    "monochrome-dark": {
      deepForest: "#173A2E",
      amber: "#173A2E",
      text: "#173A2E",
    },
    "monochrome-light": {
      deepForest: "#DCEEE7",
      amber: "#DCEEE7",
      text: "#DCEEE7",
    },
    grayscale: {
      deepForest: "#334155",
      amber: "#6B7280",
      text: "#334155",
    },
  };

  const currentColors = colors[theme];

  // The Abstract Infrastructure Symbol
  // A clean, geometric node representing coordinates and foundation.
  const renderSymbol = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      {/* Mathematical construction representing a digital foundation / coordinates */}
      {/* Main pillar */}
      <rect x="4" y="12" width="8" height="16" rx="2" fill={currentColors.deepForest} />
      {/* Top connection node */}
      <rect x="4" y="4" width="8" height="6" rx="2" fill={currentColors.amber} />
      {/* Horizontal spanning infrastructure */}
      <rect x="14" y="12" width="14" height="8" rx="2" fill={currentColors.deepForest} />
      {/* Secondary growth node */}
      <rect x="14" y="22" width="8" height="6" rx="2" fill={currentColors.deepForest} />
    </svg>
  );

  const wordmarkFontSize = size * 0.75;

  const renderWordmark = () => (
    <svg
      height={size}
      viewBox={`0 0 ${size * 4.5} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <text
        x="0"
        y="50%"
        dominantBaseline="central"
        fill={theme === "white" ? "#FFFFFF" : currentColors.text}
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          fontSize: `${wordmarkFontSize}px`,
        }}
      >
        PlotHub
      </text>
    </svg>
  );

  const renderHorizontal = () => (
    <div className={cn("flex items-center gap-3", className)}>
      {renderSymbol()}
      <svg
        height={size}
        viewBox={`0 0 ${size * 4.5} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <text
          x="0"
          y="50%"
          dominantBaseline="central"
          fill={theme === "white" ? "#FFFFFF" : currentColors.text}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontSize: `${wordmarkFontSize}px`,
          }}
        >
          PlotHub
        </text>
      </svg>
    </div>
  );

  const renderStacked = () => (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      {renderSymbol()}
      <svg
        height={size * 0.7}
        viewBox={`0 0 ${size * 4.5} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fill={theme === "white" ? "#FFFFFF" : currentColors.text}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            fontSize: `${wordmarkFontSize}px`,
          }}
        >
          PlotHub
        </text>
      </svg>
    </div>
  );

  switch (variant) {
    case "symbol":
      return renderSymbol();
    case "wordmark":
      return renderWordmark();
    case "stacked":
      return renderStacked();
    case "horizontal":
    default:
      return renderHorizontal();
  }
}
