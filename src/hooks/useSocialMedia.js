import { useStaticQuery, graphql } from "gatsby";

const useSocialMedia = () => {
  const data = useStaticQuery(
    graphql`
      query socialmedia {
        site {
          siteMetadata {
            socialMedia {
              name
              url
            }
          }
        }
      }
    `
  );

  return data.site.siteMetadata.socialMedia;
};

export default useSocialMedia;
