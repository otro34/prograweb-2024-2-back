# prograweb-2024-2-back

This is a Node.js/Express API for a university management system, supporting Docente, Estudiante, Curso, Carrera, and Matricula resources.

## Features
- RESTful API endpoints for managing docentes, estudiantes, cursos, carreras, and matriculas
- Sequelize ORM for database management
- CORS and body parsing middleware
- Ready for deployment on Vercel (serverless)

## Project Structure
```
app.js                # Express app setup
index.js              # Database sync and entry point (not used on Vercel)
api/index.js          # Vercel serverless API handler
src/
  config/database.js  # Sequelize configuration
  controllers/        # Route controllers
  models/             # Sequelize models
  repositories/       # Data access logic
  routes/             # Express routers
  tests/              # HTTP test files
vercel.json           # Vercel configuration
```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your database connection in `src/config/database.js`.
3. Run the server locally:
   ```bash
   node index.js
   ```
   - To force database re-initialization:
     ```bash
     node index.js init
     ```

## Deployment on Vercel
- The API is ready for Vercel. All API routes are handled by `api/index.js`.
- Configure your environment variables in the Vercel dashboard.
- No need to run or listen on a port; Vercel handles this automatically.

## Environment Variables
- Create a `.env` file for local development (do not commit this file).
- Example variables:
  ```env
  DB_HOST=localhost
  DB_USER=youruser
  DB_PASS=yourpassword
  DB_NAME=yourdb
  ```

## Testing
- HTTP test files are available in `src/tests/` for use with REST clients like VS Code REST Client or Postman.

---

Feel free to contribute or open issues!
