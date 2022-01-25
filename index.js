const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 8000;

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Mock Weather API",
    version: "0.0.1",
    description: "Fake weather API for testing purposes",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Muhammed Nazeem",
      url: "https://n4ze3m.site",
    },
  },
  servers: [
    {
      url: "http://localhost:8000/",
      description: "Localhost",
    },
    {
      url: "https://weather.n4ze3m.site",
      description: "Live",
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
// middleware
app.use(cors());
app.use(express.json());
// routes
readdirSync("./src/routes").map((f) => app.use("/api", require(`./routes/${f}`)));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// routes
// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
