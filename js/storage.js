let root = document.documentElement;

const storedColourData = localStorage.getItem('colour')

const defaultColours = {
  accent: "#993abc",
  accent2: "#5e1a78",
  bg: "#030617",
  textcolour: "#ffffff"
};

if (storedColourData) {
  const colourData = JSON.parse(storedColourData)
  console.log(colourData)
} else {
  console.log('User data not found in local storage. Filling user data with default colours')
  localStorage.setItem('colour', JSON.stringify(defaultColours))
  const colourData = JSON.parse(localStorage.getItem('colour'))
  console.log(colourData)
}

