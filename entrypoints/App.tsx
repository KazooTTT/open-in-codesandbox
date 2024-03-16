import React, { useEffect } from "react";

const AddGitHubBoxButton = () => {
  useEffect(() => {
    const repoUl = document.querySelector('ul[data-filterable-for="your-repos-filter"]');
    const repoElements = repoUl?.querySelectorAll('li.public');


    repoElements.forEach((repoElement) => {
    
      const repoLink = repoElement.querySelector("h3 a").getAttribute("href");
      console.log("%c Line:14 🥚 repoLink", "color:#4fff4B", repoLink);
      const gitHubBoxLink = `https://githubbox.com/${repoLink.slice(1)}`;

      const button = document.createElement("a");
      button.href = gitHubBoxLink;
      button.target = "_blank";
      button.textContent = "Open on Sandbox";
      button.classList.add("btn", "btn-sm", "mb-2");
      
      const starButtonContainer = repoElement.querySelector(
        "div.js-toggler-container.js-social-container.starring-container.d-flex"
      );
      console.log("%c Line:22 🍤 starButtonContainer", "color:#93c0a4", starButtonContainer);

      starButtonContainer?.appendChild(button, starButtonContainer);
    });
  }, []);

  return null;
};

export default AddGitHubBoxButton;
