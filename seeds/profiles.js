/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('profiles').del()
  await knex('profiles').insert([
    { name: "Common Profile", label: 'common' },
    { name: "Admin  Profile", label: 'administrator' },
    { name: "Master  Profile", label: 'master' },
  ]);
};
