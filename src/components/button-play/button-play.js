import { FaPlay } from "react-icons/fa6";

export default function PlayButton() {
  const handleClick = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div
      className="flex justify-center items-center absolute p-8 bg-secondary rounded-full text-primary"
      onClick={handleClick}
    >
      <FaPlay />
    </div>
  );
}
