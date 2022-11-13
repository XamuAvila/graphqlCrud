const db = require('../../config/db.js');

export class UserMutations {
    newUser(_, user) {
        console.log(db);
    }
}
