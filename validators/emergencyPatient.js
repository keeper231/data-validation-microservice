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
    priority_level: Joi.string().max(255).required().messages({
        'string.base': 'Priority level must be a string.',
        'string.max': 'Priority level cannot exceed 255 characters.',
        'any.required': 'Priority level is required.'
    }),
    status: Joi.string().max(255).allow(null, '').messages({
        'string.base': 'Status must be a string.',
        'string.max': 'Status cannot exceed 255 characters.'
    }),
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
    vitals_note: Joi.string().max(1000).required().messages({
        'string.base': 'Vitals note must be a string.',
        'string.max': 'Vitals note cannot exceed 1000 characters.',
        'any.required': 'Vitals note is required.'
    })
});

// Example function to validate data
const validateEmergencyPatient = async (data) => {
    return emergencyPatientValidationSchema.validateAsync(data, { abortEarly: false });
};

module.exports = {
    validateEmergencyPatient
};