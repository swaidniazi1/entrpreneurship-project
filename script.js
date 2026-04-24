const skills = [
  "Accounting","Blogging","Coding","Cooking","Design",
  "English Speaking","Fitness","Graphic Design",
  "Marketing","Photography","Public Speaking",
  "Video Editing","Web Development"
];

function showSkills() {
  document.getElementById("skills").style.display = "block";
  renderSkills(skills);
  window.scrollTo(0, document.getElementById("skills").offsetTop);
}

function renderSkills(list) {
  const container = document.getElementById("skillsList");
  container.innerHTML = "";

  list.sort().forEach(skill => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = skill;
    container.appendChild(div);
  });
}

function filterSkills() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = skills.filter(s => s.toLowerCase().includes(query));
  renderSkills(filtered);
}

function filterByLetter(letter) {
  if(letter === "all") return renderSkills(skills);

  const filtered = skills.filter(s => s.startsWith(letter));
  renderSkills(filtered);
}
