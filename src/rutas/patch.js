const { Router } = require(`express`);
const router = Router();
const byId = require(`../modules/byId`)

// Patch by Id or Name
router.patch(`/:id`, byId, async (req, res) => {
    if (req.body.name != null) {res.document.name = req.body.name}
    if (req.body.test != null) {res.document.test = req.body.test}
    if (req.body.date != null) {res.document.date = req.body.date}    
    try {   
        const updated = await res.document.save();
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;