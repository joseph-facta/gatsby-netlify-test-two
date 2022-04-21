import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const SidebarPageTemplate = () => {

  return (
    <div className="sidebar-wrapper">
        <main className="main-content">
            <h1>HERE I AM</h1>
        </main>
        <aside className="sidebar"></aside>
    </div>
  );
};

const SidebarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SidebarPageTemplate />
    </Layout>
  );
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
