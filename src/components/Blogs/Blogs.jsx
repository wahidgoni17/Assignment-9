import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="py-5 bg-emerald-50">
        <h1 className="text-5xl text-center font-bold">Blogs</h1>
      </div>
      <div className="px-20 py-10">
        <div className="mb-3">
          <h1 className="text-3xl font-semibold">
            Q1: When should you use context API?
          </h1>
          <p className="text-xl font-medium">
            Ans. Here are some scenarios where we might want to use the Context
            API: <br />
            1.Theme management: If our application has a theme that is used
            across multiple components, we can use the Context API to manage the
            current theme. <br />
            2. User authentication: If our application requires user
            authentication, we can use the Context API to manage the user's
            authentication state and pass it down to components that need it.{" "}
            <br />
            3. Multilingual support: If our application supports multiple
            languages, we can use the Context API to manage the currently
            selected language and provide translations to components that need
            it.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Q2: What is a custom hook?</h1>
          <p className="text-xl font-medium">
            Ans. A custom hook is a function in React that allows you to extract
            common logic into a reusable piece of code. It's a way to share
            stateful logic between components without having to use render props
            or higher-order components. <br /> In React, hooks are a way to
            manage state and side effects. Custom hooks build on top of these
            features by allowing you to encapsulate stateful logic and reuse it
            across multiple components. A custom hook is just a JavaScript
            function that starts with the prefix "use" (e.g. useMyCustomHook)
            and uses one or more built-in hooks (like useState or useEffect) to
            manage state or side effects.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Q3: What is useRef?</h1>
          <p className="text-xl font-medium">
            Ans. useRef is a hook in React that provides a way to store mutable
            values that persist across renders. It returns a mutable ref object
            that can be used to keep track of a value without triggering a
            re-render when the value changes. The useRef hook is often used for
            accessing and modifying the properties of DOM elements, such as
            their width, height, or position. By default, when a component
            renders, all of its state and props are re-evaluated and the entire
            component tree is updated. However, sometimes you may want to modify
            a value without causing a re-render. In those cases, you can use
            useRef.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Q4: What is useMemo?</h1>
          <p className="text-xl font-medium">
            Ans. useMemo is a hook in React that is used to memorize the results
            of a function. It is similar to React.memo, which memoizes the
            result of a component and prevents unnecessary re-renders, but
            useMemo is used to memoize the result of a function that is
            expensive to compute. The useMemo hook takes two arguments: a
            function that computes a value, and an array of dependencies. The
            function is only re-computed if one or more of the dependencies have
            changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
