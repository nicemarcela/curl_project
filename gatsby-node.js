const { slugify } = require ('./src/util/utilityFunctions')
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
      const slugFromTitle = slugify(node.frontmatter.title);
      createNodeField({
        node,
        name: "slug",
        value: slugFromTitle,
      })
    }
  }

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  
// Page templates
const templates = {
  post: path.resolve('src/templates/single-post.js'),
  ratings: path.resolve('src/templates/single-rating.js'),
  postList: path.resolve('src/templates/post-list.js'),
}


const res = await graphql(`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          posttype
          author
        }
        fields {
          slug
        }
      }
    }
  }
}
`)

    if(res.errors) return Promise.reject(res.errors)
    
     // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges

  // Create single post pages
  posts.forEach(({ node }) => {
    if (node.frontmatter.posttype === 'rating') {
    createPage({
      path: node.fields.slug,
      component: templates.ratings,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
      },
    });
  } else {
    createPage({
      path: node.fields.slug,
      component: templates.post,
      context: {
        slug: node.fields.slug, 
      }
    });
  }
  })


  // Create posts pagination pages
  const postsPerPage = 5
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    // Skip first page because of index.js
    if (isFirstPage) return

    createPage({
      path: `/page/${currentPage}`,
      component: templates.postList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages: numberOfPages,
        currentPage: currentPage,
      },
    })
  })
}

