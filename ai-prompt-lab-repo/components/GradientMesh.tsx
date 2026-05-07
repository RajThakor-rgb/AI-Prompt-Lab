"use client";

export function GradientMesh() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 15% 40%, rgba(124, 58, 237, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 85% 65%, rgba(6, 182, 212, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 50% 100%, rgba(124, 58, 237, 0.04) 0%, transparent 50%),
          #0A0A0F
        `,
        backgroundSize: "200% 200%",
        animation: "mesh-shift 20s ease infinite",
      }}
    />
  );
}
