import mongoose from 'mongoose';

interface dbConnectionOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  bufferCommands: boolean; // this is default option, but very important..
}

const getConnectionUrl = (): string => {
  return 'mongodb://localhost:27017/test';
};

const getConnectionOptions2 = () => {
  const connectionOptions: dbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: true,
  };

  return connectionOptions;
};

const runner = () => {
  const conn = mongoose.createConnection(getConnectionUrl(), getConnectionOptions2());
  conn.on('connected', () => {
    console.log('connected to mongod server');
  });
  conn.on('disconnected', () => {
    console.error('disconnected to mongod server');
  });
  return conn;
};

const AppDataSource = runner();
export default AppDataSource;
