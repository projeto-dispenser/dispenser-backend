import dotenv from "dotenv";

export function loadEnv() {
  let path = ".env";

  dotenv.config({ path });
}
