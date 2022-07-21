import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import '../Player.css'
import ScrollToTop from 'react-scroll-to-top'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Footer from 'components/Footers/Footer.js'
export default function Index() {
  const goToAbout = () => {
    const aboutSection = document.getElementById('myCv')
    aboutSection.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  }
  const goToGift = () => {
    const aboutSection = document.getElementById('gift')
    aboutSection.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  }
  return (
    <>
      <IndexNavbar fixed />
      <ScrollToTop smooth />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-4xl text-gray-700">
                ICU Clinical Pharmacy WORKSHOP
              </h1>
              <h1 className="mt-4 text-lg leading-relaxed text-gray-600">
                أضخم مشروع تعليمي أونلاين لإعداد صيدلي إكلينيكي متميز في العناية
                المركزة
              </h1>
              <div className="mt-12">
                <a
                  href="https://www.udemy.com/course/worshope/?referralCode=D89A996599AD6702C170"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  Go to the course
                </a>
                <a
                  onClick={() => goToAbout()}
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank">
                  About me
                </a>
                <a
                  onClick={() => goToGift()}
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank">
                  Get Your Gift
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: 'translateZ(0)' }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="clinical pharmacy courses"
                  src={require('assets/img/photo.webp')}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"></polygon>
                  </svg>
                  <h1 className="text-xl font-bold text-white">
                    Learn Clinical Pharmacy Practice smoothly
                  </h1>
                  <p className="text-md font-light mt-2 text-white">
                    الفيديوهات مجزئة بطريقة واضحة .. تقدر تراجع الجزء أكثر من
                    مرة .. في أي وقت مش مضطر تلغي مواعيد أو تفضي وقتك لو فيه
                    حاجة مش فاهمها ممكن تسأل بسهولة
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h1 className="text-xl mb-1 font-semibold">
                        Clinical Pharmacist Argument
                      </h1>
                      <p className="mb-4 text-gray-600">
                        You will learn how to convince the medical team of your
                        clinical pharmacy recommendations through several
                        clinical pharmacist Discusion with the medical team{' '}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-desktop"></i>
                      </div>
                      <h1 className="text-xl mb-1 font-semibold">
                        Documentation of your clinical pharmacy recommendetions
                      </h1>
                      <p className="mb-4 text-gray-600">
                        Learn how to write, explain and priorities your clinical
                        pharmacy recommendations professionally{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-palette"></i>
                      </div>
                      <h1 className="text-xl mb-1 font-semibold">
                        Patient File Tips
                      </h1>
                      <p className="mb-4 text-gray-600">
                        You will learn the interpretation of the patient's file
                        from clinical pharmacy point of view and how to
                        priorities your clinical pharmacy recommendations.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-battery-full"></i>
                      </div>
                      <h1 className="text-xl mb-1 font-semibold">
                        Medication Error Scanning System
                      </h1>
                      <p className="mb-4 text-gray-600">
                        You will learn a clear clinical pharmacy plan to review
                        the patient medications in ICU
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '10%' }}>
          {' '}
          <row>
            <div
              className="text-gray-800"
              style={{ paddingBottom: '10%', textAlign: 'center' }}>
              <h1 className="text-3xl font-bold">
                ICU Clinical Pharmacy WORKSHOP Course
              </h1>
            </div>
            <>
              <div className="player-wrapper">
                <ReactPlayer
                  url="\videos\1.mp4"
                  controls
                  width="100%"
                  height="100%"
                  playing
                  className="react-player"
                  light={require('assets/img/01.jpg')}
                />
              </div>
            </>
            <div
              className="text-gray-800"
              style={{ paddingTop: '25px', textAlign: 'center' }}>
              <h1 className="text-xl font-semibold">
                Now, change your life, upgrade your knowledge and shortened a
                long time in clinical pharmacy free online course and start
                clinical pharmacy practice from a point close to the expertize
              </h1>
            </div>
          </row>
        </div>
        {/* <div
          style={{ maxWidth: '90%', paddingLeft: '20%', paddingTop: '50px' }}>
          <row>
            <>
              <div className="player-wrapper">
                <ReactPlayer
                  url="\videos\01_promotion.mp4"
                  controls
                  width="100%"
                  height="100%"
                  playing
                  className="react-player"
                  light={require('assets/img/01_promotion.webp')}
                />
              </div>
            </>
            <div
              className="text-gray-800"
              style={{ paddingTop: '25px', textAlign: 'right' }}>
              <h6 className="text-xl mb-1 font-semibold">
                البرنامج هيقربك من مريضك، هيحس باهتمامك بيه، واستحضارك لتفاصيل
                حالته كل مرة بيجيلك فيها .. مريضك 😍 هيحبك
              </h6>
            </div>
          </row>
        </div> */}

        <div className="container mx-auto">
          <div className="items-center">
            <div className="px-4">
              <div
                className="text-gray-800 pt-5"
                style={{ padding: '10%', textAlign: 'center' }}>
                <h1 className="text-3xl font-bold">
                  Reviews of ICU Clinical Pharmacy WORKSHOP Course
                </h1>
              </div>
              <div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      alt="clinical pharmacy courses"
                      src={require('assets/img/reviews/1.jpg')}
                      className="w-full align-middle rounded-t-lg"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      alt="clinical pharmacy courses"
                      src={require('assets/img/reviews/2.jpg')}
                      className="w-full align-middle rounded-t-lg"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <img
                      alt="clinical pharmacy courses"
                      src={require('assets/img/reviews/3.jpg')}
                      className="w-full align-middle rounded-t-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container mx-auto pb-32 pt-24"
          style={{ backgroundColor: 'white' }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h1 className="text-3xl font-semibold">
                  All Your Needs to deal with Clinical Pharmacy Practice in ONE
                  Shoot
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  The ICU Clinical Pharmacy workshop discusses individualized
                  pharmacotherapy, case studies, and hospital visits,
                  interpretation and evaluation of clinical studies,
                  re-evaluation of prescribed therapies in the light of
                  drug-drug or drug-food interactions. <br /> Now, learn
                  clinical pharmacy tips: assessment of benefit/risk ratio of
                  medication, clinical relevance of undesirable side effects,
                  drug interactions, incompatibilities, evaluation of
                  combination therapies, causes of variability in drug response,
                  therapeutic drug monitoring, dealing with patient records.
                  Compliance and non-compliance: Basic principles of
                  pharmaceutical care <br />
                  The ICU Clinical Pharmacy workshop contains real cases in
                  intensive care unit (ICU) .. all patient details .. admission
                  sheet .. progression sheet.. Medication sheet..
                  <br />
                  You can watch it and try to write your clinical pharmacy
                  recommendations .. then watch the discussion .. learn ..
                  engaged
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="clinical pharmacy, clinical pharmacy courses, "
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src={require('assets/img/goal.webp')}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="myCv" className="py-10 bg-gray-200 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h1 className="text-3xl text-gray-700 mb-2 font-semibold leading-normal text-white">
                Ayman Hamouda
              </h1>
              <p>
                I am a Clinical Pharmacist, ICU clinical pharmacy Speciality,
                with arround 10 years experiance as a clinical pharmacist. I
                have a passion in share my clinical pharmacy experiance and
                skills in little smart clinical pharmacy courses.
              </p>
              <a
                href="https://www.udemy.com/course/worshope/?referralCode=D89A996599AD6702C170"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                Start The Course
              </a>
            </div>
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <img
                src={require('assets/img/aymanhamouda.png')}
                alt="ayman hamouda"
              />
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative"></div>
          </div>
        </div>
      </section>

      <section id="gift" className="py-10 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h1 className="text-3xl text-gray-700 mb-2 font-semibold leading-normal text-white">
                Visitor GIFT
              </h1>
              <p>
                What a clinical pharmacist cannot afford to be ignorant of in
                the nutrition of an intensive care patient
              </p>
              <a
                href="https://www.udemy.com/course/little-nutrition/?couponCode=0BED9A3C5592AA978551"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg">
                Get the gift Now
              </a>
            </div>
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <img src={require('assets/img/02.jpg')} alt="ayman hamouda" />
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
