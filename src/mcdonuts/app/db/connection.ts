import mongoose from 'mongoose';

//if (!(process.env.NODE_ENV === 'test'))
  const Connection = mongoose.createConnection(`${process.env.DB_URL_MCDONUTS}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
 });

export default Connection;