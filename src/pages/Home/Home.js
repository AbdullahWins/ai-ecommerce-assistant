import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ai from "../../assets/ai.png";
import { AiContext } from "../../contexts/AiContext";

const Home = () => {
  const { setOutput } = useContext(AiContext);

  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  return (
    <div className="bg-white">
      <h1 className="text-xl font-bold text-center bg-gray-400 p-4">
        <span>
          <i className="fa-solid fa-seedling fa-beat"></i>
        </span>
        --Assistant Dashboard--
        <span>
          <i className="fa-solid fa-seedling fa-beat"></i>
        </span>
      </h1>
      <section className="flex flex-col items-center justify-center gap-6 p-4 pb-8 md:flex-row">
        <button onClick={resetOutput}>
          <Link to="/pd">
            <div className="card bg-base-100 shadow-xl scale-95 hover:scale-100">
              <figure>
                <img src={ai} alt="pd" />
              </figure>
              <div className="card-body h-44">
                <h2 className="text-lg">Product Description</h2>
                <p className="text-sm text-gray-500">
                  Generates SEO friendly product descriptions!
                </p>
              </div>
            </div>
          </Link>
        </button>
        <button onClick={resetOutput}>
          <Link to="/bp">
            <div className="card bg-base-100 shadow-xl scale-95 hover:scale-100">
              <figure>
                <img src={ai} alt="bp" />
              </figure>
              <div className="card-body h-44">
                <h2 className="text-lg">Blog Post</h2>
                <p className="text-sm text-gray-500">
                  Generates SEO friendly and engaging blog posts!
                </p>
              </div>
            </div>
          </Link>
        </button>
        <button onClick={resetOutput}>
          <Link to="/me">
            <div className="card bg-base-100 shadow-xl scale-95 hover:scale-100">
              <figure>
                <img src={ai} alt="me" />
              </figure>
              <div className="card-body h-44">
                <h2 className="text-lg">Marketing E-Mail</h2>
                <p className="text-sm text-gray-500">
                  Generates Engaging marketing emails!
                </p>
              </div>
            </div>
          </Link>
        </button>
      </section>
    </div>
  );
};

export default Home;
