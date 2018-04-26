export default {
  changeCity (ctx, city) {
    this.state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
