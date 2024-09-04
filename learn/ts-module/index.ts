/**
 *  TS v1.5 之前使用 module
 *  TS v1.5 之后使用 namespace，防止和 es6 中的模块系统混淆
 */
export namespace MyNamespace {
  export interface MyInterface {
    myProperty: string;
  }

  export class MyClass {
    constructor(public myProperty: string) {
      this.myProperty = myProperty;
      console.log("MyClass constructor");
    }
  }
}
