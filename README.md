# Project Camp Backend 🚀

**Sometimes, the best reason to code is simply because you enjoy building software.**

Project Camp is a small project management app whose backend I'm building from scratch with **Node.js, Express.js, and JavaScript**, just for fun.

After spending most of my time building production and corporate applications, I wanted to build something small at my own pace. I like writing code, and with AI able to do so much of the building now, I found myself missing the hands-on process: working through a problem, trying an approach, and figuring out why something doesn't work.

Nothing groundbreaking. No fancy AI integrations planned for now 😄. Just a chance to bring back some good old development memories.

## Why I'm building this

- Keep my coding muscles active 💪
- Experiment with different approaches and design patterns.
- Revisit the fundamentals of backend development.
- Build without deadlines, sprint commitments, or Jira tickets 😄.
- Explore ideas I might not get to try in a production environment.

I'll be sharing my progress, architectural decisions, challenges, and learnings as I build. The project is as much about enjoying the process as it is about the finished app.

## The app

The goal is a REST API that helps teams organize projects, manage tasks and subtasks, keep project notes, and collaborate through role-based access.

The [Product Requirements Document](./PRD.md) describes the intended scope, API routes, and permissions. The features below are planned and are being built incrementally.

| Area           | Planned capabilities                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Authentication | Registration, login, logout, email verification, password changes and resets, and JWT access and refresh tokens |
| Projects       | Create, list, view, update, and delete projects                                                                 |
| Team members   | Add members by email, list members, assign roles, and remove members                                            |
| Tasks          | Create and assign tasks, add file attachments, and track `todo`, `in_progress`, and `done` statuses             |
| Subtasks       | Break tasks into smaller steps and track completion                                                             |
| Project notes  | Keep shared notes alongside project work                                                                        |
| Permissions    | Control access through `admin`, `project_admin`, and `member` roles                                             |

## Current progress

The repository is at the backend foundation stage. It currently includes:

- An Express app with JSON and URL-encoded request parsing, CORS configuration, and static file serving.
- MongoDB connection setup through Mongoose.
- A health-check endpoint at `GET /api/v1/healthcheck`.
- Shared API response and error utilities.
- Constants for user roles and task statuses.

Authentication, project management, members, tasks, subtasks, and notes are still to be implemented. See the [PRD](./PRD.md) for the full feature plan.

## Tech stack

- **Runtime:** Node.js
- **Language:** JavaScript with ES modules
- **Web framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Configuration:** dotenv
- **Cross-origin requests:** cors
- **Formatting:** Prettier

## Run locally

You'll need Node.js, npm, and a running MongoDB instance or a MongoDB connection string.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/devansh05/project-camp-backend.git
   cd project-camp-backend
   npm install
   ```

2. Create a `.env` file in the project root:

   ```dotenv
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/project-camp
   CORS_ORIGINS=http://localhost:5173
   ```

   Set `MONGO_URI` to your database connection string and `CORS_ORIGINS` to your frontend's origin. The server defaults to port `3000` when `PORT` is omitted. Keep credentials out of version control; `.env` is already ignored.

3. Start the development server:

   ```bash
   npm run dev
   ```

   This uses Node's watch mode to restart when files change. The server starts listening after MongoDB connects successfully.

4. Check that the server is running:

   ```bash
   curl http://localhost:3000/api/v1/healthcheck
   ```

   A successful request returns HTTP `200` with a `Server is running` message in the response data.

To run without watch mode, use `npm start`.

## Project structure

```text
src/
├── app.js          # Express configuration and route registration
├── index.js        # Environment loading, database connection, and server startup
├── controllers/    # Request handlers
├── db/             # MongoDB connection
├── routes/         # API routes
└── utils/          # Shared response/error helpers and constants
public/             # Static assets
PRD.md              # Planned features, endpoints, and permissions
```

**Being a software engineer isn't just about delivering features faster with AI. Sometimes, it's about writing code because you enjoy it.**
