import Link from "next/link";
import Seo from "../../components/common/Seo";
import Awards from "../../components/home-page/home-9/Awards";
import Block from "../../components/home-page/home-9/Block";
import ContactForm from "../../components/home-page/home-9/ContactForm";
import Counter from "../../components/home-page/home-9/Counter";
import Education from "../../components/home-page/home-9/Education";
import Header from "../../components/home-page/home-9/Header";
import Hero from "../../components/home-page/home-9/Hero";
import Portfolio from "../../components/home-page/home-9/Portfolio";
import ProjectBanner from "../../components/home-page/home-9/ProjectBanner";
import Sidebar from "../../components/home-page/home-9/Sidebar";
import Skills from "../../components/home-page/home-9/Skills";
import Testimonial from "../../components/home-page/home-9/Testimonial";
import Tools from "../../components/home-page/home-9/Tools";
import Social from "../../components/home-page/home-9/Social";

const PersonalPortfolio = () => {
  return (
    <>
      <Seo pageTitle="Zing Edutech:" />

      {/* <!-- 
        =============================================
        Sidebar Nav
        ============================================== 
        --> */}
      {/* <Sidebar /> */}

      {/* <!--  =============================================
        Theme Header4 Menu
        ============================================== 	--> */}
      <Header />

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <Hero />

      {/* 
			=============================================
				Feature Section Twelve
			============================================== 
			*/}


      {/* 
			=============================================
				Portfolio Gallery One
			============================================== 
			*/}
      <div
        className="portfolio-gallery-one position-relative mt-150 pt-100 xl-pt-50 md-mt-80"
        style={{ backgroundColor: '#05c46b'}}
        id="s2"
        data-aos="fade-up"
      >
        <div className="m-auto">
          <div className="title-style-six text-center " >
            <h2 className="main-title fw-500" style={{color:'white'}}>
              Zing Education Program
            </h2>
          </div>
          {/* /.title-style-six */}
        </div>
        <img
          src="/images/shape/shape_60.svg"
          alt="shape media"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_61.svg"
          alt="shape media"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_62.svg"
          alt="shape media"
          className="lazy-img shapes shape-three"
        />
        <Portfolio />
        {/* /.container */}
      </div>

      {/* 
			=============================================
				Feature Section Thirteen
			============================================== 
			*/}
      <div
        className="fancy-feature-thirteen position-relative mt-250 mb-150 lg-mt-120 lg-mb-100"
        id="s4"
      >
        
      </div>

      {/* 
			=============================================
				Counter Section One
			============================================== 
			*/}
      

      {/*
			=====================================================
			Feedback Section Four
			=====================================================
			*/}
      

      {/*
			=====================================================
				Fancy Short Banner Five
			=====================================================
			*/}
      

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
                <Link href="/">
                  <img src="/images/logo/izinz.png" alt="" width={200} />
                </Link>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
              <a
                href="mailto:zingedutech@gmail.com"
                className="mail d-flex align-items-center"
              >
                <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <i className="far fa-envelope" />
                </span>
                <span>zingedutech@gmail.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </>
  );
};

export default PersonalPortfolio;
