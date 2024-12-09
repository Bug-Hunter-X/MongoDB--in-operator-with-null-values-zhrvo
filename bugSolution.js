```javascript
// Correct usage of $in operator, removing null values
db.collection.find({ field: { $in: [1, 2] } });

//Alternative solution: using $or operator
db.collection.find({ $or: [{ field: 1 }, { field: 2 }, { field: null }]});
```