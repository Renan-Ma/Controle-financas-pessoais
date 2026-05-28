import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable("financas_users");
  if (!exists) {
    await knex.schema.createTable("financas_users", (table: any) => {
      table.string("id", 36).primary();
      table.string("name", 100).notNullable();
      table.string("email", 100).notNullable().unique();
      table.string("password", 255).notNullable();
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("financas_users");
}
