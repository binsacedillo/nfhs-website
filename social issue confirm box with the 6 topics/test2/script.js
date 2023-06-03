function selectTopic() {
  var topic = prompt("Enter a topic (e.g. 'T1 for HTML', 'T2 for CSS', 'T3 for JavaScript'):");

  switch (topic) {
    case "T1":
    case "t1":
      document.body.innerHTML += '<div class="topic"><h2>HTML</h2><p>HTML is a markup language used to structure content on the web. It is the foundation of every web page and provides a basic structure for displaying content, such as text, images, and videos.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/QM9b1U7IYfY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><a href="https://www.w3schools.com/html/">Learn more about HTML</a></div>';
      break;
    case "T2":
    case "t2":
      document.body.innerHTML += '<div class="topic"><h2>CSS</h2><p>CSS is a style sheet language used to describe the presentation of a document written in HTML. It enables developers to separate content from design, making it easier to manage and update the look and feel of a website.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/1PnVor36_40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><a href="https://www.w3schools.com/css/">Learn more about CSS</a></div>';
      break;
    case "T3":
    case "t3":
      document.body.innerHTML += '<div class="topic"><h2>JavaScript</h2><p>JavaScript is a programming language used to add interactivity and dynamic effects to web pages. It enables developers to create complex applications, such as games and web-based tools.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><a href="https://www.w3schools.com/js/">Learn more about JavaScript</a></div>';
      break;
    default:
      alert("Invalid topic. Please try again.");
  }
}

window.onload = function() {
  localStorage.clear();
}

window.addEventListener("beforeunload", function (event) {
  // Cancel the event as long as the user hasn't clicked the "Leave Page" button
  event.preventDefault();
  // Prompt the user with a message
  event.returnValue = "";
});