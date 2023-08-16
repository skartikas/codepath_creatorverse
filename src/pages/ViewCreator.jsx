import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import DeleteModal from "../components/DeleteModal";
const ViewCreator = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    supabase
      .from("creators")
      .select()
      .eq("id", parseInt(id))
      .then((res) => setUser(res.data[0]));
  }, []);

  return (
    <div className="container">
      <div className="profile">
        <img className="main-img" src={user?.imageURL}></img>
        <div>
          <h1>{user?.name}</h1>
          <p>{user?.url}</p>
          <p>{user?.description}</p>
          <div className="button-group">
            <a>
              <button onClick={() => setShowModal(true)}>Delete</button>
            </a>
            <a href={`/creators/edit/${id}`}>
              <button>Edit</button>
            </a>
          </div>
        </div>
      </div>
      {showModal && <DeleteModal id={id} setShowModal={setShowModal} />}
    </div>
  );
};

export default ViewCreator;
