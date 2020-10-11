const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req,res) => {
    res.json({posts: {title: 'my post here', description: 'some text here again and again'}})
    //res.send(req.user)
    //User.findbyOne({_id: req.user})
});


module.exports = router;