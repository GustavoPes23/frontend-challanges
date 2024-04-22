import "./App.css";

import Avatar from "../public/images/avatar-jessica.jpeg";
import { motion } from "framer-motion";

const buttons = [
  {
    name: "Github",
    url: "https://github.com/jessicarandall",
  },
  {
    name: "Front end Mentor",
    url: "https://www.frontendmentor.io/profile/jessicarandall",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/jessicarandall/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jessicarandall",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jessicarandall/",
  },
];

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="relative flex flex-col card-profile shadow-md bg-clip-border rounded-xl w-96 py-8">
          <div className="flex justify-center items-center">
            <img
              src={Avatar}
              alt="card-image"
              className="rounded-full w-28 h-28"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Jéssica Randall
            </h5>
            <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-inherit subtitle-profile">
              London, United Kingdom
            </p>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit py-6">
              "Front-end Developer and avid reader."
            </p>
          </div>
          <div className="grid px-6 gap-4">
            {buttons.map(({ name }) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={name}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 rounded-lg text-white shadow-md  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none button-profile"
                type="button"
              >
                {name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
