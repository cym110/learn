function newCall(_this){
  // let _this = arguments[0]
  _this = _this || window
  _this.fn = this
  let arr = []
  // let arr = Array.prototype.slice.call(arguments,1)
  for(let i=1; i<arguments.length;i++){
    arr.push(arguments[i])
  }
  let result = _this.fn(...arr)
  delete _this.fn
  return result
}
let obj = {
  name: 'obj111',
  fn1:function(){
    console.log(this.name)
  }
}
function ct(a,b){
  console.log(this.name,a,b)
}
var name = 'window'
Function.prototype.newCall = newCall
ct.newCall(obj,1,2)
obj.fn1.newCall(window)


function newApply(_this, args){
  _this = _this || window
  _this.fn = this
  args = args || []
  let result = _this.fn(...args)
  delete _this.fn
  return result
}

function newBind(_this){
  var _this = _this || window
  var that = this
  //确认调用newBind的对象是不是一个函数
  if(typeof this !== 'function'){
    throw new Error(this + '不是一个函数')
  }
  // 参数处理
  var args = Array.prototype.slice.call(arguments,1)
  var F = function(){
    //bind函数返回函数arguments
    var _args = [].prototype.slice.call(arguments,0)
    // 1.改变this指向
    //2. 如果是使用new调用，忽略bind函数的this，执行构造函数new的this
    return that.apply(this instanceof that ? this : _this,args.concat(_args))
  }
  //返回的函数原型指向原函数的空实例
  F.prototype = Object.create(that.prototype)
  return F
}

// Object.create
Object.create = function(proto){
  var F  = function(){}
  F.prototype = proto
  return new F()
}

//生成一个新对象
// 将对象的原型引用(__proto__)指向构造函数的原型
// 绑定 this 为该对象，执行构造函数中的内容
// 如果函数执行的返回值是对象，就返回这个对象，否则返回之前创建的新对象
function myNew(fn,...rest){
  var obj = Object.create(fn.prototype)
  let newobj = fn.apply(obj,rest)
  return newobj instanceof Object ? newobj : obj
}

//instanceof
//判断构造函数的原型是否在对象的原型链上
// a instanceof Object
function myInstanceof(obj,fn){
  const proto = fn.prototype
  const objProto = obj.__proto__
  while(true){
    if(objProto === null){
      return false
    }
    if(objProto === proto){
      return true
    }
    objProto = objProto.__proto__
  }
}

