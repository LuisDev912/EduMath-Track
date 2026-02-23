# EduMath-Track

**EduMath-Track** is a full stack educational platform designed to help students practice arithmetic operations while tracking their performance and progress over time.

---

## Features

- User authentication with JWT
- Practice mode with dynamic problem generation
- RESTful API architecture 
- Performance tracking
- Session history storage

---

## Tech Stack

### Frontend:
- React
- TypeScript
- React-Router

### Backend:
- Node.js
- Express
- TypeScript
- Zod

### Database:
- PostgreSQL

---

## Project Structure

```
backend/
  src/
    controllers/
    services/
    routes/
    middlewares/
    schemas/
    app.ts
    index.ts

frontend/
  public/
  src/
    components/
    pages/
    hooks/
    styles/
    layout/

.gitignore
LICENSE
README.md
```

---

## Installation 

Clone the repository:

``` bash
git clone https://github.com/LuisDev912/EduMath-Track.git
```

Install dependencies:

``` bash
cd backend
npm install
cd ../frontend
npm install
```

Start development servers:

``` bash
npm run dev
```

---

## Future Improvements

- Implement difficulty levels
- Add weekly performance analytics
- Dockerize application
- Add automated testing

---

## License

This project is under the MIT license.