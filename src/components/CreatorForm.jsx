/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { useNavigate } from "react-router-dom";

const CreatorForm = ({ isUpdate, id }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdate) {
      supabase
        .from("creators")
        .select()
        .eq("id", parseInt(id))
        .then((res) => {
          setName(res.data[0].name);
          setDesc(res.data[0].description);
          setImageUrl(res.data[0].imageURL);
          setUrl(res.data[0].url);
        });
    }
  }, []);
  const handleUpdate = async () => {
    const { data, error } = await supabase
      .from("creators")
      .update({ name, imageURL: imageUrl, url, description: desc })
      .eq("id", id);
    console.log(data, error);
    navigate(`/creators/view/${id}`);
  };

  const handleSubmit = async (e) => {
    if (id && id.length > 0) {
      await handleUpdate();
      return;
    }
    supabase
      .from("creators")
      .insert({
        id: Math.floor(Math.random() * 100000000),
        name,
        imageURL: imageUrl,
        url,
        description: desc
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <div className="container">
      <div className="grid">
        <label htmlFor="firstname">
          Name
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <label htmlFor="email">Image</label>
      <small>
        Provide a link to an image of your creator. Be sure to include the
        http://
      </small>

      <input
        type="text"
        id="imgurl"
        name="imgurl"
        placeholder="Image URL"
        required
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <label htmlFor="email">Description</label>
      <small>
        Provide a description of the creator. Who are they? What makes them
        interesting?
      </small>

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Description"
        required
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <p>
        <h2>SOCIAL MEDIA LINKS</h2> <br></br>
        <p>Provide at least one of the creator's social media links.</p>
      </p>

      <label htmlFor="email">Youtube</label>
      <small>The creator's YouTube handle (without the @)</small>

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Description"
        value={url}
        onChange={(e) => setUrl(`${e.target.value}`)}
      />
      <label htmlFor="email">Twitter</label>
      <small>The creator's Twitter handle (without the @)</small>

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Description"
        onChange={(e) => setUrl(`${e.target.value}`)}
      />
      <label htmlFor="email">Instagram</label>
      <small>The creator's Twitter handle (without the @)</small>

      <input
        type="text"
        id="email"
        name="email"
        placeholder="Description"
        onChange={(e) => setUrl(`${e.target.value}`)}
      />

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default CreatorForm;
