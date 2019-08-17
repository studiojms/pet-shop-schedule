class ConnectionFactory {
  private static connection: any;

  public static getConnection() {
    let instance = null;
    if (ConnectionFactory.connection) {
      instance = ConnectionFactory.connection;
    } else {
      ConnectionFactory.connection = '';
      instance = ConnectionFactory.connection;
    }

    return instance;
  }
}
