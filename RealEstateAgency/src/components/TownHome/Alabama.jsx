import { createClient } from "contentful";
import React, { useState, useEffect } from "react";

const AlabamaHome = () => {
  const [content, setContent] = useState([]);
  const [description, setDescription] = useState("");

  const client = createClient({
    space: '5bdhq9idx46g',
    environment: 'master',
    accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries({content_type: "testBlog"}).then((entries) => {
          setContent(entries.items);
          //console.log(entries.items);
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div>
      {content.map((item) => (
        <p key={item.sys.id}>{item.fields.description}</p>
      ))}
    </div>
  );
};

export default AlabamaHome;