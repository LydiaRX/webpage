import { assetHref } from './utils.js';

export const renderEpiPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_page_header long-title">
            <div class="page-padding">
                <div class="container-large">
                    <div class="max-width-large header-title">
                        <h1>
                            Electronic Product Information (ePI)
                        </h1>
                    </div>
                    <div class="max-width-medium">
                        <p class="Paragraph">Effortless accessibility, infinite languages, zero recall worries: Revolutionize information dissemination with ePI.</p>
                    </div>
                    <div class="header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="header-shape-image" alt="LydiaRx Logo Art"/>
                    </div>
                </div>   
            </div>
        </section>
        <section class="section_about-us">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-section-huge">
                        <div class="about_component">
                            <div>   
                                <h3>Introduction</h3>
                                <p>
                                    Introducing digital product information through mobile apps or digital platforms may seem commonplace, yet its adoption remains largely unexplored by many. Fortunately, for those who frequently seek information from paper or digital leaflets—patients, caregivers, and healthcare providers—the necessity of clear, accessible information is paramount.
                                </p>
                            </div>
                            <div class="padding-bottom"></div>
                            <div class="about_image-wrapper">
                                <img src="${assetHref('images/LydiaRx_ePI.jpeg')}" class="epi_image" alt="Person checking the ePI of a product"/>
                            </div>
                            <div>
                                <h3>LydiaRx's ePI Solution</h3>
                 
                                <p>
                                    Traditional paper leaflets present challenges—difficult to decipher, cumbersome to navigate, and inconvenient to retain. While they convey regulated data, they often fall short of delivering a user-centric experience.
                                </p>
                                <p>
                                    Enter LydiaRx's ePI solution—an innovative response to the healthcare sector's demand for intuitive medicine leaflets without compromising on user experience, security, or accuracy.
                                </p>
                                <p>
                                    Developed collaboratively by pharmaceutical firms, patient groups, and technology and regulatory experts, ePI by LydiaRx addresses critical needs.
                                </p>
                          
                                <h3>Key Features</h3>
                             <ul style="margin: 0 2rem">
                                    <li>
                                    Providing patients, healthcare professionals, and caregivers with instant access to up-to-date, trustworthy product information free of charge.
                                    </li>
                                    <li>
                                    Offering manufacturers an industry-wide solution compliant with regulatory standards, ensuring a substantial return on investment.
                                    </li>
                                    <li>
                                    Enabling dynamic updates through a secure network, ensuring access to the latest information—unlike static PDFs on websites or centralized repositories.
                                    </li>
                                    <li>
                                    Fostering industry collaboration to establish a standardized infrastructure without reliance on proprietary technology or vendor constraints.
                                    </li>
                                    <li>
                                    Reducing maintenance costs, mitigating risks, and incorporating valuable insights from patient organizations.
                                    </li>
                                    <li>
                                    Leveraging serialization standards and transforming GS1 2D DataMatrix into a digital twin, enhancing product identification and verification processes.
                                    </li>
                                </ul>                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}
