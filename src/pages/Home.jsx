/* The line `import blogData from "../data/blog.js"` is importing data from a JavaScript module located
at "../data/blog.js". This data is likely an array of blog objects that contain information such as
title, excerpt, author, and date for each blog post. This imported data is then used in the `Home`
component to dynamically generate blog cards based on the information provided in each blog object. */
import blogData from "../data/blog.js"
import { Link } from "react-router-dom";
const Home = () => {
    return (
      <>
        <div className="blog-container">
          /* This code snippet is mapping over an array of blog data (`blogData`) and generating a list
          of blog cards for each item in the array. */
          {blogData.map((b) => (
            <Link to={ `/blog/${b.id}` }>
            <div key={b.id} className="blog-card">
                <h4>{b.title}</h4>
                <p>{b.excerpt}</p>
                <div className="span">
                  <span>Author: {b.author}</span>
                  <span>Date: {b.date} </span>
                </div>
            </div>
            </Link>
          ))}
        </div>
      </>
    );
}

export default Home
