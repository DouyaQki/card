import placeholder from "./assets/placeholder.jpg";

function Profile() {
  return (
    <section>
      <div>
        <img src={placeholder} alt="profile" className="rounded-full h-32" />
        <p>Editor & Front End Developer</p>
      </div>
      <p>Contact: qkimediaworks@gmail.com</p>
    </section>
  );
}

export default Profile;
