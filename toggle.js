const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

if (bar) {
  bar.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelector('a[href="#about-section"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  const target = document.querySelector('#about-section');
  const offset = 100; // Adjust this value to match your header height
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' // Smooth scrolling
  });
});
document.querySelector('a[href="#approved-jobs"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  const target = document.querySelector("#approved-jobs");
  const offset = 100; // Adjust this value to match your header height
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' // Smooth scrolling
  });
  document.querySelector('a[href="#submit-postings"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#submit-postings");
    const offset = 100; // Adjust this value to match your header height
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
  });

  document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#contact");
    const offset = 100; // Adjust this value to match your header height
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
  });

  document.querySelector('a[href="#access-code-section"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#access-code-section");
    const offset = 100; // Adjust this value to match your header height
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
  });





});

function openForm(jobTitle) {
  // Display the modal
  document.getElementById('application-form-modal').style.display = 'block';
  // Set the job title dynamically
  document.getElementById('job-title').textContent = jobTitle;
}

function closeForm() {
  // Hide the modal
  document.getElementById('application-form-modal').style.display = 'none';
}

document.getElementById('search-button').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Get the search input value
  const query = document.getElementById('search-input').value.toLowerCase();

  // Define search keywords and their corresponding sections or pages
  const searchMap = {
    'part-time': '#approved-jobs', // Navigate to the Approved Jobs section
    'internships': '#approved-jobs',
    'volunteer': '#approved-jobs',
    'retail associate': '#approved-jobs',
    'sales associate': '#approved-jobs',
    'server': '#approved-jobs',
    'crew member': '#approved-jobs',
    'marketing intern': '#approved-jobs',
    'aquatic intern': '#approved-jobs',
    'administrative intern': '#approved-jobs',
    'safety town volunteer': '#approved-jobs',

    'five guys': '#approved-jobs', // Specific company
    'mosaic': '#approved-jobs', // Specific company
    'contact': '#contact', // Navigate to the Contact section
    'about': '#about-section', // Navigate to the About section
    'home': '#', // Navigate to the top of the page
  };

  // Check if the query matches any keywords
  const target = Object.keys(searchMap).find(key => query.includes(key));

  if (target) {
    // Navigate to the corresponding section or page
    const targetSection = searchMap[target];
    if (targetSection.startsWith('#')) {
      // Scroll to the section if it's an internal link
      const targetElement = document.querySelector(targetSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Redirect to the page if it's an external link
      window.location.href = targetSection;
    }
  } else {
    // Show an alert if no match is found
    alert('No results found. Please try searching for something else.');
  }
});

function approvePosting(jobTitle) {
  alert(`The job posting "${jobTitle}" has been approved.`);
  // Add logic here to remove the approved job from the list or mark it as approved
}

function rejectPosting(jobTitle) {
  alert(`The job posting "${jobTitle}" has been rejected.`);
  // Add logic here to remove the rejected job from the list or mark it as rejected
}

function scrollToAccessCode() {
  const accessCodeSection = document.getElementById("access-code-section");
  accessCodeSection.scrollIntoView({ behavior: "smooth" });
}