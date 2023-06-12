import { createClient } from "contentful";
import React, { useState, useEffect } from "react";

const Homealabama = () => {
  const [content, setContent] = useState([]);
  const [description, setDescription] = useState("");

  const client = createClient({
    space: '5bdhq9idx46g',
    environment: 'master',
    accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
  });

  useEffect(() => {
    const getEntry = async () => {
      try {
        await client.getEntry('5qHG0ZjEEp6Pboc4TMrAn5').then((entry) => {
          setContent(entry);
          console.log(entry);
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    getEntry();
  }, []);

  return 
};

export default Homealabama;
    




