
//footer date and time
let currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;



//job list
document.addEventListener('DOMContentLoaded', () => {
    const jobs = [
        {
            title: 'Data Scientist',
            company: 'Insightful Analytics',
            location: 'Heredia, Costa Rica',
            salary: '$4000',
            description: `Join Insightful Analytics as a Data Scientist and unlock the power of data to drive business insights and innovation. As part of our team, you'll leverage advanced statistical and machine learning techniques to analyze large datasets, develop predictive models, and uncover actionable insights that guide strategic decision-making. If you're passionate about data and thrive in a collaborative environment, we want to hear from you!`,
            responsibilities: `1. Analyze complex datasets to identify trends, patterns, and correlations.
            2. Develop predictive models and algorithms to forecast business outcomes.
            3. Collaborate with cross-functional teams to define data-driven strategies and solutions.
            4. Communicate findings and recommendations to stakeholders through reports and presentations.`,
            qualifications: `1. Master's or Ph.D. in Data Science, Statistics, Computer Science, or related field.
            2. 5+ years of experience in data analysis and predictive modeling.
            3. Proficiency in programming languages such as Python, R, or SQL.
            4. Strong understanding of machine learning algorithms and techniques.`,
            education: 'Master’s or Ph.D. in Data Science, Statistics, Computer Science, or related field',
            date: '2024-05-10'
        },
        {
            title: 'Marketing Manager',
            company: 'Digital Innovations Ltd.',
            location: 'San José, Costa Rica',
            salary: '$5000',
            description: `Digital Innovations Ltd. is seeking a dynamic and results-driven Marketing Manager to lead our marketing initiatives and drive business growth. In this role, you'll develop and execute comprehensive marketing strategies, manage advertising campaigns, and oversee the creation of engaging content. With your strategic vision and leadership skills, you'll inspire and motivate your team to achieve our marketing objectives.`,
            responsibilities: `1. Develop and implement strategic marketing plans to achieve business objectives.
            2. Manage digital marketing channels, including social media, email, and search engine marketing.
            3. Oversee the creation of marketing materials, such as brochures, presentations, and advertisements.
            4. Analyze marketing data and metrics to measure performance and optimize campaigns.`,
            qualifications: `1. Bachelor's degree in Marketing, Business Administration, or related field.
            2. 7+ years of experience in marketing, with at least 3 years in a managerial role.
            3. Proven track record of developing and executing successful marketing campaigns.
            4. Strong leadership, communication, and project management skills.`,
            education: 'Bachelor’s degree in Marketing, Business Administration, or related field',
            date: '2024-05-15'
        },
        {
            title: 'UX/UI Designer',
            company: 'Creative Design Studio',
            location: 'San José, Costa Rica',
            salary: '$3000',
            description: `Creative Design Studio is looking for a talented UX/UI Designer to join our team and create exceptional user experiences. In this role, you'll collaborate with product managers, developers, and other stakeholders to design intuitive and visually appealing interfaces for web and mobile applications. If you have a passion for design and a keen eye for detail, we want to hear from you!`,
            responsibilities: `1. Conduct user research and gather insights to inform design decisions.
            2. Create wireframes, prototypes, and mockups to illustrate design concepts.
            3. Collaborate with cross-functional teams to translate requirements into user-centric designs.
            4. Iterate on designs based on feedback and user testing.`,
            qualifications: `1. Bachelor's degree in Design, Human-Computer Interaction, or related field.
            2. 3+ years of experience in UX/UI design for web and mobile applications.
            3. Proficiency in design tools such as Sketch, Adobe XD, or Figma.
            4. Strong understanding of usability principles and best practices.`,
            education: 'Bachelor’s degree in Design, Human-Computer Interaction, or related field',
            date: '2024-05-20'
        },
        {
            title: 'Financial Analyst',
            company: 'Global Investments LLC',
            location: 'San José, Costa Rica',
            salary: '$1500-2500',
            description: `Global Investments LLC is seeking a skilled Financial Analyst to support our investment decisions and financial planning processes. In this role, you'll analyze financial data, prepare forecasts and reports, and evaluate investment opportunities. With your analytical mindset and attention to detail, you'll provide valuable insights that drive informed business decisions.`,
            responsibilities: `1. Analyze financial statements and performance metrics to assess the financial health of companies.
            2. Develop financial models and forecasts to support strategic planning and decision-making.
            3. Evaluate investment opportunities and conduct due diligence on potential acquisitions or investments.
            4. Prepare presentations and reports for senior management and external stakeholders.`,
            qualifications: `1. Bachelor's degree in Finance, Accounting, Economics, or related field.
            2. 3+ years of experience in financial analysis or investment banking.
            3. Strong analytical skills and proficiency in financial modeling.
            4. Excellent communication and presentation abilities.`,
            education: 'Bachelor’s degree in Finance, Accounting, Economics, or related field',
            date: '2024-05-25'
        },
        {
            title: 'Human Resources Manager',
            company: 'PeopleFirst Inc.',
            location: 'San José, Costa Rica',
            salary: '$2500-$3000',
            description: `PeopleFirst Inc. is looking for an experienced Human Resources Manager to oversee all aspects of our HR operations. In this role, you'll lead recruitment efforts, develop HR policies and procedures, and manage employee relations. If you're a strategic thinker with a passion for building and supporting high-performing teams, we'd love to hear from you!`,
            responsibilities: `1. Lead recruitment and onboarding processes to attract and retain top talent.
            2. Develop and implement HR policies and procedures to ensure compliance and foster a positive work environment.
            3. Manage employee relations, including performance management, conflict resolution, and disciplinary actions.
            4. Provide coaching and guidance to managers and employees on HR-related matters.`,
            qualifications: `1. Bachelor's degree in Human Resources, Business Administration, or related field.
            2. 5+ years of experience in HR management, with a focus on recruitment and employee relations.
            3. Strong understanding of labor laws and regulations.
            4. Excellent leadership, communication, and interpersonal skills.`,
            education: 'Bachelor’s degree in Human Resources, Business Administration, or related field',
            date: '2024-05-30'
        },
        {
            title: 'Data Scientist',
            company: 'Insightful Analytics',
            location: 'Heredia, Costa Rica',
            salary: '$4000',
            description: `Join Insightful Analytics as a Data Scientist and unlock the power of data to drive business insights and innovation. As part of our team, you'll leverage advanced statistical and machine learning techniques to analyze large datasets, develop predictive models, and uncover actionable insights that guide strategic decision-making. If you're passionate about data and thrive in a collaborative environment, we want to hear from you!`,
            responsibilities: `1. Analyze complex datasets to identify trends, patterns, and correlations.
            2. Develop predictive models and algorithms to forecast business outcomes.
            3. Collaborate with cross-functional teams to define data-driven strategies and solutions.
            4. Communicate findings and recommendations to stakeholders through reports and presentations.`,
            qualifications: `1. Master's or Ph.D. in Data Science, Statistics, Computer Science, or related field.
            2. 5+ years of experience in data analysis and predictive modeling.
            3. Proficiency in programming languages such as Python, R, or SQL.
            4. Strong understanding of machine learning algorithms and techniques.`,
            education: 'Master’s or Ph.D. in Data Science, Statistics, Computer Science, or related field',
            date: '2024-05-10'
        },
        {
            title: 'Marketing Manager',
            company: 'Digital Innovations Ltd.',
            location: 'San José, Costa Rica',
            salary: '$5000',
            description: `Digital Innovations Ltd. is seeking a dynamic and results-driven Marketing Manager to lead our marketing initiatives and drive business growth. In this role, you'll develop and execute comprehensive marketing strategies, manage advertising campaigns, and oversee the creation of engaging content. With your strategic vision and leadership skills, you'll inspire and motivate your team to achieve our marketing objectives.`,
            responsibilities: `1. Develop and implement strategic marketing plans to achieve business objectives.
            2. Manage digital marketing channels, including social media, email, and search engine marketing.
            3. Oversee the creation of marketing materials, such as brochures, presentations, and advertisements.
            4. Analyze marketing data and metrics to measure performance and optimize campaigns.`,
            qualifications: `1. Bachelor's degree in Marketing, Business Administration, or related field.
            2. 7+ years of experience in marketing, with at least 3 years in a managerial role.
            3. Proven track record of developing and executing successful marketing campaigns.
            4. Strong leadership, communication, and project management skills.`,
            education: 'Bachelor’s degree in Marketing, Business Administration, or related field',
            date: '2024-05-15'
        },
        {
            title: 'UX/UI Designer',
            company: 'Creative Design Studio',
            location: 'San José, Costa Rica',
            salary: '$3000',
            description: `Creative Design Studio is looking for a talented UX/UI Designer to join our team and create exceptional user experiences. In this role, you'll collaborate with product managers, developers, and other stakeholders to design intuitive and visually appealing interfaces for web and mobile applications. If you have a passion for design and a keen eye for detail, we want to hear from you!`,
            responsibilities: `1. Conduct user research and gather insights to inform design decisions.
            2. Create wireframes, prototypes, and mockups to illustrate design concepts.
            3. Collaborate with cross-functional teams to translate requirements into user-centric designs.
            4. Iterate on designs based on feedback and user testing.`,
            qualifications: `1. Bachelor's degree in Design, Human-Computer Interaction, or related field.
            2. 3+ years of experience in UX/UI design for web and mobile applications.
            3. Proficiency in design tools such as Sketch, Adobe XD, or Figma.
            4. Strong understanding of usability principles and best practices.`,
            education: 'Bachelor’s degree in Design, Human-Computer Interaction, or related field',
            date: '2024-05-20'
        },
        {
            title: 'Financial Analyst',
            company: 'Global Investments LLC',
            location: 'San José, Costa Rica',
            salary: '$1500-2500',
            description: `Global Investments LLC is seeking a skilled Financial Analyst to support our investment decisions and financial planning processes. In this role, you'll analyze financial data, prepare forecasts and reports, and evaluate investment opportunities. With your analytical mindset and attention to detail, you'll provide valuable insights that drive informed business decisions.`,
            responsibilities: `1. Analyze financial statements and performance metrics to assess the financial health of companies.
            2. Develop financial models and forecasts to support strategic planning and decision-making.
            3. Evaluate investment opportunities and conduct due diligence on potential acquisitions or investments.
            4. Prepare presentations and reports for senior management and external stakeholders.`,
            qualifications: `1. Bachelor's degree in Finance, Accounting, Economics, or related field.
            2. 3+ years of experience in financial analysis or investment banking.
            3. Strong analytical skills and proficiency in financial modeling.
            4. Excellent communication and presentation abilities.`,
            education: 'Bachelor’s degree in Finance, Accounting, Economics, or related field',
            date: '2024-05-25'
        },
        {
            title: 'Human Resources Manager',
            company: 'PeopleFirst Inc.',
            location: 'San José, Costa Rica',
            salary: '$2500-$3000',
            description: `PeopleFirst Inc. is looking for an experienced Human Resources Manager to oversee all aspects of our HR operations. In this role, you'll lead recruitment efforts, develop HR policies and procedures, and manage employee relations. If you're a strategic thinker with a passion for building and supporting high-performing teams, we'd love to hear from you!`,
            responsibilities: `1. Lead recruitment and onboarding processes to attract and retain top talent.
            2. Develop and implement HR policies and procedures to ensure compliance and foster a positive work environment.
            3. Manage employee relations, including performance management, conflict resolution, and disciplinary actions.
            4. Provide coaching and guidance to managers and employees on HR-related matters.`,
            qualifications: `1. Bachelor's degree in Human Resources, Business Administration, or related field.
            2. 5+ years of experience in HR management, with a focus on recruitment and employee relations.
            3. Strong understanding of labor laws and regulations.
            4. Excellent leadership, communication, and interpersonal skills.`,
            education: 'Bachelor’s degree in Human Resources, Business Administration, or related field',
            date: '2024-05-30'
        },
    ];

    const jobListingsContainer = document.getElementById('job-listings-container');

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';

        jobItem.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-location">${job.location}</div>
            <div class="job-salary">${job.salary}</div>
            <div class="job-date">Posted on: ${new Date(job.date).toLocaleDateString()}</div>
            <div class="job-description"><h3>Job Description:</h3>${job.description}</div>
            <div class="job-responsibilities"><h3>Responsibilities:</h3><p>${job.responsibilities}</p></div>
            <div class="job-qualifications"><h3>Qualifications:</h3><p>${job.qualifications}</p></div>
            <div class="job-education"><h3>Education:</h3><p>${job.education}</p></div>
        `;

        jobListingsContainer.appendChild(jobItem);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the 'clicked' class on the clicked job item
            item.classList.toggle('clicked');
        });
    });
});



  // menu button for small screen
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});