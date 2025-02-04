import { useState } from "react";
import { FaStar } from "react-icons/fa";


export default function StarRating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };


  return (
    <div className="flex flex-col items-center p-4 bg-slate-200 rounded-md shadow-2xl ">
          
      <div className="flex space-x-2">
        {stars.map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              size={30}
              className={`cursor-pointer transition-colors duration-300 ${
                (hoverValue || currentValue) >= starValue
                  ? "text-yellow-400"
                  : "text-gray-500"
              }`}
              onClick={() => handleClick(starValue)}
              onMouseOver={() => handleMouseOver(starValue)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <input
        type="text"
        className="mt-4 px-2 py-1 border rounded-md w-20 text-center text-lg"
        value={currentValue}
        readOnly
      />
    </div>
  );
}
