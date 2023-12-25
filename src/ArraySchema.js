export default class ArraySchema {
  validators = [(val)=> Array.isArray(val)]

  constructor(newValidators){
    if(newValidators) this.validators = newValidators;
  }

  isValid(val){
    return this.validators.every((validator) => validator(val));
  }
  length(num){
    const lengthValidator = (array) => array.length === num;
    this.validators.push(lengthValidator);
    return new ArraySchema([...this.validators, lengthValidator]);
  }
}