import Navigation from "../components/Navigation/Navigation";

const Description = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <h2>Description</h2>
        {/* powered by AI */}
        <main>
          <article>
            <p>
              Introducing my minimalist yet powerful todo application, meticulously crafted with React.js 
              and bolstered by the reliability of TypeScript, Redux, and seamless integration with the browser's 
              local storage functionality. Seamlessly blending modern technologies, this intuitive application 
              offers a streamlined interface for managing your tasks with ease.
            </p>
            <p>
              At the heart of this application lie two distinct tabs, each tailored to optimize your productivity. 
              The first tab showcases a comprehensive list of todos, whether active or completed, providing a 
              clear overview of your tasks at hand. Meanwhile, the second tab houses soft-deleted todos, 
              offering the flexibility to either permanently remove them or effortlessly restore them to your 
              active list, ensuring no task is ever lost or forgotten.
            </p>
            <p>
              With the robustness of Redux managing state, users can effortlessly add, remove, and toggle 
              the completion status of their todos, all while enjoying the benefits of type safety and enhanced 
              code readability provided by TypeScript. Additionally, the integration with browser's local storage 
              ensures that your todo list is automatically saved, providing a hassle-free experience across 
              sessions.
            </p>
            <p>
              Whether you're organizing your daily tasks, planning long-term goals, or simply seeking productivity 
              in your day-to-day life, this todo application empowers you to stay organized and focused, 
              all within a clean and efficient user interface.
            </p>
          </article>
        </main>
      </div>
    </>
  )
}

export default Description;