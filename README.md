# fs-storytelling-app

In this workshop, you will build a storytelling app that will allow you to list different stories based on genre.

Step 1
In this workshop, you will build a storytelling app that allows users to select a type of story and display a short story of that type. The CSS and the HTML boilerplate has been provided for you.

Begin by creating an h1 element and give it a text Want to hear a short story?.

Step 2
Create a main element with a class of story-container. Inside the .story-container element, create a div with a class of btn-container.

Step 3
Inside the .btn-container , create three buttons for each type of story. Give each button a class of btn and an id of scary-btn, funny-btn, and adventure-btn. The text for each button should be Scary Story, Funny Story, and Adventure Story respectively.

Step 4
Below the .btn-container element, you should have a p element with the id of result. This is where the story will be displayed.

Step 5
Next, you will start working on the JavaScript. For that, begin by linking the script.js file to your HTML.

Create a script element with its src attribute pointing to the script.js file. For example:

Example Code
<script src="path-to-javascript-file.js"></script>

Step 6
In your JavaScript file, select the .story-container element and store it in a variable called storyContainer.

Step 7
Select the #scary-btn, #funny-btn, and #adventure-btn buttons and store them in variables called scaryStoryBtn, funnyStoryBtn, and adventureStoryBtn.

Step 8
Select the #result paragraph and store it in a variable called resultParagraph. You will use this variable to display the selected story.

Step 9
To hold the different types of stories, create an object called storyObj. The object should have three properties: scary, funny, and adventure. Each property value should be an object with a story and a borderColor property.

Assign the following values to the individual objects:

scary:

story: In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.
borderColor: #ee4b2b
funny:

story: During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.
borderColor: #f1be32

adventure:

story: Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.
borderColor: #acd157

Step 10
Create a function called displayStory. Inside the function, log "You clicked the button" to the console.