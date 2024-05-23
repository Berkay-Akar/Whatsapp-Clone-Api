import { server } from "./src/http";
import "./src/websockets/connection";

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log("🔥 Server Running on port " + PORT);
});
