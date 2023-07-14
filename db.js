import knex from "knex";


export default knex({
    client: 'postgres',
    connection: {
        user: "postgres",
        password: "password",
        host: "localhost",
        database: "perntodo",
        port: "4321"
    },
});


