module.exports.before = () => {
  
}

module.exports.queue = filename => {
  // You can modify subtitle or duration per image
  let subtitle
  let duration

  return {
    filename,
    duration,
    subtitle
  }
}

module.exports.after = (items, answer, outputPath) => {
  
}