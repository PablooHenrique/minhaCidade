const app = require("./config/express")
require("./config/database")("mongodb://admin:z8gr922g@ds135207.mlab.com:35207/minhagoiania")

let port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Express server is listening on port ${port}`));