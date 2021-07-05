//1.原型链式继承
function Parents(name) {
  this.name = name
}
Parents.prototype.say = function(){
  console.log(`我是${this.name}`)
}
function Child(name){
  this.name = name
}
Child.prototype.constructor = Child;
Child.prototype = new Parents('parents')
Child.prototype.say = function(){
  console.log(`我是${this.name}`)
}
let child1 = new Child('child1')
console.log(child1)
//类式继承,继承父类构造函数的属性，无父类的原型
function Parents(name){
  this.pname = name
}
Parents.prototype.say = function(){
  console.log(`我是${this.name}`)
}
Parents.prototype.doSomthing = function() {
  console.log('parent do something!');
}
function Child(partentName){
  Parents.call(this,partentName)
}
Child.prototype.say = function(){
  console.log(`我是${this.pname}`)
}
let child1 = new Child('parent')
child1.say()
console.log(child1.pname)
child1.doSomthing()

// 组合式继承
function Parent(name){
  this.name = name
}
Parent.prototype.say = function(){
  console.log(`parent${this.name}`)
}
Parent.prototype.doSomething = function(){
  console.log(`do something`)
}
function Child(sname,pname){
  Parent.call(this,pname)
  this.sname = sname
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
Child.prototype.say = function(){
  console.log(`${this.sname}sname`)
}
let child2 = new Child('son','father')
console.log(child2)

//寄生组合继承
function Parent(name){
  this.name = name
}
Parent.prototype.say = function(){
  console.log(`parent${this.name}`)
}
Parent.prototype.doSomething = function(){
  console.log(`do something`)
}
function Child(sname,pname){
  Parent.call(this,pname)
  this.sname = sname
}
function create(proto){
  function F(){}
  F.prototype = proto
  return new F(proto)
}
Child.prototype = create(Parent.prototype)
Child.prototype.constructor = Child
Child.prototype.say = function(){
  console.log(`${this.sname}sname`)
}
let child2 = new Child('son','father')
console.log(child2)