// function openProject(url) {
//   window.open(url, "_blank"); // Opens project in new tab
// }


const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const showingCount = document.getElementById("showingCount");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

// Total project counter
document.getElementById("totalProjects").textContent = cards.length;

// Dynamic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Search and filter functionality
function filterProjects() {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    cards.forEach(card => {

        const projectName = card.dataset.name.toLowerCase();
        const projectText = card.textContent.toLowerCase();
        const projectCategory = card.dataset.category;

        const matchesSearch =
            projectName.includes(searchValue) ||
            projectText.includes(searchValue);

        const matchesFilter =
            currentFilter === "all" ||
            projectCategory === currentFilter;

        if (matchesSearch && matchesFilter) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    showingCount.textContent = visibleCount;

    // Show message if no projects match
    noResults.style.display =
        visibleCount === 0 ? "block" : "none";
}

// Search as user types
searchInput.addEventListener("input", filterProjects);

// Category filter buttons
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterProjects();
    });
});
