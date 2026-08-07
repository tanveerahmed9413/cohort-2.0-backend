import { useEffect, useRef, useState } from "react";
import { init, detect } from "../utils/utils";

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  // Initial text setting
  const [expression, setExpression] = useState("Click button to scan");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Model aur camera initialize karein
    init({ landmarkerRef, videoRef, streamRef })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("Initialization error:", err);
        setExpression("Model ya Camera load nahi hua! ⚠️");
      });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        fontFamily: "sans-serif"
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "500px",
          maxWidth: "100%",
          borderRadius: "16px",
          transform: "scaleX(-1)", // Mirror mode setting
          background: "#1f2937"
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0",
            textAlign: "center"
          }}
        >
          {isLoading ? "Loading Model assets..." : expression}
        </h2>

        <button
          disabled={isLoading}
          onClick={() => {
            // Button click par detect function fire hoga
            detect({ landmarkerRef, videoRef, setExpression });
          }}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
            background: isLoading ? "#4b5563" : "#3b82f6",
            border: "none",
            borderRadius: "10px",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "background 0.2s",
          }}
        >
          {isLoading ? "Please Wait..." : "Detect Expression"}
        </button>
      </div>
    </div>
  );
}
