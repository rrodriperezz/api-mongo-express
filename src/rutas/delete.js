const { Router } = require(`express`);
const router = Router();
const format = require(`../modules/format`);
const byId = require("../modules/byId");

// Delete by Id or Name
router.delete(`/:id`, byId, async (req, res) => {
    try {
        await res.document.remove();
        res.json({ message: 'Deleted correctly'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;    