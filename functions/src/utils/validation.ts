import * as Joi from 'joi';

// Form data validation schema
const formSchema = Joi.object({
  name: Joi.string().required().trim().min(2).max(100),
  email: Joi.string().required().email().trim(),
  subject: Joi.string().allow('').trim().max(200),
  message: Joi.string().required().trim().min(10).max(1000)
});

// Validate form data against schema
export const validateFormData = (data: any) => {
  return formSchema.validate(data, { abortEarly: false });
};