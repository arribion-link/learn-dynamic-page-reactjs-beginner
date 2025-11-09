/* The line `import blogData from "../data/blog";` is importing data from a file located at
"../data/blog". In this context, it seems like the `blogData` variable is being used to store an
array of blog items that the component `BlogDetails` will utilize to display specific blog details
based on the `id` parameter provided in the URL. This import statement allows the component to
access the blog data stored in the specified file for rendering on the webpage. */
import blogData from "../data/blog";
/* The line `import { useParams, Link } from "react-router-dom";` is importing two specific
functionalities, `useParams` and `Link`, from the "react-router-dom" library in a JavaScript React
application. */
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  /* `const { id } = useParams();` is a destructuring assignment in JavaScript. In this specific case,
  it is extracting the `id` parameter from the URL using the `useParams` hook provided by React
  Router. This allows the component to access the `id` parameter that is part of the URL path and
  use it to find the corresponding blog item from the `blogData` array. */
  const { id } = useParams();
  /* The line `const blog = blogData.find((item) => item.id.toString() === id);` is finding a specific
  blog item from the `blogData` array based on the `id` parameter passed to the component. */
  const blog = blogData.find((item) => item.id.toString() === id);

  /* This part of the code is a conditional check that is executed when the `blog` variable is falsy,
  meaning that no blog item was found based on the provided `id`. In this case, it renders a message
  indicating that the blog was not found along with a link that allows the user to navigate back to
  the home page. This helps handle the scenario where the requested blog item does not exist in the
  `blogData` array. */
  if (!blog) {
    return (
      <div>
        <h1>Blog Not Found</h1>
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </div>
    );
  }

  return (
    <section>
      /* The code snippet you provided is part of a React component called `BlogDetails`. This portion
      of the code is responsible for rendering the details of a specific blog item on the webpage. */
      <div className="details-container">
        <div>
          <p>
            <Link to="/">Go back home</Link>
          </p>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
