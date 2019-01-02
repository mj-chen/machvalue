import React, {Component} from 'react';
import Gallery from './gallery';


class ArticleWithGallery extends Component {
  constructor(props) {
    super(props);
    this.articleRef = React.createRef();
    this.state = {
      slideIndex: 1,
      article: this.props.articleContent
    };
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }

  currentSlide = i => {
    this.showSlides(i);
  };

  plusSlides = n => {
    this.showSlides(this.state.slideIndex + n);
  };

  showSlides = n => {
    if (this.articleRef.current) {
      const slidesLength = this.state.article.images.length;
      let trueIndex = n;
      if (n > slidesLength) {
        trueIndex = 1;
      } else if (n < 1) {
        trueIndex = slidesLength;
      }
      this.setState({ slideIndex: trueIndex }, () => {
        this.toggleSlides(this.state.slideIndex);
      });
    }
  };
  toggleSlides = index => {
    const gallery = this.articleRef.current.gallery;
    const slides = Array.from(gallery.current.querySelectorAll(".mySlides"));
    const dots = Array.from(gallery.current.querySelectorAll(".demo"));
    slides.map(slide => {
      slide.classList.add("hidden");
    });
    dots.map(dot => {
      dot.classList.remove("active");
    });
    slides[index - 1].classList.remove("hidden");
    dots[index - 1].classList.add("active");
  };

  render() {
    const { article } = this.state;
    return (
      <article>
        <h5>{article.title}</h5>
        <Gallery
          imgs={article.images}
          ref={this.articleRef}
          currentSlide={n => this.currentSlide(n)}
          plusSlides={n => this.plusSlides(n)}
        />
        <p>{article.text}</p>
      </article>
    );
  }
}

export default ArticleWithGallery;