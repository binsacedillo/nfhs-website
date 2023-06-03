// Define an object containing the topics and their corresponding content
const topics = {
  "1. DEPRESSION AND ANXIETY": {
    video: "https://www.youtube.com/embed/d7NPnvKFs2Y",
    description: "Depression and anxiety are common mental health conditions that can affect a person's quality of life and ability to function normally. Depression causes sadness and a loss of interest in activities, while anxiety causes excessive worry and physical symptoms such as rapid heartbeat and sweating. Seeking professional help like therapy and medication can help manage both conditions and improve overall mental and physical health.",
    link: "https://www.cdc.gov/tobacco/campaign/tips/diseases/depression-anxiety.html"
  },
  "2. OUT-OF-SCHOOL YOUTH": {
    video: "https://youtube.com/embed/Ru-aQaCS4DE",
    description: "Out of school youth are young people who aren't currently in any formal education or training programs, and are usually between 16 and 24 years old. They could have dropped out of school, finished their studies, or never had the chance to attend school at all. These young folks face a bunch of challenges, like having limited access to jobs, not having the skills and training they need, and feeling left out of social situations. It's really important to help these guys out because it helps make our society more fair and equal. Some ways to help include training programs, job placement, support from mentors and counsellors, and making sure everyone has an equal chance to get an education and get ahead.",
    link: "http://uis.unesco.org/en/topic/out-school-children-and-youth"
  },
  "3. HUMAN RIGHTS": {
    video: "https://youtube.com/embed/WJsUfck01Js",
    description: "Human rights are fundamental freedoms and entitlements inherent to every person, regardless of nationality, ethnicity, gender, religion, or socio-economic background. These rights are essential for human dignity, equality, and justice, and are enshrined in international instruments such as the Universal Declaration of Human Rights (UDHR) and various human rights treaties. Upholding human rights helps establish a just and inclusive society, discourages discriminatory practices, and fosters peace and development. Governments, civil society organizations, and individuals all have a role in promoting and protecting these rights.",
    link: "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
  },
  "4. SOCIAL MEDIA ADDICTION": {
    video: "https://youtu.be/DcIgk94Fp6Y",
    description: "Social media addiction has become a prevalent issue in modern society, impacting people of all ages and backgrounds. It is characterized by excessive use of social media platforms, leading to a strong psychological dependence that interferes with daily activities, relationships, and mental health. Oftentimes fueled by the constant quest for likes, shares, and validation, social media addiction can perpetuate feelings of anxiety, depression, and low self-esteem. Furthermore, the attention economy model employed by these platforms is designed to keep users engaged, exacerbating the addiction and its detrimental effects on the user's well-being.",
    link: "https://www.healthline.com/health/social-media-addiction"
  },
  "5. ROLE OF SOCIAL MEDIA": {
    video: "https://www.youtube.com/watch?v=yJ9oEi3Yyg0&pp=ygUZdmlkZW9zIGFib3V0IHNvY2lhbCBtZWRpYQ%3D%3D",
    description: "The role of social media in today's society is multifaceted, shaping how people communicate, consume information, and form opinions. As a powerful tool, it has the ability to connect diverse populations, foster communities, and amplify voices. However, it can also spread misinformation and contribute to cyberbullying or echo-chamber effects. While social media offers great potential for positive change, its potential drawbacks necessitate careful examination and responsible usage.",
    link: "https://worldnoor.com/blog/role-of-social-media/"
  },
  "6. DISCRIMINATION": {
    video: "https://www.youtube.com/watch?v=da6UCBskqNk&pp=ygUOZGlzY3JpbWluYXRpb24%3D",
    description: "Discrimination is an unjust treatment of individuals based on superficial differences, such as race, gender, age, religion, or sexual orientation. Manifesting as prejudices or stereotypes, it creates social fractures, obstructs equal opportunities, and fosters a hostile environment, ultimately impeding social harmony and individual wellbeing. Recognizing and combating discrimination is essential for fostering a more inclusive, tolerant, and equitable society.",
    link: "https://www.apa.org/topics/racism-bias-discrimination/types-stress"
  }
};

// Define a function to display the content based on the user's selection
function displayTopic(topic) {
  const content = topics[topic];
  const container = document.getElementById("topic-container");
  container.innerHTML = `
    <h2>${topic}</h2>
    <div class="video-container">
      <iframe width="900" height="500" src="${content.video}" frameborder="0" allowfullscreen></iframe>
    </div>
    <p>${content.description}</p>
    <a href="${content.link}" target="_blank">Learn more</a>
    <br>
    <button class="go-back-button">Go Back</button>
  `;
  const goBackButton = document.querySelector(".go-back-button");
  goBackButton.addEventListener("click", showPromptBox);
  const selectTopicButton = document.getElementById("select-topic-button");
  selectTopicButton.style.display = "none";
}

// Define a function to show the prompt box and get the user's selection
function showPromptBox() {
  const topicNames = Object.keys(topics);
  let topic = prompt(`Choose a topic:\n\n${topicNames.join("\n")}`);
  if (topic === null) {
    return; // User clicked "Cancel"
  }
  topic = topic.trim();
  if (topic === "") {
    alert("Invalid topic selection.");
    showPromptBox();
    return;
  }
  // Check if the input is a number between 1 and the total number of topics
  if (/^\d$/.test(topic) && topic >= 1 && topic <= topicNames.length) {
    // Convert the input to the corresponding topic name
    topic = topicNames[topic - 1];
  }
  if (!topics.hasOwnProperty(topic)) {
    alert("Invalid topic selection.");
    showPromptBox();
    return;
  }
  displayTopic(topic);
}

// Attach an event listener to the select topic button
const selectTopicButton = document.getElementById("select-topic-button");
selectTopicButton.addEventListener("click", showPromptBox);