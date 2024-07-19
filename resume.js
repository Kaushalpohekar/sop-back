const fs = require('fs');
const pdf = require('html-pdf');

// Your resume data
const resumeData = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kaushal Pohekar - Resume</title>
  <style>
    /* CSS styles for your resume */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      font-size: 12px;
    }
    .section-header {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .section-content {
      margin-bottom: 20px;
    }
    .project {
      margin-bottom: 10px;
    }
    .project-title {
      font-weight: bold;
    }
    .education-item, .work-experience-item {
      margin-bottom: 10px;
    }
    .achievement {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Kaushal Pohekar - Full Stack Developer (MEAN)</h1>
  <p>Arvi, India<br>
  Email: kaushalpohekar1@gmail.com<br>
  LinkedIn: linkedin.com/in/kaushal-pohekar<br>
  GitHub: github.com/kaushalpohekar<br>
  Phone: +91 9309865924</p>

  <div class="section-header">EDUCATION</div>
  <div class="section-content">
    <div class="education-item">
      <p><strong>Bachelor of Technology in Computer Science and Engineering</strong><br>
      Deogiri Institute of Engineering and Management Studies, Aurangabad<br>
      CGPA: 9.17<br>
      10/2020 – Jun 2023</p>
    </div>
    <div class="education-item">
      <p><strong>Diploma in Computer Engineering</strong><br>
      Government Polytechnic, Arvi<br>
      CGPA: 9.02<br>
      08/2017 – 10/2020</p>
    </div>
    <div class="education-item">
      <p><strong>SSC (Secondary School Certificate)</strong><br>
      Kannamwar Vidhyalay, Arvi<br>
      CGPA: 8.56<br>
      06/2016 - 06/2017</p>
    </div>
  </div>

  <div class="section-header">WORK EXPERIENCE</div>
  <div class="section-content">
    <div class="work-experience-item">
      <p><strong>Full Stack Developer</strong><br>
      SenseLive Technologies, Nagpur<br>
      01/2023 – Present</p>
      <ul>
        <li>Developed web applications using MEAN stack (MongoDB, Express.js, Angular, Node.js), Java, AngularJS, NodeJS, ExpressJS, TypeScript, MySQL, PostgreSQL, MongoDB, JSON, Restful API, HTML, CSS, JavaScript, RxJs, NGX, MQTT, WebSocket, PHP, Git/GitHub, Python, C/C++, JWT.</li>
        <li>Implemented automated test scripts with Selenium WebDriver for functional and regression testing.</li>
      </ul>
    </div>
    <div class="work-experience-item">
      <p><strong>Web Development Intern</strong><br>
      GenXcoders Pvt Ltd, Nagpur<br>
      05/2019– 06/2019</p>
      <ul>
        <li>Contributed to web development projects, gaining proficiency in Angular, TypeScript, and RESTful APIs.</li>
      </ul>
    </div>
    <div class="work-experience-item">
      <p><strong>Selenium Trainee</strong><br>
      ExcelR Solutions Pvt, Ltd, Pune<br>
      10/2012– 01/2013</p>
      <ul>
        <li>Acquired skills in automated test script development using Selenium WebDriver, enhancing web application testing efficiency.</li>
      </ul>
    </div>
  </div>

  <div class="section-header">PROJECTS</div>
  <div class="section-content">
    <div class="project">
      <p class="project-title">Career Guidance Portal</p>
      <p>10/2022 - 01/2023</p>
      <p>Developed a career guidance portal using MEAN stack, enhancing user engagement and interaction.</p>
    </div>
    <div class="project">
      <p class="project-title">Online Clearance System</p>
      <p>01/2020 - 03/2020</p>
      <p>Designed and implemented an online clearance system using Angular, Node.js, and MongoDB for efficient document processing.</p>
    </div>
    <div class="project">
      <p class="project-title">Fruit Classification using CNN</p>
      <p>11/2021 - 12/2021</p>
      <p>Developed a CNN model for fruit classification, demonstrating proficiency in machine learning and Python.</p>
    </div>
  </div>

  <div class="section-header">CERTIFICATIONS</div>
  <div class="section-content">
    <p>- Oracle Cloud Foundation Associate<br>
    10/2020 - 01/2021</p>
    <p>- EDx Data Science Visualization<br>
    01/2020 - 03/2020</p>
  </div>

  <div class="section-header">SKILLS</div>
  <div class="section-content">
    <ul>
      <li>Proficient in MEAN stack, Java, AngularJS, NodeJS, ExpressJS, TypeScript, MySQL, PostgreSQL, MongoDB, JSON, Restful API, HTML, CSS, JavaScript, RxJs, NGX, MQTT, WebSocket, PHP, Git/GitHub, Python, C/C++, JWT.</li>
      <li>Experienced in automated testing with Selenium WebDriver.</li>
      <li>Familiar with Agile and Scrum methodologies.</li>
    </ul>
  </div>

  <div class="section-header">LANGUAGES</div>
  <div class="section-content">
    <p>- Marathi (Native or Bilingual Proficiency)</p>
    <p>- English (Full Professional Proficiency)</p>
    <p>- Hindi (Professional Working Proficiency)</p>
  </div>

  <div class="section-header">ACHIEVEMENTS</div>
  <div class="section-content">
    <ul>
      <li>1st prize for strong programming skills.</li>
      <li>5-star rating on Hackerrank for advanced coding proficiency.</li>
      <li>Skill Badges in SQL and HTML/CSS from LinkedIn Learning.</li>
      <li>Completed "30 Days of Google Cloud" demonstrating proficiency in cloud technologies.</li>
      <li>Best Performer recognition at SenseLive Technologies.</li>
    </ul>
  </div>

</body>
</html>
`;

// Options for PDF generation
const pdfOptions = { format: 'Letter' };

// Generate PDF
pdf.create(resumeData, pdfOptions).toFile('./resume.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log(res);
  console.log('PDF generated successfully!');
});
