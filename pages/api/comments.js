import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function asynchandler(req, res) {
  try {
    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${graphcmsToken}`,
      },
    });

    const query = gql`
      mutation CreateComment(
        $name: String!
        $email: String!
        $comment: String!
        $slug: String!
        $id: ID
      ) {
        createComment(
          data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }
        ) {
          id
        }
        publishComment(where: { id: $id }) {
          id
        }
      }
    `;

    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
      id: req.body.id,
    });

    return res.status(200).send(result);
  } catch (error) {
    console.error('Error in API request:', error.message);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });

  }
}
