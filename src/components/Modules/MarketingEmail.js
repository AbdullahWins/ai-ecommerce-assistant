import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const MarketingEmail = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt = "Write an engaging marketing email for";
    setIsLoading(true);
    processRequest(prompt, input);
  };
  return (
    <div className="flex flex-col h-screen justify-between gap-4 p-4">
      <section className="flex flex-col gap-4 mb-0 pb-0">
        <h1 className="text-xl font-bold text-center bg-gray-200 p-4">
          <span>
            <i className="fa-solid fa-bullhorn"></i>
          </span>
          --Marketing Email--
          <span>
            <i className="fa-solid fa-bullhorn"></i>
          </span>
        </h1>
        <hr />
        <div className="flex gap-2">
          <input
            className={`p-3 w-full rounded-sm border-solid border-2 border-gray-300 ${
              isLoading ? "hidden" : "flex"
            }`}
            placeholder="enter product summary"
            name="email-input"
            id="input"
          ></input>
          <button
            className={`btn rounded-sm  px-4 ${
              isLoading ? "bg-slate-700" : "bg-gray-400"
            }`}
            onClick={handleClick}
          >
            <p>
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
              {isLoading ? (
                <span> Generating Product Description </span>
              ) : (
                <span> Generate </span>
              )}
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
            </p>
          </button>
        </div>
        <div>
          <p className="font-bold text-xl text-center py-2">
            <i className="fa-solid fa-arrow-down"></i>
          </p>
        </div>
        <textarea
          className="p-2 rounded-md border-solid border-2 border-gray-300"
          placeholder=""
          defaultValue={output}
          cols="10"
          rows="10"
        ></textarea>
      </section>
    </div>
  );
};

export default MarketingEmail;