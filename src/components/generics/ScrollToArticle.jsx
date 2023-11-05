
const ScrollToArticle = () => {

  if (window.innerWidth < 992) {
    window.scrollTo(0, 0);
  } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    window.scrollTo({ top: 250, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }

  window.addEventListener('resize', ScrollToArticle);

  return null
}

export default ScrollToArticle