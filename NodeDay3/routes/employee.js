var express = require("express");
var router = express.Router();
var employeeModule = require('../module/employeeModule');

router.get("/get", employeeModule.getEmployee);
router.get("/get/:id", employeeModule.getEmployee_one);
router.post("/create", employeeModule.createEmployee);
router.put("/update/:id", employeeModule.updateEmployee);
router.delete("/delete/:id", employeeModule.deleteEmployee);





module.exports = router;