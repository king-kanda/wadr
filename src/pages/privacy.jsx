import React ,{useState , useEffect}  from 'react'
import { Navbar , Footer}  from '../components'
import styles from '../styles/privacy.module.scss'

const Privacy = () => {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const currentSection = sections[i];
        const rect = currentSection.getBoundingClientRect();

        if (scrollPosition >= rect.top + window.scrollY - 100) {
          setActiveSection(currentSection.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <main>
          <div  className='hero-container  '>
            <Navbar /> 
          </div>

          <section className='main-body py-20'>
            <div className="container">
              <div className="md:grid grid-cols-4 gap-5">

                <div className="hidden md:block col-span-1">
                    <div className="menu-contents py-10 sticky top-6">

                      <ul>
                        <li className={` ${activeSection === '1' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#1">1. Introduction</a>
                        </li>
                        <li className={` ${activeSection === '2' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#2">2. Information Collection and Use</a>
                        </li>
                        <li className={` ${activeSection === '3' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#3">3. Log Data</a>
                        </li>
                        <li className={` ${activeSection === '4' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#4">4. Cookies</a>
                        </li>
                        <li className={` ${activeSection === '5' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#5">5. Service Providers</a>
                        </li>
                        <li className={` ${activeSection === '6' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#6">6. Security</a>
                        </li>
                        <li className={` ${activeSection === '7' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#7">7. Links to Other Sites</a>
                        </li>
                        <li className={` ${activeSection === '8' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#8">8. Children's Privacy</a>
                        </li>
                        <li className={` ${activeSection === '9' ? 'text-purple underline  underline-offset-8  border-l-4 px-3 border-green' : ''}  ${styles.menuList} `}>
                          <a href="#9">9. Conclusion</a>
                        </li>
                      </ul>

                    </div>
                </div>

                <div className='col-span-3'>
                  <h1 className={`${styles.tT} py-7 text-purple `}>
                    Privacy Policy
                  </h1>

                  <div className="1">
                    
                    <section id="1">

                      <p>WARD operates the womeninadr.com website, which provides the SERVICE.
                        This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the nawiri agricultural program website.</p>
                        <br/>
                        <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                        <br/>
                        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at womeninadr.com, unless otherwise defined in this Privacy Policy.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="2">
                        <h2 className={` ${styles.sectionTT} text-purple `} >Information Collection and Use</h2>

                        <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="3">
            
                      <h2 className={` ${styles.sectionTT} text-purple `} >Log Data</h2>

                      <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="4">

                        <h2 className={` ${styles.sectionTT} text-purple `} >Cookies</h2>

                        <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.</p>

                        <p>Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="5">
                      
                        <h2 className={` ${styles.sectionTT} text-purple `} >Service Providers</h2>

                        <p>We may employ third-party companies and individuals due to the following reasons:</p>

                            <ul className='list-inside list-disc py-4 px-8'>
                                <li>To facilitate our Service</li>
                                <li>To provide the Service on our behalf</li>
                                <li>To perform Service-related services</li>
                                <li>To assist us in analyzing how our Service is used.</li>
                            </ul>

                        <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="6">

                       <h2 className={` ${styles.sectionTT} text-purple `} >Security</h2>

                        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="7">

                        <h2 className={` ${styles.sectionTT} text-purple `} >Links to Other Sites</h2>

                        <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="8">  

                        <h2 className={` ${styles.sectionTT} text-purple `} >Children's Privacy</h2>

                        <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

                    </section>

                    <div className="border-b border-dashed border-gray-300 my-8"></div>

                    <section id="9">
                      <h2 className={` ${styles.sectionTT} text-purple `} > Changes to This Privacy Policy</h2>

                      <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page  periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

                     <div className="border-b border-dashed border-gray-300 my-8"></div>


                      <h2 className={` ${styles.sectionTT} text-purple `} >Contact Us</h2>

                      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>

                    </section>
                       
                  </div>

                </div>

              </div>
            </div>
          </section> 

      </main>
      <Footer />

    </>
  )
}

export default Privacy