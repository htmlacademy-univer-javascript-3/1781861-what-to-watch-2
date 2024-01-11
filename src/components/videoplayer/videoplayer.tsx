import { useEffect, useRef } from 'react';
import { DEFAULT_AUTOPLAY_TIME } from '../../const/time';

interface IVideoPlayerProps {
	posterImage: string;
	link: string;
	isMuted: boolean;
}

export default function VideoPlayer({ posterImage, link, isMuted }: IVideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (!videoRef.current) {
        return;
      }

      setTimeout(() => {
        videoRef.current?.play();
      }, DEFAULT_AUTOPLAY_TIME);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <video className="player__video" ref={videoRef} src={link} poster={posterImage} muted={isMuted} loop>
      <source src={link} type="video/mp4" />
    </video>
  );
}
