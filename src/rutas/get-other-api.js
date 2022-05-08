const { Router } = require('express');
const router = Router();

const AnotherApi = 'https://jsonplaceholder.typicode.com/users';

//Test get info from another api
router.get('/', async (req, res) => {    
    const response = await fetch(AnotherApi);
    const users = await response.json();
    console.log(users);
    res.json(users);
});

module.exports = router;
