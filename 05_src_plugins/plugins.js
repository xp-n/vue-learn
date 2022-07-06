export default {
  install(Vue) {
    Vue.filter('mySlice', function(value) {
      return value.slice(0, 4)
    })

    Vue.directive('fbind', {
      bind(element, binding) {
        element.value = binding.value
      },
      inserted(element) {
        element.focus()
      },
      updated(element, binding) {
        element.value = binding.value
      },
    })
    
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      } 
    })

    Vue.prototype.hello = () => alert('hello')
  }
}