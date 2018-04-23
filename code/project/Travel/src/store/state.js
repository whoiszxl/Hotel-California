let defaultCity = '萍乡'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaultCity
}
