import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
//import Foundation from "foundation-sites";

// eslint-disable-next-line
export const SidebarPageTemplate = ({
    title,
    subtitle,
    body,
    bodyComponent,
    sidebartitle,
    sidebarcontent,
}) => {
    const PageContent = bodyComponent || Content;
    const SidebarCols = 'small-12 medium-4'; 
  return (
    <div className = "sidebar-wrapper grid-x" >
        <main className="main-content small-12 medium-8">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <PageContent className="content" content={body}/>
        </main>
        <Sidebar content={sidebarcontent} title={sidebartitle} cols={SidebarCols}/>
    </div>
  );
};

SidebarPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    body: PropTypes.node,
    sidebartitle: PropTypes.string.isRequired,
    sidebarcontent: PropTypes.string
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
