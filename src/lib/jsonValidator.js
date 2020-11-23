const isJson = (json) => {
    try {
        return JSON.parse(json).result
      } catch (error) {
        console.error(error);
        return false
      }
}

module.exports = {
    isJson
}