'use client'

import Feed from "@components/Feed";
import { useEffect } from "react";
import anime from "animejs";

const Home = () => {
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
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptShare is an open-source AI prompting tool for 
        the modern world to discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home