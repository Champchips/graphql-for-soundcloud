import express from "express";
import { ApolloServer } from "apollo-server-express";

import "./mongoose-connect";
import schema from "./graphql";

const server = new ApolloServer({
  schema,
  // introspection: true,
  playground: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
server.applyMiddleware({ app });

const port = process.env.PORT ?? 5001;
app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
