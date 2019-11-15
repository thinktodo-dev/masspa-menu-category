import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './css/styles.css'
import './css/bootstrap.css'
import styled from 'styled-components';
import imageDefaut from './images/lotus.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgArrowLeft from './images/back.svg'
import imgArrowRight from './images/next.svg'


function getBorderRadius(value) {
  return `border-radius: ${value}%;`
}

function setImagePosition(value) {
  if (value === 2) {
    return (`transform : translate(-53%,-60%);`)
  } else {
    return (`transform : translate(-50%,-50%);`)
  }
}

const MasspaMenuLink02 = styled.a`
    background-color: #ddd;
    position: relative;
    display: block;
    margin: 0px auto;
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
    border: ${props => props.borderImage};
    z-index: 3;
    overflow: hidden;
    cursor:pointer

    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }

    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
    }

`

const MasspaMenuLink01 = styled.div`
    background-color: #ddd;
    position: relative;
    display: block;
    margin: 0px auto;
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};
    border: ${props => props.borderImage};
    z-index: 3;
    overflow: hidden;
    cursor:pointer

    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }

    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
    }

`
const MasspaMenuImage = styled.img`
    object-fit: cover;
    position: absolute;
    left: 50%;
    ${({ mode }) => (mode === 1 ? "top:50%" : "top:0%")};
    ${({ mode }) => (mode === 1 ? setImagePosition(1) : setImagePosition(2))};
    width: ${props => props.sizeImage + 'px'};
    height: ${props => props.sizeImage + 'px'};
    z-index: -1;
    ${({ borderRadius }) => (borderRadius === 'rounded' ? getBorderRadius(50) : `border-radius: ${borderRadius}`)};

   

    @media only screen and (max-width: 767.98px) and (min-width: 457px){
      width: ${props => props.sizeImage * 2 + 'px'};
      height: ${props => props.sizeImage * 2 + 'px'};
    }

    @media only screen and (max-width: 456.98px) {
      width: 200px;
      height: 200px;
    }
`
const ArrowLeft = styled.img`
    position : absolute;
    top: 30%;
    left: 0%;
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
   
`

const ArrowRight = styled.img`
    position : absolute;
    top: 30%;
    right: 0%;
    width: 20px;
    height: 20px;
    z-index: 2;
    cursor: pointer;
`

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

  handleClick(id, link) {

    if (typeof navigate !== `undefined`) {
      navigate(`${link}${id}`)
    }
  }

  renderMenuFeature() {
    const { data, link, sizeImage, borderImage, borderRadius, mode, animation } = this.props;
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
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )
                            }
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else if (animation === 'rotate') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )
                            }
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )
                            }
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      }

                    } else {
                      if (animation === 'zoom') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>

                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )
                            }

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else if (animation === 'rotate') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )
                            }
                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )
                            }
                            <div className="masspa-menu-category-title-1">{service.name}</div>
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
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else if (animation === 'rotate') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      }

                    } else {
                      if (animation === 'zoom') {
                        return (

                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>


                        )
                      } else if (animation === 'rotate') {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      } else {
                        return (
                          <div className="masspa-menu-category-container" key={i}>
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>

                        )
                      }

                    }

                  }

                })
                }
              </Slider>
              <ArrowLeft src={imgArrowLeft} onClick={this.previousMenuCategory} />
              <ArrowRight src={imgArrowRight} onClick={this.nextMenuCategory} />
            </div>
          )
        } else {
          // khong hien thi slide
          return (
            <div className="row w-100 mx-auto">
              {menuServicesFeature.map((service, i) => {
                if (service.image === "") {
                  if (mode === 2) {
                    if (animation === 'zoom') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    }

                  } else {
                    if (animation === 'zoom') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  >
                                <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage}  >
                                  <MasspaMenuImage src={imageDefaut} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
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
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <span className="masspa-menu-category-overlay-2">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                  <div className="masspa-menu-category-title-2">{service.name}</div>
                                </span>
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <span className="masspa-menu-category-overlay-2">
                                    <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                    <div className="masspa-menu-category-title-2">{service.name}</div>
                                  </span>
                                </MasspaMenuLink02>
                              )}

                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    }

                  } else {
                    if (animation === 'zoom') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-zoom">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else if (animation === 'rotate') {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>

                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} className="masspa-menu-category-rotate">
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
                            {service.description !== null ? <div className="masspa-menu-category-text" dangerouslySetInnerHTML={{ __html: `${service.description}` }}></div> : <div></div>}
                          </div>
                        </div>

                      )
                    } else {
                      return (
                        <div className="col-sm-12 col-md-3 col-lg-3" key={i}>
                          <div className="masspa-menu-category-container">
                            {(typeof navigate !== `undefined`) ? (
                              <MasspaMenuLink01 onClick={() => this.handleClick(service.id, link)} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                              </MasspaMenuLink01>
                            ) : (
                                <MasspaMenuLink02 href={`${link}${service.id}`} sizeImage={sizeImage} borderRadius={borderRadius} borderImage={borderImage} >
                                  <MasspaMenuImage src={service.image} alt={service.name} sizeImage={sizeImage} borderRadius={borderRadius} mode={mode} />
                                </MasspaMenuLink02>
                              )}

                            <div className="masspa-menu-category-title-1">{service.name}</div>
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
    const { data, sizeImage, link } = this.props
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
  link: `/category/?categoryId=`
}