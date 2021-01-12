import { useStaticQuery, graphql } from "gatsby";

const useNavLinks = () => {
  const data = useStaticQuery(
    graphql`
      query navLinks {
        site {
          siteMetadata {
            navLinks {
              name
              url
            }
          }
        }
      }
    `
  );

  return data.site.siteMetadata.navLinks;
};

export default useNavLinks;
