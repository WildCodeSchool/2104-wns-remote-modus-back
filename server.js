const app = express();

import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

app.listen(5000, () => (console.log("Serveur démaré sur le port 5000")))

try {
    mongoose.connect("",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        autoIndex: true,
    })
    console.log("Connexion database réussie !");
} catch (error) {
    console.log(error);
}