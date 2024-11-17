const Joi = require('joi');

const vitalSignsValidationSchema = Joi.object({
    B_P: Joi.string().pattern(new RegExp(/^\d{1,3}\/\d{1,3}$/)).required().messages({
        'string.base': 'Blood pressure must be a string.',
        'string.pattern.base': 'Blood pressure must be in the format of "120/80".',
        'any.required': 'Blood pressure is required.'
    }),
    temperature: Joi.number().min(30).max(45).required().messages({
        'number.base': 'Temperature must be a number.',
        'number.min': 'Temperature cannot be less than 30°C.',
        'number.max': 'Temperature cannot exceed 45°C.',
        'any.required': 'Temperature is required.'
    }),
    heart_rate: Joi.number().integer().min(30).max(200).required().messages({
        'number.base': 'Heart rate must be a number.',
        'number.min': 'Heart rate cannot be less than 30 beats per minute.',
        'number.max': 'Heart rate cannot exceed 200 beats per minute.',
        'any.required': 'Heart rate is required.'
    }),
    pulse_rate: Joi.number().integer().min(30).max(200).required().messages({
        'number.base': 'Pulse rate must be a number.',
        'number.min': 'Pulse rate cannot be less than 30 beats per minute.',
        'number.max': 'Pulse rate cannot exceed 200 beats per minute.',
        'any.required': 'Pulse rate is required.'
    }),
    respiratory_rate: Joi.number().integer().min(10).max(60).required().messages({
        'number.base': 'Respiratory rate must be a number.',
        'number.min': 'Respiratory rate cannot be less than 10 breaths per minute.',
        'number.max': 'Respiratory rate cannot exceed 60 breaths per minute.',
        'any.required': 'Respiratory rate is required.'
    }),
    oxygen_saturation: Joi.number().integer().min(0).max(100).required().messages({
        'number.base': 'Oxygen saturation must be a number.',
        'number.integer': 'Oxygen saturation must be an integer.',
        'number.min': 'Oxygen saturation cannot be less than 0%.',
        'number.max': 'Oxygen saturation cannot exceed 100%.',
        'any.required': 'Oxygen saturation is required.'
    }),
    priority_level: Joi.string().max(255).required().messages({
        'string.base': 'Priority level must be a string.',
        'string.max': 'Priority level cannot exceed 255 characters.',
        'any.required': 'Priority level is required.'
    }),
    vitals_note: Joi.string().max(1000).required().messages({
        'string.base': 'Vitals note must be a string.',
        'string.max': 'Vitals note cannot exceed 1000 characters.',
        'any.required': 'Vitals note is required.'
    })
});

// Example function to validate vital signs data
const validateVitalSigns = async (data) => {
    return vitalSignsValidationSchema.validateAsync(data, { abortEarly: false });
};

module.exports = {
    validateVitalSigns
};