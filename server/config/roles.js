const AccessControl = require('accesscontrol');
const { profile } = require('../controllers/user.controller');

const allRights = {
    'create:any': ['*'],
    'read:any': ['*'],
    'update:any': ['*'],
    'delete:any': ['*']
}

let grantsObject = {
    admin: {
        // test: allRights,
        profile: allRights
    },
    user: {
        // test: {
        // 'read:any': ['*']
        // }
        profile: {
            'read:own': ['*', '!password', '!_id']
        }
    }
}

const roles = new AccessControl();

module.exports = { roles };