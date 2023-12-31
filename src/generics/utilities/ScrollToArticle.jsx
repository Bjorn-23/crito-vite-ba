  //Scrolls to start of article on clicking a not already selected article.
const ScrollToArticle = () => {

 
  window.addEventListener('resize', ScrollToArticle);

  if (window.innerWidth < 992) {
    window.scrollTo(0, 0);
  } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    window.scrollTo({ top: 250, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }

  return null
}

export default ScrollToArticle