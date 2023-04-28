const inputToggle = document.querySelector("input");

const themes = {
  "t-dark": "t-light",
  "t-light": "t-dark",
};

function changeTheme(theme) {
  var githubIcon = document.getElementById("github-icon");
  var linkedinIcon = document.getElementById("linkedin-icon");
  var instagramIcon = document.getElementById("instagram-icon");
  var twitchIcon = document.getElementById("twitch-icon");
  var downloadIcon = document.getElementById("download-icon");
  if (theme === "t-dark") {
    githubIcon.src = "./assets/github.png";
    linkedinIcon.src = "./assets/linkedin.png";
    instagramIcon.src = "./assets/instagram.png";
    twitchIcon.src = "./assets/twitch.png";
    downloadIcon.src = "./assets/download.png";
  } else {
    githubIcon.src = "./assets/github-blue.png";
    linkedinIcon.src = "./assets/linkedin-blue.png";
    instagramIcon.src = "./assets/instagram-blue.png";
    twitchIcon.src = "./assets/twitch-blue.png";
    downloadIcon.src = "./assets/download-blue.png";
  }
}

inputToggle.addEventListener("click", (event) => {
  const currentTheme = document.body.dataset.theme;
  document.body.setAttribute("data-theme", themes[currentTheme] || "t-light");
  changeTheme(document.body.dataset.theme);
  localStorage.setItem("theme", nextTheme); // Salva o valor do tema selecionado no localStorage
});
