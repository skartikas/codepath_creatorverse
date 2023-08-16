import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    supabase
      .from("creators")
      .select()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
        }
        console.log(data);
        setCreators(data);
      });
  }, []);
  return (
    <div className="container">
      {creators &&
        creators.map((ele) => (
          <CreatorCard
            key={ele.id}
            id={ele.id}
            name={ele.name}
            imageURL={ele.imageURL}
            desc={ele.description}
            url={ele.url}
          />
        ))}
    </div>
  );
};

export default ShowCreators;
