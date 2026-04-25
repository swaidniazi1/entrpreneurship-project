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
  if (letter === "all") return renderSkills(skills);

  const filtered = skills.filter(s => s.startsWith(letter));
  renderSkills(filtered);
}

// Animated headline effect
const headlines = [
  "Connect & Grow with Skill Swap",
  "Learn New Skills Today",
  "Join Our Community",
  "Explore, Share, Succeed",
];

let headlineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const headlineElement = document.querySelector('.animated-headline');
  const currentText = headlines[headlineIndex];
  const displayedText = currentText.substring(0, charIndex);

  if (headlineElement) {
    headlineElement.textContent = displayedText;
  }

  if (!isDeleting && charIndex < currentText.length) {
    // Typing forward
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    charIndex--;
    setTimeout(type, 50);
  } else {
    // Pause before next
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else {
      isDeleting = false;
      headlineIndex = (headlineIndex + 1) % headlines.length;
      setTimeout(type, 500);
    }
  }
}

// Start the headline animation
type();
