

const assert = require('assert');
const Config = require('../config.js');
const MongoClient = require('mongodb').MongoClient;

module.exports = {
    makeDatabaseConnection(databaseId, callback) {
        MongoClient.connect(Config.COSMOS.URL, (err, client) => {
            assert.equal(null, err);
            const databaseConnection = client.db(databaseId);
            callback(null, databaseConnection);
        });
    }
};