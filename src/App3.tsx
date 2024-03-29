/*
使用RouterProvider组件的示例
1. 使用children嵌套子路由
2. 与Routes组件混用

代码参考 https://reactrouter.com/en/main/upgrading/v6-data
*/

import {
    createBrowserRouter,
    Link,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    {
      // Lifted blog splat route
      path: "/blog/*",
      children: [
        // New blog index route
        { index: true, Component: () => <h1>Blog Index</h1> },
        // Blog subapp splat route added for /blog/posts matching
        { path: "*", Component: BlogApp },
      ],
    },
    {
      path: "/users/*",
      children: [
        { index: true, Component: () => <h1>User Index</h1> },
        { path: "list", Component: () => <h1>User List</h1> },
        {
          path: "info/*",
          children: [
            { path: "name", Component: () => <h1>User Name</h1> },
            { path: "avatar", Component: () => <h1>User Avatar</h1> },
          ]
        }
      ]
    },
    { path: "*", Component: NotFoundApp },
  ]);
  
  export default function App() {
    return <RouterProvider router={router} />;
  }
  
  
  function Home() {
    return (
      <>
        <h1>Welcome!</h1>
        <p>
          Check out the <Link to="/blog">blog</Link> or the{" "}
          <Link to="users">users</Link> section
        </p>
      </>
    );
  }
  
  function BlogApp() {
    return (
      <Routes>
        <Route index element={<h1>Blog Index</h1>} />
        <Route path="posts" element={<h1>Blog Posts</h1>} />
      </Routes>
    );
  }
  
  
  function NotFoundApp() {
    return <h2>404 Not Found</h2>;
  }
  