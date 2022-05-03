var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    message: String
  }
`);

var root = { message: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});