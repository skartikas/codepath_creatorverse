import { useParams } from "react-router-dom";
import CreatorForm from "../components/CreatorForm";

const EditCreator = () => {
  const { id } = useParams();

  return (
    <div>
      <CreatorForm isUpdate={true} id={id} />
    </div>
  );
};

export default EditCreator;
