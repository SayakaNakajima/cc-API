import App, { getDefaultApp } from "./app";
import { createConnection, ConnectionOptions } from "typeorm";
import dbConfig from "./ormconfig";

class DatabaseConnectionManager {
  /**
   * Connects to database
   */

  public static async connect() {
    const connection = await createConnection(
      dbConfig as ConnectionOptions,
    );
    // https://github.com/typeorm/typeorm/issues/3286
    // const driver = connection.driver;
    // driver.postgres.defaults.parseInputDatesAsUTC = true;
    return connection;
  }
}

const APP_SECRET = process.env.APP_SECRET || "5s5seA2~JaFq'#%x}pN9iD@Sv+^bD7K,qf}9<VvwaXzyuDj@ez%xWmtr27Aikz1";

DatabaseConnectionManager.connect().then(() => {
  const app: App = getDefaultApp(APP_SECRET);
  app.start();
});
