import React from "react";
const GithubLink = () => {
  const githubRepoLink = "https://github.com/nik875/axon-terminal";

  return (
    <div className="flex items-center py-8 bg-cat-night-button align-middle justify-center">
      <a
        href={githubRepoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3"
      >
        <img
          src={`../static/github-mark-white.svg`}
          alt="GitHub Logo"
          className="w-10 h-10 mb-2 hover:animate-pulse"
        />
      </a>
      <p className=" text-cat-white px-1">
        Currently in beta release. See documentation and instructions on{" "}
        <a
          href={githubRepoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline "
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default GithubLink;
