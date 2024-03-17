import React from "react";
import { useEffect } from "react";

const createButton = (repoLink: string) => {
  const gitHubBoxLink = repoLink.replace("github.com", "githubbox.com");

  const button = document.createElement("a");
  button.href = gitHubBoxLink;
  button.target = "_blank";
  button.textContent = "Open in CodeSandBox";
  button.classList.add("open-sandbox-btn", "btn-sm", "btn");
  return button;
};

const getTextContent = (element: HTMLElement | null) =>
  element?.textContent?.trim() || "";

const AddButtonInRepo = ({ currentUrl }: { currentUrl: string }) => {
  useEffect(() => {
    const repoContainerComponent = document.getElementById(
      "repository-container-header"
    );
    const repoTitleComponent = document.getElementById("repo-title-component");

    const isPublic = getTextContent(
      repoContainerComponent ?? repoTitleComponent
    );

    if (isPublic) {
      const button = createButton(currentUrl);
      const ul = document
        .getElementById("repository-details-container")
        ?.querySelector("ul");
      ul?.firstChild && ul?.append(button, ul.firstChild);
    }
  }, []);

  return <></>;
};

const App = () => {
  const currentUrl = window.location.href;
  return <AddButtonInRepo currentUrl={currentUrl} />;
};

export default App;
