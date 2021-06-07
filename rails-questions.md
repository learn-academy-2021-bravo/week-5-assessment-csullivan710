# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
    SQL stands for Structured Query Language, and this language is used to communicate to a database. Statements in SQL are used to 
    perform tasks on a database, or to retrieve the database. 

2. What the PostgreSQL query that would return all the content in a particular table?
    To return all content within a table you would use the command:
    select * from tablename
    select is used to to retrieve, the * is shorthand for all columns, and the tablename is the table you are reading from

3. What is the command to create a new Rails application with a PostgreSQL database?
    Using the terminal you would use the command $ rails new app_name -d postgrsql -T
    this states, we are making a new rails app, with this name, remove the default database and replace it with postgresql and the -T tells to skip minitest framework

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
    To generate a new model with columns named we would use the command:
    $ rails generate model Meal breakfast:string lunch:string dinner:string
    This tells rails, we are making a new model called Meal, with the  columns being named breakfast, lunch and dinner. Each of these columns have been told to expect the data type of string by the usage of string in the model establishment.

5. What is a migration? Why would you use one?
    A migration if the use of SQL to change the schema without having to use pure SQL. This would be used to change the schema or overall information of each item in your table over time as things change, or new information is added.

6. What is the command to generate a migration file?
    The command to generate a migration file is:
    rails g migration thing_to_change
    This command tells rails, generate a migration file to do this action on our table

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
    Rails models use the PascalCase naming convention, these are singular and will automatically map to a plural database table name, whereas the table that is generated is snake_case and it matches the column names in the database

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
    You can modify the schema file directly, but generally it is bad practice. This file is not designed to be edited, it just represents the current state of the database. This information come from the Rails guide on Migrations. Everytime you migrate your database, the schema gets dumped and will update itself to match the structure of the database

9. What is the Rails console?
    Rails console is an interactive coding environemnt that loads Rails and out application code. It can be used to test association methods, validations and cehck error messages when building the app.

10. What is the Rails console command to see all the content in a particular table?
    the console command to see all content within a table is:
    rails c
    Model.column_names
    This command will give you the column names for the Model you are querying, although if you waish to see all tables you would use the command:
    ActiveRecord::Base.connection.tables