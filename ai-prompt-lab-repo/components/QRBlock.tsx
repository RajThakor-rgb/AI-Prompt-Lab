"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRBlockProps {
  url: string;
  size?: number;
  label?: string;
}

export function QRBlock({ url, size = 200, label }: QRBlockProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="bg-white rounded-2xl shadow-lg"
        style={{ padding: "16px", lineHeight: 0 }}
      >
        <QRCodeSVG
          value={url || "https://placeholder.example.com"}
          size={size}
          level="H"
          bgColor="#ffffff"
          fgColor="#000000"
        />
      </div>
      {label && (
        <p
          className="text-xs text-muted text-center"
          style={{ maxWidth: `${size + 32}px`, wordBreak: "break-all" }}
        >
          {label}
        </p>
      )}
    </div>
  );
}
