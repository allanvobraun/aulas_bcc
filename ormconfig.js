const entities = process.env.ENV_TYPE === 'dev' ? "src/entity/**/*.ts" : "build/entity/**/*.js";
const migrations = process.env.ENV_TYPE === 'dev' ? "src/entity/**/*.ts" : "build/migration/**/*.js";

module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "synchronize": true,
   "logging": false,
   "entities": [
      entities
   ],
   "migrations": [
      migrations
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
