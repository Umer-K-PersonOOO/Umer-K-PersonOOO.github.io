// import React from "react";

// const GitHubLink: React.FC = () => {
//   return (
//     <div className="flex bg-slate-300 py-6">
//       {/* <div className="flex-1 bg-slate-300 py-6 shrink">
//         <div className="flex justify-center">
//           <img
//             src={`../static/nci_logo.png`}
//             alt="Logo"
//             className="object-scale-down h-20"
//           />
//         </div>
//       </div>
//       <div className="flex-none rounded bg-slate-600 w-1 my-4"></div> */}
//       <a
//         className={`inline-block`}
//         href={"https://github.com/nik875/axon-terminal"}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`text-blue-500 hover:text-blue-700`}
//         >
//           <path d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2" />
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default GitHubLink;
import React from "react";

const GithubLink = () => {
  const githubRepoLink = "https://github.com/nik875/axon-terminal";

  return (
    <div className="flex items-center py-4 bg-cat-night-button align-middle justify-center">
      <a href={githubRepoLink} target="_blank" rel="noopener noreferrer">
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
