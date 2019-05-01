
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'irving', cohort_id:'1', cohort:'web18'},
        {id: 2, name: 'joe', cohort_id:'2', cohort:'web19'},
        {id: 3, name: 'jon', cohort_id:'1', cohort:'web18'},
        {id: 4, name: 'wendy', cohort_id:'1', cohort:'web18'},
      ]);
    });
};
