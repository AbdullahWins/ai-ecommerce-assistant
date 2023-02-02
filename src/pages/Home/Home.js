import React from "react";
import { Link } from "react-router-dom";
import ai from "../../assets/ai.png";
import Footer from "../../components/Shared/Footer";

const Home = () => {
  return (
    <div className="bg-white">
      <h1 className="text-xl font-bold text-center bg-gray-400 p-4">
        <span>
          <i className="fa-solid fa-square-rss"></i>
        </span>
        --Assistant Dashboard--
        <span>
          <i className="fa-solid fa-square-rss"></i>
        </span>
      </h1>
      <section className="flex flex-col items-center justify-center gap-6 p-4 pb-8 md:flex-row">
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
      </section>
    </div>
  );
};

export default Home;
