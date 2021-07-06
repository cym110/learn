// dinerLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(1 0).eat('junk food'); 
// Hi I am Tony// 等待了 5 秒... 
// I am eating lunch 
// I am eating dinner 
// 等待了 10 秒... 
// I am eating junk food
class LazyManClass{
  constructor(name) {
    this.name = name
    console.log(console.log('I\'m ' + this.name))
    this.quene = []
    setTimeout(()=>{
      this.next()
    },0)
    return this
  }
  eat(fan){
    const fn = () => {
      console.log('I am eating ' + fan)
      this.next()
    }
    this.quene.push(fn)
    return this
  }
  sleepFirst(wait){
    const fn = ()=>{
      setTimeout(() => {
        console.log('睡了' + wait/1000 + '秒')
        this.next()
      },wait)
    }
    this.quene.unshift(fn)
    return this
  }
  sleep(wait){
    const fn = () => setTimeout(() => {
      console.log('睡了' + wait/1000 + '秒')
      this.next()
    },wait)
    this.quene.push(fn)
    return this
  }
  next(){
    let fn = this.quene.shift()
    fn && fn()
  }
}

let lazyMan = function(name){
  return new LazyManClass(name)
} 
lazyMan('LL').eat('breakFirst').sleepFirst(10000).sleep(10000).eat('lunch').sleep(5000).eat('dinner')