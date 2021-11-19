# NodeJS-TaskManagerAPI
NodeJS REST API project for managing daily tasks.
NodeJS REST API connected to MongoDB database in the cloud. The basic frontend fetches data from API and lets us do actions on our tasks. API is CRUD so we can:
create tasks,
get all tasks,
get a single task,
update task,
and delete the task.

Besides that, costume-error handlers are implemented to make it easy to cope if the application becomes more confusing.

If you want to try this code on your local setup, you can simply clone this repository. You will need to create a .env file in the project's root directory and add the MONGO_URI variable into it that will be equal to the connection string for your MongoDB. After that, in the projects root directory run the command:
npm install
After that you can spin up the server by running:
npm start
Now you should be good to go.
