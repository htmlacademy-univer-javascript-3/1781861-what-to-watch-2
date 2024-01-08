import { useEffect, useRef } from 'react';

interface IVideoPlayerProps {
	postImg: string;
	link: string;
	isMuted: boolean;
}

export default function VideoPlayer({ postImg, link, isMuted }: IVideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 1000);
  }, []);

  return (
    <video className="player__video" ref={videoRef} src={link} poster={postImg} muted={isMuted} loop>
      <source src={link} type="video/mp4" />
    </video>
  );
}
