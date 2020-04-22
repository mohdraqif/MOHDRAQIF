const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "vsr8f21l86jj",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "tOca43HpvXL5pEvrXlHxcWjdppJIlrQYumTk_A9Cw7A"
});

export default client