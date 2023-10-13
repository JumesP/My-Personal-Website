function test() {
    document.getElementById("demo").innerText = "Hello World!";
    
}

var myPhone = {
    make : "Apple",
    model : "IPhone 4",
    warranty : 12,
    colour : "White"
};


console.log(myPhone);
console.log(myPhone.model);

var secondPhone = myPhone;
secondPhone.warranty = 2; // this will change myPhone aswell bc second is set with =
console.log(secondPhone)

// object using new

var myNewPhone = new Object();
myNewPhone.make = "Apple";
myNewPhone.model = "IPhone X"
myNewPhone.warranty = 12;
myNewPhone.colour = "Black"

console.log(myNewPhone)

// object using constructor

function phone(make, model, warranty, colour) {
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
    this.extendWarranty = function(x) {
        this.warranty += x;
    }
}

var theNewPhone = new phone("Apple", "IPhone X", 12, "Blue");

console.log(theNewPhone)