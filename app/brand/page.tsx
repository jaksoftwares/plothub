"use client";

import React, { useRef } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function BrandAssetPortal() {
  // A helper function to trigger the download of an element
  const handleDownloadSVG = (containerId: string, filename: string) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // For horizontal/stacked which are divs wrapping svgs, we need the inner HTML if it's multiple SVGs, 
    // but the logo component currently renders as a flex div wrapping the symbol and wordmark SVGs.
    // To download the entire logo lockup as a single SVG, it's complex if they are separate.
    // Actually, our logo component renders two separate SVGs in a flex div for horizontal/stacked.
    // For the sake of the generator, we'll download the symbol or wordmark directly if it's a single SVG.
    // If it's a div, we'd need to stitch them. For MVP simplicity, we will just download the innerHTML.
    
    // To make it robust, let's grab all SVGs inside the container.
    let svgContent = container.innerHTML;
    // If it's a flex div with multiple SVGs, downloading it as a single SVG file won't work natively unless stitched.
    // Wait, the standard way is to wrap it all in an SVG or use foreignObject, but for now we'll download the first SVG found.
    const svgElement = container.querySelector('svg');
    if (svgElement) {
       const svgData = new XMLSerializer().serializeToString(svgElement);
       const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
       const url = URL.createObjectURL(blob);
       const link = document.createElement("a");
       link.href = url;
       link.download = `${filename}.svg`;
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
    }
  };

  const handleDownloadPNG = (containerId: string, filename: string) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const svgElement = container.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    // Set canvas dimensions based on SVG viewBox or width/height
    const width = svgElement.getAttribute("width") || svgElement.clientWidth || 500;
    const height = svgElement.getAttribute("height") || svgElement.clientHeight || 500;
    canvas.width = Number(width) * 4; // 4x scale for high-res PNG
    canvas.height = Number(height) * 4;
    
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      if (ctx) {
        ctx.scale(4, 4);
        ctx.drawImage(img, 0, 0);
        const pngUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = `${filename}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    };
    img.src = url;
  };

  const AssetCard = ({ title, variant, theme, size, bg }: any) => {
    const id = `${variant}-${theme}`;
    return (
      <div className="flex flex-col border border-border rounded-xl overflow-hidden bg-card shadow-sm">
        <div 
          id={id} 
          className={`flex-1 flex items-center justify-center p-12 ${bg}`}
          style={{ minHeight: "240px" }}
        >
          <Logo variant={variant} theme={theme} size={size} />
        </div>
        <div className="border-t border-border p-4 bg-muted/30 flex items-center justify-between">
          <div className="text-sm font-medium text-foreground">{title}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleDownloadSVG(id, title.replace(/ /g, '-').toLowerCase())}>
              <Download className="w-4 h-4 mr-2" />
              SVG
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleDownloadPNG(id, title.replace(/ /g, '-').toLowerCase())}>
              <Download className="w-4 h-4 mr-2" />
              PNG
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12 lg:py-24">
      <div className="space-y-6 max-w-[720px] mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Brand Identity Portal</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the PlotHub design system. Download pixel-perfect, mathematically constructed SVGs and PNGs directly from this dashboard.
        </p>
      </div>

      <div className="space-y-16">
        {/* Core Symbols */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-4">1. The Symbol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AssetCard title="Primary Symbol" variant="symbol" theme="primary" size={96} bg="bg-white" />
            <AssetCard title="White Symbol" variant="symbol" theme="white" size={96} bg="bg-[#173A2E]" />
            <AssetCard title="Monochrome Dark" variant="symbol" theme="monochrome-dark" size={96} bg="bg-[#FAFAFA]" />
            <AssetCard title="Grayscale Symbol" variant="symbol" theme="grayscale" size={96} bg="bg-[#F5F7F6]" />
            <AssetCard title="Black Symbol" variant="symbol" theme="black" size={96} bg="bg-white" />
          </div>
        </div>

        {/* Wordmarks */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-4">2. The Wordmark</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AssetCard title="Primary Wordmark" variant="wordmark" theme="primary" size={48} bg="bg-white" />
            <AssetCard title="White Wordmark" variant="wordmark" theme="white" size={48} bg="bg-[#1F4D3D]" />
          </div>
        </div>

        {/* Lockups */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-4">3. Primary Lockups</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AssetCard title="Horizontal Lockup" variant="horizontal" theme="primary" size={64} bg="bg-[#FAFAFA]" />
            <AssetCard title="Stacked Lockup" variant="stacked" theme="primary" size={64} bg="bg-white" />
          </div>
        </div>

        {/* Theme Lockups */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-4">4. Theme Lockups (Horizontal)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AssetCard title="White Lockup" variant="horizontal" theme="white" size={64} bg="bg-[#173A2E]" />
            <AssetCard title="Monochrome Dark Lockup" variant="horizontal" theme="monochrome-dark" size={64} bg="bg-[#FAFAFA]" />
            <AssetCard title="Grayscale Lockup" variant="horizontal" theme="grayscale" size={64} bg="bg-[#F5F7F6]" />
            <AssetCard title="Black Lockup" variant="horizontal" theme="black" size={64} bg="bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
