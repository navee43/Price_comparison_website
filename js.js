// Animate Boxes on Mouse Move
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.box');
  const productBoxes = document.querySelectorAll('.product_box');

  function add3DRotationEffect(items) {
    items.forEach(item => {
      item.addEventListener('mousemove', e => {
        const rect = item.getBoundingClientRect();
        const x = e.x - rect.left;
        const y = e.y - rect.top;
        const percentX = (x / item.offsetWidth) * 100;
        const percentY = (y / item.offsetHeight) * 100;

        item.style.setProperty('--rX', 0.5 * (50 - percentY) + 'deg');
        item.style.setProperty('--rY', 0.5 * (50 - percentX) + 'deg');
      });

      item.addEventListener('mouseout', () => {
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
      });
    });
  }

  add3DRotationEffect(boxes);
  add3DRotationEffect(productBoxes);
});

// Focus Search Bar Function
function focusSearchBar() {
  const searchBar = document.querySelector(".search");
  if (searchBar) {
    searchBar.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => searchBar.focus(), 1000);
  }
}

// Loading Spinner Control
window.addEventListener('load', function () {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) spinner.style.display = 'none';
});

window.addEventListener('beforeunload', function () {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) spinner.style.display = 'flex';
});

// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
    });

    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Search Input Enter Key Functionality
document.addEventListener("DOMContentLoaded", function () {
 
  const input = document.querySelector('.search');

  if (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        fetchData();
        event.preventDefault();
        fetchShoppingData(input.value);
      }
    });

    // If you have a search icon that calls fetchShoppingData too
    const searchImg = document.getElementById('search_img');
    if (searchImg) {
      searchImg.onclick = () => fetchShoppingData(input.value);
    }
  }
});

// Your search function
// function fetchShoppingData(query) {
//   console.log("Searching for:", query);
//   // TODO: Add actual fetch or filter logic
// }


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
async function fetchData() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block'; // Show spinner

  try {
    const response = await fetch('https://your-api-endpoint.com/data');
    const data = await response.json();

    // Process the data here
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    spinner.style.display = 'none'; // Hide spinner
  }
}
