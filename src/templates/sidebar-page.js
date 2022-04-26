import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const SidebarPageTemplate = ({
    title,
    subtitle,
    body,
    bodyComponent,
    sidebartitle,
    sidebarcontent
}) => {
    const PageContent = bodyComponent || Content;
  return (
    <div className="sidebar-wrapper">
        <main className="main-content">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <PageContent className="content" content={body}/>
        </main>
        <Sidebar  content={sidebarcontent} title={sidebartitle} />
    </div>
  );
};

SidebarPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    body: PropTypes.node,
    sidebar_title: PropTypes.string.isRequired,
    sidebar_content: PropTypes.string
}

const SidebarPage = ({ data }) => {
    const { markdownRemark: post } = data;
    const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SidebarPageTemplate 
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        body={post.html}
        bodyComponent={HTMLContent}
        sidebartitle={frontmatter.sidebar_title}
        sidebarcontent={frontmatter.sidebar_content}
        
      />
    </Layout>
  );
};

SidebarPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SidebarPage;

export const SidebarPageQuery = graphql`
  query SidebarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          title
          subtitle
          sidebartitle
          sidebarcontent
        }   
    }
}
`;
