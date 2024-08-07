### What is Prototypal Interitance ?

-   Everything which is defined in a JavaScript will have an object called proto and sharing the proto object of one variable to another is called prototypal interitance.

-   Definition: Linking of prototypes of a parnet object to a child object to share and utilize properties of parnet class.

-   In JavaScript everything is an Object, so if we add a custom function the object then it will be accessible to the string as well as array which is subtype of object.

-   Single **proto** can inherit only one class

-   For multiple interitance we can chain protos together like **proto**.**proto**

#### Examples

```javascript
let faang = {
    name: "Apple",
    salary: function () {
        console.log("5000K Salary");
    },
};

let engineer = {
    empId: 11223,
    task: function () {
        console.log("Task Assigned");
    },
};

let engineer1 = Object.create(faang, {
    taskAssigned: { value: 2 },
});

//Object.getPrototypeOf
//Object.setPrototypeOf

engineer.__proto__ = faang;

console.log(engineer);
engineer.salary();
```

-   Property Shadowing

```javascript
const chai = {
    name: "chai",
    __proto__: { name: "tea" },
    __proto__: {__proto__: { type: "ginger" }}

// you can directly access type by chai.type instead of using __proto__
};
```

-   Monkey Patching: Do not add custome functions to the existing language objects cause future updates can override them and break your existing code.
