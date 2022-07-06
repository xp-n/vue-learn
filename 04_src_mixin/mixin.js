const hunhe = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('mounted')
  },
}
const hunhe2 = {
  data() {
    return {
      x: 100,
      y: 200
    }
  }
}
export { hunhe, hunhe2 }