import { FaPlay } from "react-icons/fa6";
import YouTube from "react-youtube";

export default function PlayButton() {
  return (
    <div className="flex justify-center text-center items-center p-4 bg-secondary rounded-full text-primary">
      <FaPlay />
    </div>
  );
}
