require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const {
  fileLoader,
  mergeTypes,
  mergeResolvers
} = require("merge-graphql-schemas");
const next = require("next");
// Checks if we currently in dev mode or not
const dev = process.env.NODE_DEV !== "production";

// Merge schema and resolvers into single objects
const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, "./graphql/schema"))
);
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./graphql/resolvers"))
);

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

nextApp.prepare().then(() => {
  const server = express();
  // Middlewares
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors("*"));
  server.use(express.static("public"));
  //  Apollo Server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return {};
    },
    playground: {
      endpoint: process.env.GRAPHQL_URI,
      settings: {
        "editor.theme": "dark"
      }
    }
  });
  apolloServer.applyMiddleware({ app: server });

  server.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  // Connect to DB
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => {
      // Run the server
      server.listen(process.env.PORT, () => {
        console.log(`> Server ready at http://localhost:${process.env.PORT}`);
      });
    })
    .catch(err => console.log(err));
});
