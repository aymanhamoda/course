import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/styles/tailwind.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="keywords"
            content=" Clinical pharmacy practice ONLINE courses, Academix , nutrition facts ,diet and nutrition facts ,free nutrition journals, nutrition definition , nutrition facts from recipe , us food nutrition database ,nutrition file , health and nutrition, nutrition panel , nutrition food list , nutrition meaning , nutrition data calculator , nutrition websites , food and nutrition , on nutrition , my nutrition plan ,nutritional value of foods list , google nutrition , journal of nutrition , what is nutrition , nutrition plan , www nutrition com , how to nutrition your body , top nutrition websites , parenteral nutrition definition, total parenteral nutrition , parenteral nutrition guidelines 2018 , enteral nutrition , pediatric nutrition guidelines 2018 , parenteral nutrition , parenteral nutrition definition , enteral nutrition contraindications , Chinese herbal medicine courses UK , herbal medicine courses online free , herbal medicine courses , herbal remedy courses , best online herbalism course , course contents of diploma in herbal medicine in Egypt , course spec history of traditional herbal medicine , course spec history of traditional herbal medicine pdf , herbal cosmetics course specifications , herbal cosmetics practical course , herbal cosmetics practical course , quality control of herbal drugs practical course oncology pharmacist course, independent prescribing course pharmacist, skin hair and nails , nature's bounty hair skin and nails , skin hair and nails vitamins , moisturizer for oily skin , oily skin , la Roche posay sunblock for oily skin ,oily skin cleanser , best face wash for oily skin , combination skin , best moisturizer for combination skin, best face wash for combination skin, best face moisturizer for combination skin, skin care courses online free, skin care courses, skin care courses in Egypt, skin specialists courses, herbal , herbal slim , pharmacotherapy, biomedicine and pharmacotherapy , pharmacotherapy a pathophysiologic approach 11th edition , pharmacy board certification , bcacp , board of pharmacy specialties , ambulatory care , oncology pharmacist , bcps certification , ambulatory care pharmacy , mybps pharmacy , ambulatory care pharmacy , nuclear pharmacy , biomedicine and pharmacotherapy ,pharmacotherapy casebook answers pdf ,oncology ,oncology, meaning ,atlas of operative surgical oncology pdf , hair skin and nails , advanced nutrition and dietetics in obesity ,nutrition and obesity ,nutrition and obesity pdf ,clinical pharmacy questions and answers pdf ,medicor medical clinic & pharmacy woo commerce WordPress theme nulled , medicor medical clinic & pharmacy woo commerce WordPress theme nulled ,American board of pharmacy in Egypt , bcps pharmacy, board of pharmacy specialist ,bcps pharmacy in Pakistan , bcps pharmacy exam, board of pharmacy specialties verification, can a retail pharmacist become board certified , bcps pharmacy exam questions , normal and clinical nutrition 9th edition pdf , clinical nutrition insight , clinical nutrition and dietetics books pdf , clinical nutrition experimental , clinical nutrition courses ,clinical nutrition espen , clinical nutrition espen impact factor, clinical nutrition book, clinical nutrition diploma, clinical nutrition degree, clinical nutrition and dietetics , quality process analyst certification ,drug design program "
          />
          <meta
            name="description"
            content="Clinical pharmacy practice ONLINE courses are carefully designed to target fields of clinical pharmacy, including pharmacotherapy from the practice perspective. Start clinical pharmacy practice from a point close to success"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KSZ3LTRMWP"
          />
          <script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KSZ3LTRMWP',{
                page_path: window.location.pathname,
              });
          `,
              }}
            />
          </script>
          <title>Clinical Pharmacy Courses</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}
