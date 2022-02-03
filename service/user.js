const router = require('express').Router();

const { request } = require('express');
const User = require('../model/user.model');
// Get all user 
router.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user);
});
// Get single user
router.get('/:id', async (req, res) => {
    

    const user = await User.find({ _id: req.params.id });
    res.send(user);
});
// Create User
router.post('/', async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.send({ status: true, error: 'user already exists' });

    user = new User(req.body)

    await user.save();
    res.send({ data: user, status: true });
})
//Upadte user
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        {
            _id: req.params.id,

        },
        { $set: req.body }, { new: true });
    res.send(user);

})
// delete user
router.delete('/:id', async (req, res) => {
    

    const user = await User.findByIdAndRemove({ _id: req.params.id });
    res.send(user);
});

module.exports = router;

