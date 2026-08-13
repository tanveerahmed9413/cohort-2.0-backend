import {
  FilesetResolver,
  FaceLandmarker,
  FaceDetector,
} from "@mediapipe/tasks-vision";

export const init = async ({ landmarkerRef, videoRef, streamRef }) => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
  );
  landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });
  streamRef = await navigator.mediaDevices.getUserMedia({ video: true });
  videoRef.current.srcObject = streamRef;
  await videoRef.current.play();
  // detect();
};
export const detect = ({
  landmarkerRef,
  videoRef,
  setExpression,
  onMoodDetected,
}) => {
  if (!landmarkerRef.current || !videoRef.current) return;

  const results = landmarkerRef.current.detectForVideo(
    videoRef.current,
    performance.now(),
  );

  if (results.faceBlendshapes?.length > 0) {
    const blendshapes = results.faceBlendshapes[0].categories;
    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;

    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");
    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");
    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");

    let currentExpression = "neutral";
    let mood = "neutral";

    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "happy";
      mood = "happy";
    } else if (jawOpen > 0.2 && browUp > 0.2) {
      currentExpression = "surprised";
      mood = "surprised";
    } else if (frownLeft > 0.01 && frownRight > 0.01) {
      currentExpression = "sad";
      mood = "sad";
    }

    setExpression(currentExpression);
    console.log(
      "[detect] currentExpression:",
      currentExpression,
      "mood:",
      mood,
      "onMoodDetected exists?",
      !!onMoodDetected,
    );
    if (onMoodDetected) {
      onMoodDetected(mood);
    }
  }
};
