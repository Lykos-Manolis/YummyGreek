# YummyGreek

# About the project
This project is created as an assignment and it utilizes the following skills:
- JavaScript Frameworks knowledge
- JSON databases
- Data management
- UI/UX design
- Responsive front end applications

The challenge of the project is to create an app for a Greek restaurant, called "YummyGreek", with dishes given in a JSON database. 

# Getting Started
To run the project we first need to open a JSON server so the app can fetch dishes from the database.

We can do that for example by deploying a local JSON server in a different port from the app.
`json-server --watch db.json --port 800`

# Main Page
The main page contains every available dish in the database, a navbar with a link to the ordered dishes, a filter bar and details for each dish.

# Dish Cards
The app accesses a [JSON database] through a local server and shows previews of each of the restaurant's dishes in the [main page].

# Dish Details Modal
Each dish preview is creating a new modal containing the dish's details, including the name, the description, an image and the ingredients used in the dish. The modal can be easily accessed through the details button in each card.

# Order Page
The order page contains the user's ordered dishes and their total cost.

# Known Issues
Due to the length of the deadline, the following issues are still present.

- Filters don't work correctly on some dishes due to the structure of the database.
- Users are unable to deselect a filter. Instead they have to remove every filter implemented.
- Dishes cannot be removed from the user's order.