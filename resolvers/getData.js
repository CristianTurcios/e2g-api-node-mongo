const assert = require('assert');
const Mongodb = require('../mongodb/mongodb');

module.exports = {
    getDocuments: (databaseId, collectionId) => {
        return new Promise((resolve, reject) => {
            Mongodb.makeDatabaseConnection(databaseId, (err, databaseConnection) => {
                if (err) {
                    console.log('err');
                    return reject(err);
                } else {
                    const cursor = databaseConnection.collection(collectionId).find();
                    const results = [];

                    cursor.each((err, doc) => {
                        assert.equal(err, null);
                        if (doc != null) {
                            results.push(doc);
                        }
                        resolve(results);
                    });
                }
            });
        });
    },

    getDocument: (databaseId, collectionId, documentId) => {
        console.log(databaseId, collectionId, documentId);
        
        return new Promise((resolve, reject) => {
            Mongodb.makeDatabaseConnection(databaseId, (err, databaseConnection) => {
                if (err) {
                    console.log('err');
                    return reject(err);
                } else {
                    // NOTA: los documentos de la base de datos que estoy consultando solo tienen la propiedad _id, 
                    // sin embargo no puede buscar por _id, solo por id,
                    // Asi que no va a encontrar ningun documento en estos momentos
                    const cursor = databaseConnection.collection(collectionId).find({
                        'id': documentId
                    });
                    // NOTA: los documentos de la base de datos que estoy consultando solo tienen la propiedad _id, 
                    // sin embargo no puede buscar por _id, solo por id,
                    // Asi que no va a encontrar ningun documento en estos momentos

                    const results = [];

                    cursor.each((err, doc) => {
                        assert.equal(err, null);
                        if (doc != null) {
                            results.push(doc);
                        }
                        resolve(results);
                    });
                }
            });
        });
    },
};