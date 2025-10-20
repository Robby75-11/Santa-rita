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

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={audioSrc} loop />;
};

export default MusicPlayer;
