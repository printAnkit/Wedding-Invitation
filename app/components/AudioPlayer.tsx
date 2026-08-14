"use client";

import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Scroll to top on every page load / refresh
    window.scrollTo({ top: 0, behavior: "instant" });

    audio.volume = 0.5;
    audio.loop = true;

    // Try silent autoplay (works on desktop/laptop)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStarted(true);
        })
        .catch(() => {
          // Autoplay blocked (mobile) — wait for button tap
          setHasStarted(false);
        });
    }

    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStarted) {
      // First tap on mobile: start audio (this IS a direct user gesture)
      audio
        .play()
        .then(() => {
          setHasStarted(true);
          setIsMuted(false);
        })
        .catch(() => {});
      return;
    }

    // Already started — toggle mute
    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const isEffectivelyMuted = isMuted || !hasStarted;

  return (
    <>
      {/* preload="auto" for fast start; muted initially helps autoplay on some browsers */}
      <audio ref={audioRef} src="/song.mp3" preload="auto" playsInline />

      {/* Pulse ring — visible only before user starts the music */}
      {!hasStarted && visible && (
        <span
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9998,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(139, 106, 74, 0.35)",
            animation: "pulseRing 1.6s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      )}

      <button
        id="audio-toggle-btn"
        onClick={handleButtonClick}
        aria-label={
          !hasStarted
            ? "Play background music"
            : isMuted
              ? "Unmute background music"
              : "Mute background music"
        }
        title={!hasStarted ? "Tap to play music" : isMuted ? "Unmute" : "Mute"}
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
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 1px rgba(255,255,255,0.35)",
          transition: "opacity 0.6s ease, transform 0.2s ease, background 0.2s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255, 255, 255, 0.3)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255, 255, 255, 0.18)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        {isEffectivelyMuted ? (
          hasStarted ? (
            <MutedIcon />
          ) : (
            <PlayMusicIcon />
          )
        ) : (
          <SpeakerIcon />
        )}
      </button>

      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.9); opacity: 0;   }
          100% { transform: scale(1.9); opacity: 0;   }
        }
        @keyframes waveAnim1 {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1;    }
        }
        @keyframes waveAnim2 {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.7; }
        }
      `}</style>
    </>
  );
}

// Icon: music note — shown when audio not yet started (mobile)
function PlayMusicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#8b6a4a"
    >
      <path d="M9 18V6l12-2v12" stroke="#8b6a4a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

// Icon: animated speaker waves
function SpeakerIcon() {
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
      <path
        d="M15.54 8.46a5 5 0 0 1 0 7.07"
        style={{ animation: "waveAnim1 1.4s ease-in-out infinite" }}
      />
      <path
        d="M19.07 4.93a10 10 0 0 1 0 14.14"
        style={{ animation: "waveAnim2 1.4s ease-in-out infinite 0.2s" }}
      />
    </svg>
  );
}

// Icon: muted (speaker with X)
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
