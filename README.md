# TypeORM-Javascript-with-ExpressJs
- clone repository
- run npm i
- create a database as 'anyname'
- run npm start


## Migration
- run command "typeorm migration:create -n 'anyname' ", you can see migration-file.ts in  src/migration folder .
- in terminal navigate to src/migration folder and run "tsc 'migration-filename.ts' " and you will 
  get your migrationfile as javascript file .
- now run "npm run migration"