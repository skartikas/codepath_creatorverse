import { useState } from "react";

import { supabase } from "../client.js";

const CreatorForm = ({ isUpdate }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase.from("creators").upsert({
      id: Math.floor(Math.random() * 100000000),
      name,
      imageURL: imageUrl,
      url,
      description: desc
    });
    console.log(data, error);
  };

  return (
    <div className="container">
      <form>
        <div className="grid">
          <label htmlFor="firstname">
            Name
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Name"
              required
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
          required
          onChange={(e) => setUrl(`youtube.com/${e.target.value}`)}
        />
        <label htmlFor="email">Twitter</label>
        <small>The creator's Twitter handle (without the @)</small>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Description"
          required
          onChange={(e) => setUrl(`twitter.com/${e.target.value}`)}
        />
        <label htmlFor="email">Instagram</label>
        <small>The creator's Twitter handle (without the @)</small>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Description"
          required
          onChange={(e) => setUrl(`instagram.com/${e.target.value}`)}
        />

        <button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatorForm;
