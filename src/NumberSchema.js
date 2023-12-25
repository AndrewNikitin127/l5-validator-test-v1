export default class NumberSchema {
  validators = [(val)=> Number.isFinite(val)]

  constructor(newValidators){
    if(newValidators) this.validators = newValidators;
  }

  isValid(val){
    return this.validators.every((validator) => validator(val));
  }
  even(val){
    const evenValidator = (val) => val % 2 === 0;
    return new NumberSchema([...this.validators, evenValidator]);
  }
  odd(val){
    const evenValidator = (val) => val % 2 !== 0;
    return new NumberSchema([...this.validators, evenValidator]);
  }
}