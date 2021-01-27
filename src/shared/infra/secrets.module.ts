import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';


@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
          });

          return client.db(process.env.DB_NAME);
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class SecretsModule {}
