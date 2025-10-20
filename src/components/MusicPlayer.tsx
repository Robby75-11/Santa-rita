// ✅ MusicPlayer.tsx
import React, { useRef, useEffect } from "react";

interface MusicPlayerProps {
  audioSrc: string;
  isPlaying: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioSrc, isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.muted = false;

    if (isPlaying) {
      audio.play().catch((err) => console.warn("Play bloccato:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={audioSrc} autoPlay muted />;
};

export default MusicPlayer;
