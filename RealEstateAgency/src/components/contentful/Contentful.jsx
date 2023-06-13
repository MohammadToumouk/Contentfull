import React from "react";
import { createClient } from "contentful";

const ContentfulApi = () => {


       


    const client = createClient({
        space: '5bdhq9idx46g',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
    })

    client.getEntry('24v8usEd8xOZqP5CAO3Qi5')
        .then((entry) => console.log(entry.fields))
        .catch(console.error)

    console.log("hi")

}



export default ContentfulApi