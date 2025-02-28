 

export default class BaseInputValidator {

  constructor(fieldName) {
    this.fieldName = fieldName;

    this._cachedValidatonResult = null;
  }

  clearError = (setFieldError) => {
    this.setCachedValidationResult(null);
    setFieldError(this.fieldName, null);
  };

  updateError = (setFieldError, errorMessage) => {
    this.setCachedValidationResult(errorMessage);
    setFieldError(this.fieldName, errorMessage);
  };

  getCachedValue = () => {
    return this._cachedValue;
  };

  setCachedValue = (value) => {
    this._cachedValue = value;
  };

  onExternalError = (details, setFieldError) => {
    setFieldError(this.fieldName, details);

    this.setCachedValidationResult(details);
  };

  getCachedValidationResult = () => {
    return this._cachedValidatonResult;
  };

  setCachedValidationResult = (value) => {
    this._cachedValidatonResult = value;
  };

  invalidateCachedValidationResult = () => {
    this._cachedValidatonResult = null;
  };
}
