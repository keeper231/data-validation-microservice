const express = require('express');
const router = express.Router();
const { validateEmergencyPatient } = require('../validators/emergencyPatient');
const { validateVitalSigns } = require('../validators/vitalSigns');

router.post('/emergency-patient', async (req, res) => {
    try {
        const value = await validateEmergencyPatient(req.body);  // Use async validation here
        res.json({ message: 'Data is valid', data: value });
    } catch (error) {
        const errorMessages = error.details.map(err => err.message); // Collect all error messages
        return res.status(400).json({ errors: errorMessages });
    }
});

router.post('/vital-signs', async (req, res) => {
    try {
        const value = await validateVitalSigns(req.body); // Validate vital signs data
        res.json({ message: 'Vital signs data is valid', data: value });
    } catch (error) {
        const errorMessages = error.details.map(err => err.message); // Collect all error messages
        return res.status(400).json({ errors: errorMessages });
    }
});

module.exports = router;