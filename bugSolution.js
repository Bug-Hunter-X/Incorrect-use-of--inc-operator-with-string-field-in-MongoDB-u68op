```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });
// Or, if the field is a string, convert it to a number before updating
db.collection.findOneAndUpdate({ name: "John" }, { $inc: { age: 1 } }, {returnOriginal: false, upsert: true});
// Alternative approach to update a string field
db.collection.updateOne({ name: "John" }, { $set: { age: parseInt(age) + 1 } }); 
```