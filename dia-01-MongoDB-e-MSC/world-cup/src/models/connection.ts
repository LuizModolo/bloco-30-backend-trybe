import { connect } from 'mongoose';

const createConnection = (url: string) => {
  try {
    connect(url);
    console.log(`Conectado ao mongodb em: ${url}`);
  } catch (error) {
    console.log(error);
  }
};

export default createConnection;