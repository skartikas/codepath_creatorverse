import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ setShowModal, id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    supabase
      .from("creators")
      .delete()
      .eq("id", id)
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div>
      <dialog open>
        <article>
          <header>
            <a
              onClick={() => setShowModal(false)}
              href="#close"
              aria-label="Close"
              className="close"
            ></a>
            WARNING!
          </header>
          <p>Are you sure you want to delete this creator?</p>
          <div className="button-group modal-button">
            <button onClick={() => handleDelete()} className="primary">
              Delete
            </button>
            <button onClick={() => setShowModal(false)} className="secondary">
              Cancel
            </button>
          </div>
        </article>
      </dialog>
    </div>
  );
};

export default DeleteModal;
