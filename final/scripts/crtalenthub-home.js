//footer date and time
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;




  // menu button for small screen
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });

// List of jobs
const jobs = [
    {
      title: 'Data Analyst',
      company: 'Importadora M',
      location: 'Heredia',
      salary: '$1000 - $2000'
    },
    {
      title: 'Finance Manager',
      company: 'Fabrica X',
      location: 'Cartago',
      salary: '$3000 - $3500'
    },
    {
      title: 'Full Stack Developer II',
      company: 'WebWorks Co.',
      location: 'Remote',
      salary: '$4000 - $5000'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Creative Hub',
      location: 'Alajuela',
      salary: '$4000 - $5000'
    }
  ];
  
  // Function to display jobs
  function displayJobs() {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '';
  
    jobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item');
  
      jobItem.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-company">${job.company}</div>
        <div class="job-location">${job.location}</div>
        <div class="job-salary">${job.salary}</div>
      `;
  
      jobListings.appendChild(jobItem);
    });
  }
  
  // Display jobs on page load
  document.addEventListener('DOMContentLoaded', displayJobs);



