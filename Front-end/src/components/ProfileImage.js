import { useState } from "react";

const ProfileImage = ({ onFileSelect, profile }) => {
  const [profileImage, setProfileImage] = useState(profile);
  console.log(profileImage);
  const onChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    onFileSelect(file);
  };
  return (
    <div className="circular-image">
      <div className="image-display">
        <a>
          <img src={profileImage} alt="no image found!" />
        </a>
      </div>
      <div className="image-input">
        <input
          type="file"
          id="profile-image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onChange}
        />
        <label htmlFor="profile-image" className="btn" id="geLabel">
          Set Profile Image
        </label>
      </div>
    </div>
  );
};

export default ProfileImage;
