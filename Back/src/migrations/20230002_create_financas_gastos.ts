import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable("financas_gastos");
  if (!exists) {
    await knex.schema.createTable("financas_gastos", (table: any) => {
      table.string("id", 36).primary();
      table.string("date", 20).notNullable();
      table.string("category", 50).notNullable();
      table.string("description", 255).notNullable();
      table.decimal("value", 10, 2).notNullable();
      table.string("author_id", 36).notNullable().references("id").inTable("financas_users");
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("financas_gastos");
}
