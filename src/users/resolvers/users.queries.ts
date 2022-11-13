const db = require('../../config/db')

export class UserQueries {
    user(id) {
        return {
            id: 1,
            name: "samuel",
            email: "samuel@sa.com",
            passsword: "1234",
            active: true,
            created_at: "2022-01-01"
        }
    }
}
