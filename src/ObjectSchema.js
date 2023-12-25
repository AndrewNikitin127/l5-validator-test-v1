const keyLength = (obj) =>  Object.keys(obj).length;


export default class ObjectSchema {
  validatorsObject = null;

  constructor(newObjectValidator){
    if (newObjectValidator) this.validatorsObject  = newObjectValidator
  }

  shape(objectValidator){
    return new ObjectSchema(objectValidator);
  }
  isValid(inspectedObject){
    if (keyLength(inspectedObject) !== keyLength(this.validatorsObject)) return false;
    return Object.entries(inspectedObject).every(([key, val]) => this.validatorsObject[key].isValid(val) )
  }
}