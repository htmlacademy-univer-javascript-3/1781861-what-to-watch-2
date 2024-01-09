import { useEffect, useRef } from 'react';

interface IVideoPlayerProps {
	posterImage: string;
	link: string;
	isMuted: boolean;
}

export default function VideoPlayer({ posterImage, link, isMuted }: IVideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 1000);
  }, []);

  return (
    <video className="player__video" ref={videoRef} src={link} poster={posterImage} muted={isMuted} loop>
      <source src={link} type="video/mp4" />
    </video>
  );
}
