import React from "react";
import PropTypes from "prop-types";
import { graphql} from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line
export const SidebarPageTemplate = () => {
  return (
    <div className="sidebar-page">
        <h1>HERE IS TITLE</h1>
        <Sidebar />
    </div>
  );
};

SidebarPageTemplate.propTypes = {
    title: PropTypes.string.isRequired
};

const SidebarPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SidebarPageTemplate/>
    </Layout>
  );
};

SidebarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default SidebarPage;

export const SidebarPageQuery = graphql`
  query SidebarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
