const express =require('express')
const router= express.Router();
const student = require('../Controllers/StudentApi')

router.post('/createStudent', student.register)
router.post('/posttime', student.timeEntrie)
router.get('/getStudent', student.getstudentbytime)


module.exports=router;