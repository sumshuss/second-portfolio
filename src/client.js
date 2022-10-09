import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'we0vj2k3',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk1tO0y14Qbe13MucilxsEzCeGgQ92t71qqOsQO8DlqWz7d70L1eQEQWxYVL7WPqEHvxmbD0iNv2QG9r6B5s8J1SAglVWjyN6pORgrIx3GvkuMVymuxOlPsY2IcbiD8Du50THeLUEMWzoZKUbeX0xTu9Szz50VMnZBDnHElUdtvg2DvJ2BrZ',
  });
  
  const builder = imageUrlBuilder(client);
  
  export const urlFor = (source) => builder.image(source);
