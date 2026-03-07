import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0f172a",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 80, fontWeight: 700 }}>
                    Movilabs
                </div>

                <div style={{ fontSize: 36, marginTop: 20, opacity: 0.8 }}>
                    AI-powered mobile apps
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}