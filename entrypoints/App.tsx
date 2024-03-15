import React, { useEffect } from "react";

const AddGitHubBoxButton = () => {
  useEffect(() => {
    const repoElements = document.querySelectorAll(
      "li.col-12.d-flex.flex-justify-between.width-full.py-4.border-bottom.color-border-muted.public.fork"
    );

    repoElements.forEach((repoElement) => {
      const starButtonContainer = repoElement.querySelector(
        ".col-2.d-flex.flex-column.flex-justify-around.flex-items-end.ml-3"
      );
      const repoLink = repoElement.querySelector("h3 a").getAttribute("href");
      console.log("%c Line:14 🥚 repoLink", "color:#4fff4B", repoLink);
      const gitHubBoxLink = `https://githubbox.com/${repoLink.slice(1)}`;

      const button = document.createElement("a");
      button.href = gitHubBoxLink;
      button.target = "_blank";
      button.textContent = "Open on Sandbox";
      button.classList.add("btn", "btn-sm", "mb-2");

      starButtonContainer.insertBefore(button, starButtonContainer.firstChild);
    });
  }, []);

  return null;
};

export default AddGitHubBoxButton;
