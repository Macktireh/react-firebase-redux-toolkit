import React from "react";

const AddPost = () => {
  return (
    <div className="new-post-modal">
      <form>
        <textarea placeholder="Message..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default AddPost;
