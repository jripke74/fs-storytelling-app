// Step 6
// In your JavaScript file, select the div with the class story-container and store it in a
// variable called storyContainer.

const storyContainer = document.querySelector(".story-container");

// Step 7
// Select the #scary-btn, #funny-btn, and #adventure-btn buttons and store them in variables called
// scaryStoryBtn, funnyStoryBtn, and adventureStoryBtn.

const scaryStoryBtn = document.querySelector("#scary-btn");
const funnyStoryBtn = document.querySelector("#funny-btn");
const adventureStoryBtn = document.querySelector("#adventure-btn");

// Step 8
// Select the #result paragraph and store it in a variable called resultParagraph. You will use this
// variable to display the selected story.

const resultParagraph = document.querySelector("#result");

// Step 9
// To hold the different types of stories, create an object called storyObj. The object should have
// three properties: scary, funny, and adventure. Each property value should be an object with a story
// and a borderColor property.

// Assign the following values to the individual objects:

// scary:

// story: In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the
// cabin and awaken something malevolent that had been dormant for centuries.
// borderColor: #ee4b2b
// funny:

// story: During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an
// open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.
// borderColor: #f1be32
// adventure:

// story: Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple.
// They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left
// behind by a mysterious civilization.
// borderColor: #acd157

const storyObj = {
  scary: {
    story:
      "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    borderColor: "#ee4b2b",
  },
  funny: {
    story:
      "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
    borderColor: "#f1be32",
  },
  adventure: {
    story:
      "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    borderColor: "#acd157",
  },
};

// Step 10
// Create a function called displayStory. Inside the function, log "You clicked the
// button" to the console.

// Step 12
// Now, you know that the button works. Remove the console.log statement from the displayStory
// function.

// Step 13
// To differentiate between the different types of stories, you will need to pass the genre of
// the selected story to the displayStory function.

// Add a parameter called genre to the displayStory function.

// Step 14
// Inside the displayStory function, check if the storyObj object has a property that matches the
// genre parameter and set the #result paragraph's text content to the story of the selected genre.

// Also, set the storyContainer's border color to the borderColor property of the selected genre.

// Test this by calling the displayStory function with the scary genre. The border color should be
// #ee4b2b and the story should be "In the dark woods, a group of friends stumbled upon an old,
// abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for
// centuries.".

function displayStory(genre) {
  let property = storyObj.hasOwnProperty(genre);
  if (property) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

// Step 15
// Now that the displayStory function is working correctly, it is time to add the functionality to the
// buttons.

// Before that, remove the displayStory("scary") function call.

// displayStory("scary");

// Step 11
// Add an event listener for the click event to scaryStoryBtn and pass it the displayStory
// function. Then, click your button and see the output in the console.

// Step 16
// Modify the scaryStoryBtn event listener to call the displayStory function with the argument "scary".
// Also, add a click event listener to the funnyStoryBtn, and adventureStoryBtn buttons that call the
// displayStory function with the arguments "funny" and "adventure" respectively.

// With this, you have successfully completed the workshop.

scaryStoryBtn.addEventListener("click", function (event) {
  displayStory("scary");
});
funnyStoryBtn.addEventListener("click", function (event) {
  displayStory("funny");
});
adventureStoryBtn.addEventListener("click", function (event) {
  displayStory("adventure");
});
