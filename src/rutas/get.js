const { Router } = require(`express`);
const router = Router();
const format = require(`../modules/format`);
const byId = require("../modules/byId");

// Get All
router.get(`/`, async (req, res) => {
    try {
        const document = await format.find();
        res.json(document);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
});

// Get by Id or Name
router.get(`/:id`, byId, (req, res) => {
    res.send(res.document)
});

module.exports = router;