function showTopic() {
  // Prompt user for topic choice
  var topicChoice = prompt("Please enter a topic: \n1. HTML \n2. CSS \n3. JavaScript");

  // Switch statement to display topic information
  switch (topicChoice) {
    case "1":
      document.getElementById("topic-container").innerHTML = getTopicHTML("HTML", "HTML is a markup language used to create web pages. Here's a video tutorial on how to create a basic HTML page:", "https://www.youtube.com/watch?v=UB1O30fR-EE", "https://www.w3schools.com/html/");
      break;
    case "2":
      document.getElementById("topic-container").innerHTML = getTopicHTML("CSS", "CSS is a stylesheet language used to describe the look and formatting of a document written in HTML. Here's a video tutorial on CSS basics:", "https://www.youtube.com/watch?v=yfoY53QXEnI", "https://www.w3schools.com/css/");
      break;
    case "3":
      document.getElementById("topic-container").innerHTML = getTopicHTML("JavaScript", "JavaScript is a programming language used to create interactive and dynamic web pages. Here's a video tutorial on JavaScript basics:", "https://www.youtube.com/watch?v=W6NZfCO5SIk", "https://www.w3schools.com/js/");
      break;
    default:
      alert("Invalid topic choice. Please try again.");
      showTopic();
  }
}

function getTopicHTML(topicTitle, topicExplanation, videoLink, websiteLink) {
  return `
    <h2>${topicTitle}</h2>
    <p>${topicExplanation}</p>
    <iframe width="560" height="315" src="${videoLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p><a href="${websiteLink}" target="_blank">Click here for more information on ${topicTitle}</a></p>
  `;
}