SELECT * FROM users;

SELECT * FROM users WHERE name = 'John';

SHOW TABLES;

db.users.find();

db.users.find({ name: 'John' });

show collections;


db.users.find().sort({ salary: 1 });

db.users.find().sort({ salary: -1 });

db.users.aggregate([
    {
        $lookup: {
            from: 'addresses',
            localField: 'id',
            foreignField: 'user_id',
            as: 'addresses'
        }
    }
]);

db.users.aggregate([
    {
        $lookup: {
            from: 'addresses',
            localField: 'id',
            foreignField: 'user_id',
            as: 'addresses'
        }
    },
    {
        $match: {
            name: /w$/
        }
    }
]);

db.users.find().sort({ salary: 1 });

db.users.aggregate([
    {
        $lookup: {
            from: 'addresses',
            localField: 'id',
            foreignField: 'user_id',
            as: 'addresses'
        }
    }
]);

db.users.aggregate([
    {
        $lookup: {
            from: 'addresses',
            localField: 'id',
            foreignField: 'user_id',
            as: 'addresses'
        }
    },
    {
        $match: {
            name: /w$/
        }
    }
]);



-