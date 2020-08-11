import React, { useState, useEffect } from 'react';
import './App.css';
import { getContentfulNav } from './Queries/index';
import * as headings from './Styles/type';
import Layout from './Layout';
import HomepageSections from './Components/HomepageSections';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';


function App() {

  let [data, setData] = useState({});

  const getData = async () => {
    const theData = await getContentfulNav();
    setData(theData);
  }

  useEffect(() => {
    getData();
  }, [])

  if(data.fields) {
    return (
      <div>
        <headings.BannerImage>
          <img src={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title}/>
          <headings.HeaderTwo larger className='websiteSubtitle'>{data.fields.websiteSubtitle}</headings.HeaderTwo>
        </headings.BannerImage>

      <Layout>
        {/* <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne> */}
        <HomepageSections />
        <ContactMe />
        <Footer data={data}/>
      </Layout>
      </div>
    )
  }

  return <Layout>...Loading</Layout>
}

export default App;
