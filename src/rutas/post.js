const { Router } = require(`express`);
const router = Router();
const format = require(`../modules/format`)

// Post by Id or name in endpoint
router.post(`/:_id`, async (req, res) => {
    const documento = new format({
       _id: req.params._id,
       name: req.body.name,
       test: req.body.test 
    })
    try {
        const newDocumento = await documento.save()
        res.status(201).json(newDocumento);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

// Post by Id or name in Json
router.post(`/`, async (req, res) => {
    const documento = new format({
       _id: req.body._id,
       name: req.body.name,
       test: req.body.test 
    })
    try {
        const newDocumento = await documento.save()
        res.status(201).json(newDocumento);
    } catch (err) {
        res.status(400).json(err.message);
    }
})

module.exports = router;