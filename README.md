# To load evn
source ./.env
# Initialise sequelize
npx sequelize-cli init
# create database
npx sequelize-cli db:create
# generate moodel for table also generates migration file 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string
# run migration to generate table in database
npx sequelize-cli db:migrate
# generate seed file
npx sequelize-cli seed:generate --name
# Seed files are some change in data that can be used to populate database table with sample data or test data
npx sequelize-cli db:seed:all
# seed particular file
npx sequelize db:seed --seed seeders/20210224025056-user.js
# undo last seedinng in database
npx sequelize-cli db:seed:undo
# undo migrations
npx sequelize-cli db:migrate:undo
# generate migration file 
npx sequelize-cli migration:generate --name <migration-skeleton.js>
# to delete seed or migrate file do undo first before deleting file else it will give error 
npx sequelize-cli db:create
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string
npx sequelize-cli db:migrate
# Seed files are some change in data that can be used to populate database table with sample data or test data
npx sequelize-cli db:seed:all
# seed particular file
npx sequelize db:seed --seed seeders/20210224025056-user.js
# undo last seedinng in database
npx sequelize-cli db:seed:undo
npx sequelize-cli seed:generate --name
# undo migrations
npx sequelize-cli db:migrate:undo
# generate migration file 
npx sequelize-cli migration:generate --name <migration-skeleton.js>
# to delete seed or migrate file do undo first before deleting file else it will give error 
