import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

/**
 * @description Component for rendering a list of posts
 * @param {boolean} isPosting Whether or not the user is currently posting
 * @param {function} onStopPosting Function to call when the user stops posting
 * @returns {JSX.Element} The rendered component
 */
function PostList({isPosting, onStopPosting}) {
  /**
   * The state of the entered author and body
   */
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  /**
   * Function to handle changes to the body of the post
   * @param {Event} event The event that triggered the change
   */
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  /**
   * Function to handle changes to the author of the post
   * @param {Event} event The event that triggered the change
   */
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {/*
        If the user is currently posting, render the modal
        containing the NewPost component
      */}
      {/* {isPosting ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onClose={hideModalHandler}
          />
        </Modal>
      ) : null} */}
      {isPosting && 
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      }
      {/*
        Render the list of posts
      */}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} desc={enteredBody} />
        <Post author="Anshul" desc="Hello World!" />
      </ul>
    </>
  );
}
/******  2850eaae-baa8-46ad-8e17-61a9d4fca4b3  *******/

export default PostList;
