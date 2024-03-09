const mongoose = require('mongoose');

const fields = { name: String }

const Student = mongoose.model('Students', fields);

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const student = new Student({
    name: "Debs"
});

student.save().then(() => console.log('inserted')).catch(e => console.log(e.message)); //insert