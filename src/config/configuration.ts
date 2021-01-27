import { SecretManagerServiceClient } from '@google-cloud/secret-manager/build/src/v1';

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const mongoURISecret =
  'projects/elated-bebop-154812/secrets/NULLPE_MONGO/versions/latest';

const mongoDBNameSecret =
  'projects/elated-bebop-154812/secrets/NULLPE_DBNAME/versions/latest';
// Instantiates a client
const client = new SecretManagerServiceClient();

async function accessSecretMongoURI(): Promise<string> {
  const [version] = await client.accessSecretVersion({
    name: mongoURISecret,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  return payload;
}

async function accessSecretDBName(): Promise<string> {
  const [version] = await client.accessSecretVersion({
    name: mongoDBNameSecret,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  return payload;
}

export default async () => {
  const secretMongoURI = await accessSecretMongoURI();
  const secretDBName = await accessSecretDBName();
  const isSanboxEnvironment = process.env.ENVIRONMENT === 'sandbox';
  return {
    port: parseInt(process.env.PORT, 10) || 8080,
    database: {
      name: isSanboxEnvironment ? process.env.DB_NAME : secretDBName,
      uri: isSanboxEnvironment ? process.env.MONGO_URI : secretMongoURI,
    },
  };
};
