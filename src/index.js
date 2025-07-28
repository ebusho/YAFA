import express from "express";

import router from "./router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
