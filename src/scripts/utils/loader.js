function loaderHandler() {
  const loader = document.querySelector(".loader")
  loader.classList.toggle("active")
  window.scrollTo(0, 0)
}

export default loaderHandler