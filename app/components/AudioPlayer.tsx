"use client";

import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    // Try to autoplay; browsers may block it until user interaction
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked — play on first user interaction
          const handleFirstInteraction = () => {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
          };
          document.addEventListener("click", handleFirstInteraction);
          document.addEventListener("touchstart", handleFirstInteraction);
        });
    }

    // Fade in the button after a short delay
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" preload="auto" />

      <button
        id="audio-toggle-btn"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        title={isMuted ? "Unmute" : "Mute"}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 1px rgba(255,255,255,0.3)",
          transition: "opacity 0.6s ease, transform 0.2s ease, background 0.2s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255, 255, 255, 0.28)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255, 255, 255, 0.15)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        {isMuted ? <MutedIcon /> : <SpeakerIcon isPlaying={isPlaying} />}
      </button>
    </>
  );
}

// Animated speaker icon (waves animate when playing)
function SpeakerIcon({ isPlaying }: { isPlaying: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b6a4a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Speaker body */}
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#8b6a4a" stroke="none" />
      {/* Wave 1 */}
      <path
        d="M15.54 8.46a5 5 0 0 1 0 7.07"
        style={{
          opacity: isPlaying ? 1 : 0.3,
          animation: isPlaying ? "waveAnim1 1.4s ease-in-out infinite" : "none",
        }}
      />
      {/* Wave 2 */}
      <path
        d="M19.07 4.93a10 10 0 0 1 0 14.14"
        style={{
          opacity: isPlaying ? 0.6 : 0.2,
          animation: isPlaying ? "waveAnim2 1.4s ease-in-out infinite 0.2s" : "none",
        }}
      />
      <style>{`
        @keyframes waveAnim1 {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes waveAnim2 {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </svg>
  );
}

// Muted (speaker with X) icon
function MutedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b6a4a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#8b6a4a" stroke="none" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
