const isJson = (json) => {
    try {
        return JSON.parse(json)
      } catch (error) {
        console.error(error);
        return false
      }
}

module.exports = {
    isJson
}