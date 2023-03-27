import "./config/env";
import { AppDataSource } from "./data-source";
import server from "./routes";

AppDataSource.initialize()
  .then(async () => {
    server.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  })
  .catch((error) => console.log(error));
