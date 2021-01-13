import { useStaticQuery, graphql } from "gatsby";

const useSkills = () => {
  const data = useStaticQuery(
    graphql`
      query skills {
        site {
          siteMetadata {
            skills
          }
        }
      }
    `
  );

  return data.site.siteMetadata.skills;
};

export default useSkills;
