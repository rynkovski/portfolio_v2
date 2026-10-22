import { ImageResponse } from "next/og";

export const alt = "Karol Rynkowski, Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 96,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>
        Karol Rynkowski
      </div>
      <div style={{ marginTop: 12, fontSize: 40, color: "#a1a1a1" }}>
        Software Developer
      </div>
    </div>,
    size,
  );
}
