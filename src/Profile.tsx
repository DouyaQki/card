import placeholder from "./assets/placeholder.jpg";

const STYLE_PROFILE_SECTION =
  "text-[#b8bcc3] flex flex-col justify-center items-center gap-1";
const STYLE_CONTAINER_DIV = "flex flex-col justify-center items-center";
const STYLE_IMG = "rounded-full h-32 md:h-40 select-none";
// img h-32

function Profile() {
  return (
    <section className={STYLE_PROFILE_SECTION}>
      <div className={STYLE_CONTAINER_DIV}>
        <img src={placeholder} alt="profile" className={STYLE_IMG} />
        <h2 className="my-1">Qki (クキ)</h2>
        <p>Editor & Front End Developer</p>
      </div>
      <p>Contact: qkimediaworks@gmail.com</p>
    </section>
  );
}

export default Profile;
