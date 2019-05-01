exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();

    tbl
      .integer("cohort_id")
      .unsigned()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("cohort")
      .references("name")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.timestamps(true, true); // create_at and updated_at
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
