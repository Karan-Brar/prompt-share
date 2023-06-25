import PromptCard from "./PromptCard"
import anime from "animejs";
import { useEffect } from "react";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

  useEffect(() => {
        anime({
          targets: ".head_text, .desc",
          translateY: [-20, 0],
          opacity: [0, 1],
          duration: 1500,
          easing: "easeOutExpo",
          delay: anime.stagger(200),
        });
      }, []);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete & handleDelete(post)}  
          />
        ))}
      </div>
    </section>
  );
}

export default Profile