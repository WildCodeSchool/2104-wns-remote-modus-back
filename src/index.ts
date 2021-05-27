import mongoose from "mongoose";
import server from "./server";
import "reflect-metadata";

async function start () {

    mongoose
        .connect('mongodb://127.0.0.1:27017/modussey', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
        })
        .then(() => console.log('Connected to database'))

        .catch((err: Error) => console.log(err));
    
        const schema = await buildSchema({
            resolvers: [PostResolver],
          });
          
          const apolloServer = new ApolloServer({
              schema,
              playground: true,
          });
          
          const { url } =  await apolloServer.listen(4000);
          console.log(`Server is running, GraphQL Playground available at ${url}`);
          
}

start()

//? unitaire = une fonction par exemple, on vérifi que c'estbien un model par exemple
//? Vérifier par exemple le format précis d'un objet et ce qu'il contient 

//? Creation d'un post => Creation d'une mutation  objet rentre ? SUCCES de graphql ??? Au début marche pas, ensuite écriture de la route et après ça le teste passe

//? Rouge => fail car la fonction concernant les test existe pas
//? Vert =>  car le test est créer et correspond à ce qui est attendu par le test
//! ATTENTION : Si test d'abord vert   alors que sa fonction pas encore écrit => le test a un problème
//!  entré ? sortie ? => écriture route, entrée bonne ?  NON => aller investiguez à ce qui a causé le problème ET PAS PLUS LOIN    