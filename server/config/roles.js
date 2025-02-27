const AccessControl = require('accesconstrol');

const allRights = {
    'create:any': ['*'],
    'read:any': ['*'],
    'update:any': ['*'],
    'delete:any': ['*']
}

let grantsObject = {
    admin: {
        test: allRights
    },
    user: {
        test: {
            'read:any': ['*']
        }
    }
}

const roles = new AccessControl();

module.exports = { roles };