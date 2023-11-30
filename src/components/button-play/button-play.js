import { FaPlay } from "react-icons/fa6";
import YouTube from "react-youtube";

export default function PlayButton() {
  const handleClick = () => {
    return (
      <div>
        <YouTube videoId="OEhw6GqQDts" />
      </div>
    );
  };

  return (
    <div
      className="flex justify-center text-center items-center p-4 bg-secondary rounded-full text-primary"
      onClick={handleClick}
    >
      <FaPlay />
    </div>
  );
}
