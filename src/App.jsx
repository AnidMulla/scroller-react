import React from "react";
import Zygal_one from "./assets/images/zygal_one.jpg";
import Zygal_two from "./assets/images/zygal_two.jpg";
import Zygal_three from "./assets/images/zygal_three.jpg";
import ProfilePic from "./assets/images/profile.svg";

const App = () => {
  const avatars = [ProfilePic, ProfilePic, ProfilePic, ProfilePic];

  const images = [Zygal_one, Zygal_two, Zygal_three];

  return (
    <div className="flex flex-col items-center w-full h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-center overflow-x-auto mb-4 space-x-4">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-300"
            >
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-xs mx-auto h-96 overflow-y-auto no-scrollbar mt-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
