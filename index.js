function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills(skills) {
  var ul = document.querySelector("#skills ul");

  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //   return -1;
    // }

    // if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //   return 1;
    // }

    // return 0;
  });

  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements} - ${skills[i].favorite}</li>`;
  }
}

function loadSkills() {
  fetch("skills.json").then(function(response){
    return response.json();
  }).then(function(skills){
    console.warn("am primit ceva ori nu?", skills)
    displaySkills(skills);
  });
}

loadSkills();
