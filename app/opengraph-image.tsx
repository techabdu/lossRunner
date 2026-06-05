import { ImageResponse } from "next/og";

export const alt = "LossRunner — stop chasing carriers for loss runs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#0071e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32">
              <path
                d="M9 16.5l4.5 4.5L23 11"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#6e6e73",
              letterSpacing: "0.08em",
            }}
          >
            LOSSRUNNER · BY HAQ
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "78px",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              maxWidth: "920px",
            }}
          >
            Stop chasing carriers for loss runs.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#515154",
              marginTop: "28px",
              maxWidth: "820px",
              lineHeight: 1.35,
            }}
          >
            An agent that runs the whole loss-run errand — request to filed
            report.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: "8px",
            width: "120px",
            background: "#0071e3",
            borderRadius: "4px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
