const Joi = require('joi');

const emergencyPatientValidationSchema = Joi.object({
    patient_temporary_id: Joi.string().max(255).allow(null, '').messages({
        'string.base': 'Patient temporary ID must be a string.',
        'string.max': 'Patient temporary ID cannot exceed 255 characters.'
    }),
    emergency_time: Joi.string().pattern(new RegExp(/^\d{2}:\d{2}$/)).required().messages({
        'string.base': 'Emergency time must be a string.',
        'string.pattern.base': 'Emergency time must be in the format hh:mm.',
        'any.required': 'Emergency time is required.'
    }),
    emergency_first_name: Joi.string().max(255).required().messages({
        'string.base': 'Emergency first name must be a string.',
        'string.max': 'Emergency first name cannot exceed 255 characters.',
        'any.required': 'Emergency first name is required.'
    }),
    emergency_middle_name: Joi.string().max(255).allow(null, '').messages({
        'string.base': 'Emergency middle name must be a string.',
        'string.max': 'Emergency middle name cannot exceed 255 characters.',
        'any.required': 'Emergency middle name is required.'
    }),
    emergency_last_name: Joi.string().max(255).required().messages({
        'string.base': 'Emergency last name must be a string.',
        'string.max': 'Emergency last name cannot exceed 255 characters.',
        'any.required': 'Emergency last name is required.'
    }),
    emergency_extension: Joi.string().max(10).allow(null, '').messages({
        'string.base': 'Emergency extension must be a string.',
        'string.max': 'Emergency extension cannot exceed 10 characters.'
    }),
    emergency_sex: Joi.string().valid('Male', 'Female').allow(null, '').messages({
        'string.base': 'Sex must be either Male or Female.',
        'any.only': 'Sex must be either Male or Female.'
    }),
    emergency_age: Joi.number().integer().min(0).max(120).allow(null).messages({
        'number.base': 'Emergency age must be a number.',
        'number.min': 'Emergency age cannot be less than 0.',
        'number.max': 'Emergency age cannot exceed 120.'
    }),
    emergency_reason: Joi.string().max(1000).allow(null, '').messages({
        'string.base': 'Emergency reason must be a string.',
        'string.max': 'Emergency reason cannot exceed 1000 characters.'
    }),
    status: Joi.string().max(255).allow(null, '').messages({
        'string.base': 'Status must be a string.',
        'string.max': 'Status cannot exceed 255 characters.'
    })
});

// Example function to validate data
const validateEmergencyPatient = async (data) => {
    return emergencyPatientValidationSchema.validateAsync(data, { abortEarly: false });
};

module.exports = {
    validateEmergencyPatient
};