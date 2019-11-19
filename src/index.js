import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './css/styles.css'
import imageDefaut from './images/lotus.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgArrowLeft from './images/back.svg'
import imgArrowRight from './images/next.svg'
import { navigate } from "@reach/router"


export default class MasspaMenuCategory extends Component {
  constructor(props) {
    super(props)
    this.nextMenuCategory = this.nextMenuCategory.bind(this)
    this.previousMenuCategory = this.previousMenuCategory.bind(this)
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    sizeImage: PropTypes.number.isRequired,
    borderImage: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    mode: PropTypes.number.isRequired,
    animation: PropTypes.string.isRequired,
    colorTitle: PropTypes.string.isRequired
  }



  nextMenuCategory() {
    this.sliderMenuServices.slickNext();
  }
  previousMenuCategory() {
    this.sliderMenuServices.slickPrev();
  }

  searchMenuFeature(menu, menuServicesFeature) {
    // menu cha
    if (menu.featured === 1) {
      menuServicesFeature.push({
        code: menu.code,
        description: menu.description,
        featured: menu.featured,
        id: menu.id,
        image: menu.image,
        name: menu.name
      })
      // menu con
      if (menu.subMenu.length !== 0) {
        return menu.subMenu.fulfillmentValue.map((subMenu) => {
          return this.searchMenuFeature(subMenu, menuServicesFeature)
        })
      } else { }
    } else {
      // menu con khi cha khong la dich vu noi bat
      if (menu.subMenu.length !== 0) {
        return menu.subMenu.fulfillmentValue.map((subMenu) => {
          return this.searchMenuFeature(subMenu, menuServicesFeature)
        })
      } else { }
    }

  }

  renderMenuFeature() {
    const { data, sizeImage, borderImage, borderRadius, mode, animation, colorTitle, link } = this.props;
    if (data.length !== 0) {
      let menuServicesFeature = [];
      data.map((menu, i) => {
        return this.searchMenuFeature(menu, menuServicesFeature)
      })

      if (menuServicesFeature.length !== 0) {
        if (menuServicesFeature.length > 4) {
          // hien thi slide
          let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            pauseOnHover: false,
            arrows: false,
            responsive: [
              {
                breakpoint: 767.98,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]

          };

          return (
            <div className="masspa-menu-category-slide-container">
              <Slider ref={c => (this.sliderMenuServices = c)} {...settings} >
                {menuServicesFeature.map((service, i) => {
                  if (service.image === "") {
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else if (animation === 'rotate') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                          
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                                                          
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                             <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        )
                      }

                    } else {
                      if (animation === 'zoom') {
                        return (
                          <div className="masspa-menu-category-container masspa-menu-category-zoom" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else if (animation === 'rotate') {
                        return (
                          <div className="masspa-menu-category-container masspa-menu-category-rotate" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        )
                      } else {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>

                        )
                      }

                    }
                  } else {
                    // xet co anh
                    if (mode === 2) {
                      if (animation === 'zoom') {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else if (animation === 'rotate') {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        )
                      } else {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        )
                      }

                    } else {
                      if (animation === 'zoom') {
                        return (
                          <div className="masspa-menu-category-container  masspa-menu-category-zoom" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage,
                                
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>

                        )
                      } else if (animation === 'rotate') {
                        return (
                          <div className="masspa-menu-category-container  masspa-menu-category-rotate" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      }

                    }

                  }

                })
                }
              </Slider>
              <img className="masspa-menu-category-arrow-left" src={imgArrowLeft} onClick={this.previousMenuCategory} />
              <img className="masspa-menu-category-arrow-right" src={imgArrowRight} onClick={this.nextMenuCategory} />
            </div>
          )
        } else {
          // khong hien thi slide
          return (
            <div className="masspa-menu-category-row">
              {menuServicesFeature.map((service, i) => {
                if (service.image === "") {
                  if (mode === 2) {
                    if (animation === 'zoom') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    }

                  } else {
                    if (animation === 'zoom') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={imageDefaut} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    }

                  }
                } else {
                  // xet co anh
                  if (mode === 2) {
                    if (animation === 'zoom') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                              <span className="masspa-menu-category-overlay-2">
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-02"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                                <div className="masspa-menu-category-title-2" style={{color: colorTitle}}>{service.name}</div>
                              </span>
                            </a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    }

                  } else {
                    if (animation === 'zoom') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-zoom"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>

                          <div className="masspa-menu-category-container">
                          <a href={`${link}${service.id}`}  className="masspa-menu-link masspa-menu-category-rotate"
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </a>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="ms-menu-col-sm-12 ms-menu-col-md-3 ms-menu-col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                          <div className="masspa-menu-link "
                              style={{
                                width: sizeImage + 'px',
                                height: sizeImage + 'px',
                                borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                border: borderImage
                              }}
                             
                            >
                                <img src={service.image} alt={service.name} className="masspa-menu-category-image-01"
                                  style={{
                                    width: sizeImage + 'px',
                                    height: sizeImage + 'px',
                                    borderRadius: borderRadius === 'rounded' ? '50%' : borderRadius,
                                  }}
                                />
                            </div>

                            <a href={`${link}${service.id}`} className="masspa-menu-category-title-1" style={{color: colorTitle}}>{service.name}</a>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}

                          </div>
                        </div>

                      )
                    }

                  }

                }

              })
              }
            </div>
          )
        }
      } else {
        return <div></div>
      }
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div >
        {this.renderMenuFeature()}
      </div>
    )

  }
}

MasspaMenuCategory.defaultProps = {
  sizeImage: 140,
  borderImage: 'none',
  borderRadius: '0px',
  data: [],
  mode: 1,
  animation: 'zoom',
  link: `/category/?categoryId=`,
  colorTitle: '#141517'
}