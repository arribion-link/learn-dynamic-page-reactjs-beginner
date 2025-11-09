---

# 📝 Blog App

A simple React-based blog application that displays a list of blog posts and allows users to view individual blog details using dynamic routing.

---

## 🚀 Features

- View a list of blog posts
- Navigate to detailed view of each post using dynamic routes
- Graceful handling of missing or invalid blog IDs
- Modular and maintainable component structure

---

## 🛠 Tech Stack

- **React**
- **React Router DOM** for client-side routing
- **JavaScript (ES6+)**
- **CSS** for styling

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone git remote add origin https://github.com/arribion-link/learn-dynamic-page-reactjs-beginner.git
   cd learn-react-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open your browser and visit:  
   `http://localhost:5173/`

---

## 📁 Project Structure

```
src/
├── components/
│   └── blog.js
├── data/
│   └── BlogDetails.jsx
|   |__ Home.jsx
├── App.js
├── index.js
```

- `BlogDetails.jsx`: Displays details of a single blog post based on the route parameter.
- `App.js`: Sets up routing and renders components.
- `Home.js`: Entry point of the React application.

---

## 🔄 Routing

- `/` → Home page (can list blog summaries)
- `/blog/:id` → Blog details page
  - Uses `useParams()` to extract `id`
  - Finds the matching blog post from `blogData`
  - Displays title and content
  - Shows "Blog Not Found" if ID is invalid

---

## 🧪 Example Blog Data (`data/blog.js`)

```js
const blogData = [
    {
    id: 1,
    title: "My First Blog Post",
    author: "John Doe",
    date: "October 15, 2023",
    content:
      "Welcome to my blog! This is the first post.",
    excerpt: "Welcome to my first blog post about learning React...",
    tags: ["React", "Beginner", "Tutorial"],
  },
];

export default blogData;
```

---

## 🧭 Navigation Example

To link to a blog post from a list:

```jsx
<Link to={`/blog/${blog.id}`}>Read More</Link>
```

---

## 📌 Notes

- Make sure blog IDs in `blogData` are strings to match `useParams()` output.
- Always import `Link` from `react-router-dom` when using it.

---