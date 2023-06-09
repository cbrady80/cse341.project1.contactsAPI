// When one of these specific routes is used, then we call the function in the controller/contacts.js

// Import Express package Router
const express = require('express');
const router = express.Router();
// Import controller - WEEK 2 - Contacts
const contactsController = require('../controllers/contacts');

// Import validation middleware - WEEK 6
const validation = require('../middleware/validate');

//Route for retreiving all contacts
router.get('/', contactsController.getAllContacts);

//Route for retreiving one single contact by id
router.get('/:id', contactsController.getContactById);

//Route for creating a new contact - POST
//router.post('/', contactsController.newContact);
router.post('/', validation.saveContact, contactsController.newContact); //added validation

//Route for updating an exsisting contact - PUT
//router.put('/:id', contactsController.updateContact);
router.put('/:id', validation.saveContact, contactsController.updateContact);  //added validation

//Route for deleting a contact - DELETE
router.delete('/:id', contactsController.deleteContact);


// Exports
module.exports = router;