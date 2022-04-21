import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line
export const SidebarPageTemplate = ({title}) => {
  return (
    <div className="sidebar-wrapper">
        <main className="main-content">
            <h1>{title}</h1>
        </main>
        <Sidebar />
    </div>
  );
};

const SidebarPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SidebarPageTemplate title={frontmatter.title}/>
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
