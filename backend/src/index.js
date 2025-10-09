import "dotenv/config";
import connectToMongo from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

connectToMongo()
  .then(() => {
    // Fix: Added the 'error' parameter to the function
    app.on("error", (error) => {
      console.log("SERVER ERROR:", error);
    });

    app.listen(port, () => {
      console.log(`🎉 App listening on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Mongo db connection failed:", error);
  });
