const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {

        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
                return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in! '});
            return;
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});