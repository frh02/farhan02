AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Computer Vision Engineer",
    cardImage: "assets/images/experience-page/nightingale.png",
    place: "Nightingale AI",
    time: "(May, 2021 - Present)",
    desp: "<li>Working as Computer Vision Engineer under the supervision of Dr. Charlene Chu.</li><li>Designed a pose estimation for detecting recovery rate in patients.</li><li>Created a website to host the computer vision model to have inference on images and videos.</li><li>Managed the website traffic load and implemented an API for live camera inference.</li>",
  },
  {
    title: "Computer Vision Intern",
    cardImage: "assets/images/experience-page/jacobb.png",
    place: "JACOBB AI",
    time: "(Apr, 2022 - present)",
    desp: "<li>Visualised a 3D scene in GTLF format and carried out data transformation.</li> <li>Deployed a pre trained object detection model for 3D mesh.</li> <li> Assisted in the pipeline development while suggesting the best way to carry out mesh completion in a 3D scene.</li><li> Data Manipulation for converting 3D objects into diffeerent formats like .obj, .glp format.</li>",
  },
  {
    title: "Computer Vision Developer",
    cardImage: "assets/images/experience-page/shiphrah.png",
    place: "Shiphrah Biomedical Inc.",
    time: "(Jan, 2022 - Present)",
    desp: "<li>Working as Computer Vision pipeline developer under the supervision of Dr. Elham Dolatabadi and Dr. Allan Kember.</li><li>Data cleaning and extraction from raw EEG/ECG and SpO2 levels in patients.</li><li>Working in the physiology phase of the sleep study in pregnant women during trimester phase.</li><li>Deployed model for human movement tracking like FlowNet, RAFT and DeepFlow.</li><li>Designed a custom computer vision algorithm for Obstructive Sleep Apnea Prediction using Infrared Cameras.</li>",
  },
  {
    title: "Computer Vision Intern",
    cardImage: "assets/images/experience-page/yellowhouse.svg",
    place: "Yellow House Innovation Hub",
    time: "(Feb, 2022 - Jul, 2022)",
    desp: "<li>Designing Machine Learning pipeline for artwork detection in Museums.</li><li>Using models which can deployed on a server and used by client on a low end mobile device.</li><li>Using models which can deployed on a server and used by client on a low end mobile device.</li><li>Designed the user and the admin interface for the web application.</li><li>Building on self supervised and semi supervised learning for object detection which can be customised to delete data and to update a dataset</li>",
  },
  {
    title: "Deep Learning Engineer",
    cardImage: "assets/images/experience-page/axibo.svg",
    place: "Axibo Inc",
    time: "(Jan, 2022 - Apr, 2022)",
    desp: "<li>Curated a custom dataset for object detection for wide angle camera images.</li><li>Designed a Computer Vision API to detect objects using openCV and deep learning models for object detection.</li><li> Deployed low latency and scalable machine learning models to be deployed in TPU and mobile phones.</li><li>Worked on integrating the detection pipeline into the company software to facilitate the company hardware.</li><li>Developed a pipeline for Human pose estimation and to identify a person out of multiple subjects using sate of art models like DeepSort, Sort and YoloV4.</li>",
  },
  {
    title: "Graduate Teaching Assistant",
    cardImage: "assets/images/experience-page/uoft_eng.svg",
    place: "University of Toronto, (CSC401/2511H1- Natural Language Computing)",
    time: "(Jan, 2022 - May, 2022)",
    desp: "<li>Designed and formulated assignment content.</li><li>Monitored the tutorials and conducted lab sessions.</li><li>Made exam questions for the course exams.</li>",
  },
  {
    title: "Graduate Teaching Assistant",
    cardImage: "assets/images/experience-page/uoft_sc.svg",
    place: "University of Toronto, (MIE253H1-Data Modelling)",
    time: "(Jan, 2022 - May, 2020)",
    desp: "<li>Conducted lab sessions for student and supervised them with project ideas.</li><li>Designed course material for the course which comprised of data base management.</li><li>Graded assignments and quiz for the students.</li>",
  },
  {
    title: "Graduate Research Intern",
    cardImage: "assets/images/experience-page/uoft.png",
    place: "University of Toronto",
    time: "(Jan, 2022 - Apr, 2020)",
    desp: "<li>Assessed real world problems in Electric Vehicle Security during charging in the CAN(Control Area Network) bus data.</li><li>Generated synthetic data using Generative adversarial network (GAN) and carried out classification task.</li><li> Deployed anomaly detection LSTM (Long short Term Memory) Recurrent Neural network (RNN) for supervised deep learning of time sequence data with over 87% accuracy.</li><li>  Implemented multi-class classi cation and categorized the attacks as DoS, fuzzy, impersonation and no attacks with accuracy of 96% in python using tensorflow backend..</li><li>Developed a pipeline for Human pose estimation and to identify a person out of multiple subjects using sate of art models like DeepSort, Sort and YoloV4.</li>",
  },
  {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/yzu.png",
    place: "Yuan Ze University",
    time: "(Jun, 2020 - Jul, 2020)",
    desp: "<li>Extracted raw EEG/ECG data from over 50 patients from National Taiwan University Hospital.</li><li>Converted the raw time sequence data into spectrogram images using image processing techniques in MATLAB and R to carry out novel Deep Learning Models.</li><li> Successfully generated image classification of patients into different levels of Depth of Anesthesia using libraries like OpenCV.</li><li>Created a VGG16 Convolutional Neural Network for feature detection and medical image analysis with accuracy of 96%.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Research Volunteer",
    cardImage: "assets/images/experience-page/iphme.png",
    description:
      "Responsible for developing object detection models.",
  },
  {
    title: "Social Volunteer",
    cardImage: "assets/images/experience-page/nifindia.png",
    description:
      "Participated in educational and training for youth in suburban and rural areas. Conducted self-awareness sessions.",
  },
  {
    title: "Event Co-ordinator",
    cardImage: "assets/images/experience-page/enactus.png",
    description:
      "Co-ordinated and volunteered in multiple technical and social events under Gram Yojana",
  },
  {
    title: "Volunteer",
    cardImage: "assets/images/experience-page/techvit.png",
    description:
      "Volunteered in a organising sports events and tree plantation in the Vellore Institute of Technology.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Bosch Future Mobility Challenge",
    subtitle: "Participant",
    image: "assets/images/experience-page/bosch.png",
    desp: "Bosch Future Mobility Challenge is an international autonomous driving and connectivity competition. I was responsible for the SLAM and object detection algorithms.",
  },
  {
    title: "Student Engagement Awards Project",
    subtitle: "Participant",
    image: "assets/images/experience-page/uoft.png",
    desp: "Developed a website called BreatheEZ which aids covid-19 affected patients with breathing exercises.",
  },
  {
    title: "IMI Big Data and Artificial Intelligence Case Competition",
    subtitle: "Partcipant",
    image: "assets/images/experience-page/imi.png",
    desp: "Conducted data preprocessing and designed a model for predicting credit risk.",
  },
  {
    title: "I3ndiya IoT Challenge",
    subtitle: "Participant",
    image: "assets/images/experience-page/i3indya.png",
    desp: "Proposed a new fault detection method for detecting underground faults.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
