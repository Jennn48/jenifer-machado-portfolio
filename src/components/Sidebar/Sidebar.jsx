import Profile from "./Profile.jsx";
import ProfileLinks from "./ProfileLinks.jsx";
import Technologies from "./Technologies.jsx";
import Education from "./Education.jsx";

import "./style.css";

function Aside() {
  return (
    <aside className="col-12 col-lg-4 col-xl-4">
      <Profile />

      <ProfileLinks />

      <Technologies />

      <Education />
    </aside>
  );
}

export default Aside;
