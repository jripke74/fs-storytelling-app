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

function displayStory() {
  console.log("You clicked the button");
}
