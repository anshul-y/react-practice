import MainHeader from "./Components/MainHeader";
import PostList from "./Components/PostList";
import { useState } from "react";

// function App() {
//   return (
//     <main>
//       <Post author="Anshul" desc="Hello World!" />
//       <Post author="Anshul" desc="Hello World!" />
//     </main>
//   );
// }

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  function showModalHandler(event) {
    setModalVisibility(true);
  }
  function hideModalHandler(event) {
    setModalVisibility(false);
  }
  return (
    <>
      <header>
        <MainHeader onCreatePost={showModalHandler}/>
      </header>
      <main>
        <PostList isPosting={modalVisibility} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
