import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "zi3cc31b",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

// sanity cors add http://localhost:19006
// https://sujanfoodapp.sanity.studio/

// *[_type=="featured"]{
//     ...,
//     restaurants[]->{
//       ...,
//       dishes[]->{
//         name
//       }
//     }
//   }[0]

const Builder = imageUrlBuilder(client);
export const urlFor = (source) => Builder.image(source);
export default client;
