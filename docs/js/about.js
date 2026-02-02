import { assetHref } from './utils.js';

export const renderAboutPage = () => {
    return `
    <main class="main-wrapper">
        <section class="section_page_header">
            <div class="page-padding">
                <div class="container-large" style="position: relative;">
                    <div class="max-width-medium">
                        <h1>
                            About Us
                        </h1>
                        <div class="padding-bottom"></div>
                        <p class="Paragraph">We are building the AI infrastructure layer for the future of life sciences.</p>
                    </div>
                    <div class="header_shapes">
                        <img src="${assetHref('images/LydiaRx_web-art.svg')}" class="header-shape-image"/>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_about-us">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-section-huge">
                        <div class="about_component">
                            <div className="max-width-large">   
                                <h2>About LydiaRx</h2>
                                <div className="padding-bottom"></div>
                                <p>
                                    At LydiaRx, artificial intelligence is not a feature layer: it is our architectural foundation. We are building the infrastructure for next-generation pharmaceutical operations, where AI-native systems drive measurable improvements across drug discovery, regulatory compliance, manufacturing quality, and supply chain integrity. Our technology addresses the pharmaceutical industry's most pressing operational challenges: reducing time-to-market, ensuring regulatory certainty, eliminating counterfeit risk, and delivering verifiable patient safety at scale. 
                                </p>
                                   <div className="padding-bottom"></div>  
                            </div>
                            <!-- <div className="margin-vertical margin-xxlarge">
                                <div className="about_image-wrapper">
                                    <img src={AboutImage} className="about_image"/>
                                </div>
                            </div> -->
                            <div className="max-width-large">
                                <h3>What We Do</h3>
                                <div className="padding-bottom"></div>                        
                                <p>
                                    LydiaRx provides enterprise-grade, AI-native platforms that modernize pharmaceutical operations from discovery through distribution. Our solutions are purpose-built for regulated environments, delivering quantifiable efficiency gains, risk reduction, and competitive advantage to global pharmaceutical enterprises, regulatory bodies, and healthcare systems.
                                </p>
                                <div className="padding-bottom"></div>
                                <h3>Core Platform Suite</h3>                                        
                                
                                <div className="padding-bottom"></div>
                                <p>
                                <strong>Discovery Studio</strong> accelerates pharmaceutical R&D through AI-powered literature synthesis, patent analysis, and candidate design. The platform reduces research timelines while maintaining scientific rigor and full audit trails for regulatory submission.
                                </p>
                                <div className="padding-bottom small"/>
                                <p>
                                    <strong>GxP Copilot Suite</strong> automates compliance-critical documentation, inspection readiness, and quality management workflows. Purpose-built for FDA, EMA, and global regulatory frameworks, it reduces compliance costs while strengthening audit defensibility.
                                </p>
                                <div className="padding-bottom small"/>
                                <p>
                                    <strong>R&D Ops Platform</strong> serves as the intelligent orchestration layer for pharmaceutical operations, integrating disparate systems into a unified, AI-driven infrastructure that ensures data integrity, operational efficiency, and enterprise scalability.
                                </p>
                                <div className="padding-bottom"></div>
                                <h3>Supply Chain & Patient Information Solutions</h3>
                                <div className="padding-bottom"></div>
                                <p>
                                    <strong>Track & Trace</strong> delivers enterprise-scale serialization and supply chain visibility, enabling real-time monitoring from manufacturing through patient delivery. Our solutions support national and regional regulatory compliance frameworks including EU FMD, US DSCSA, and emerging global standards, providing governments and pharmaceutical companies with comprehensive counterfeit protection and supply chain assurance.
                                </p>
                                <div className="padding-bottom small"/>
                                <p>
                                    <strong>Electronic Product Information (ePI)</strong>, developed through the PharmaLedger consortium, digitizes patient information leaflets while maintaining regulatory compliance across jurisdictions. This infrastructure eliminates paper-based processes, reduces recall risk from outdated inserts, and ensures patients access current, accurate medicine information. The result is both operational savings and enhanced patient safety.
                                </p>
                                <div className="padding-bottom"></div>
                                <h3>Professional Services</h3>
                                <div className="padding-bottom"></div>
                                <p>
                                    Beyond platform deployment, LydiaRx's consulting practice addresses the organizational, technical, and regulatory complexities of pharmaceutical digital transformation. Our consultants combine deep domain expertise in pharmaceutical operations with technical implementation experience, enabling clients to navigate serialization mandates, validation requirements, and quality system modernization. We architect solutions that bridge legacy infrastructure with next-generation AI capabilities, ensuring continuity of operations while achieving step-change improvements in compliance efficiency and operational visibility.
                                </p>
                                <div className="padding-bottom"></div>
                                <h3>Value Proposition</h3>
                                <div className="padding-bottom"></div>
                                <p>
                                    Our clients (pharmaceutical manufacturers, national regulatory bodies, and healthcare systems) deploy LydiaRx solutions to achieve concrete operational outcomes: compressed development timelines, reduced compliance overhead, eliminated supply chain vulnerabilities, and strengthened patient safety frameworks. These improvements translate to measurable ROI through reduced operational expenditure, accelerated revenue realization, and mitigated regulatory risk.
                                </p>
                                <div className="padding-bottom"></div>
                                <p className="text-weight-semibold">
                                    LydiaRx delivers the technological infrastructure required for modern pharmaceutical operations. Our AI-native architecture, regulatory-grade security, and enterprise integration capabilities position us as the strategic technology partner for organizations modernizing pharmaceutical R&D, manufacturing, and distribution operations at scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_team">
            <div class="bio-container">
                <div class="padding-global bio-padding">
                    <div class="container-large">
                        <div  class="bio-wrapper">
                            <div class="w-layout-grid bio_component">
                                <div class="bio_team-item">
                                    <div class="bio_image-wrapper">
                                        <img src="" loading="lazy" alt="" class="bio_image"/>
                                    </div>
                                    <div>
                                        <div class="text-color-blue bio-title"></div>
                                        <div class="padding-bottom padding-xxsmall"></div>
                                        <h3 class="heading-style-h4 bio-name"></h3>
                                        <div class="padding-bottom padding-small"></div>
                                    </div>
                                </div>
                                <p class="bio-bio"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="padding-global">
                <div class="container-large">
                    <div class="padding-section-medium" >
                        <div class="w-layout-flex team_component">
                                  <div class="padding-bottom padding-small"></div>
                            <div class="team_content-left">
                                <h2>Our Team</h2>
                                <p>Our team brings together pharmaceutical industry veterans and AI specialists with experience across global pharmaceutical companies, regulatory environments, and enterprise technology development.</p>
                            </div>
                            <div class="team-carousel">
                                <div class="w-layout-grid team_person-wrapper"></div>
                                <button class="carousel-nav prev" type="button" aria-label="Previous team members">‹</button>
                                <button class="carousel-nav next" type="button" aria-label="Next team members">›</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}

const teamMembers =[
    {
        imageSrc: "assets/images/najib-rehman.png",
        name: "Najib Rehman",
        title: "CEO",
        position: 1,
        bio: "Najib is a data and analytics technology expert that has worked in life science for almost 20 years. From working within big pharma on their systems, processes and enabling capabilities through to being a founding member of ATMPS Ltd, a startup that developed the world\'s first patented blockchain solution in life sciences for tracking personalised medicine. He has spent time working with commercial and clinical functions on the challenges that they need to overcome to make data meaningful and thus drive value for the business, as well as building the foundation needed to take advantage of newer capabilities such as AI, ML etc. Furthermore, he has consulted and provided training support to pharma, biotech, university hospitals and academic science networks on key areas of data requirements, including AZ, BMS, Pfizer, Autolus, iDMT (Cambridge) and others in this and related life science areas. One final area of interest has been to work with teams in the workplace to get the best out of them, this interest has also led to the founding of a successful German based technology and consultancy start up operating across many sectors called Kokoro.",
    },
    {
        imageSrc: "assets/images/sinica-alboaie.png",
        name: "Sînică Alboaie",
        title:"Chief Technology Lead",
        bio: "Sînică has a background in software development and research. He holds a PHD in Privacy Preserving Technologies and Blockchain, being the initiator and leader of the Open Source OpenDSU project, which has been developed and utilized in European research projects and enterprise blockchain solutions within the pharmaceutical industry. Sînică is also an experienced entrepreneur, having founded Axiologic Research in 2003, and has coordinated dozens of projects in roles such as CEO and Technical Product Manager for Axiologic\'s clients and collaborators. ",
    },/*
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Daud Farooq LL.B., LL.M., MA",
        title:"Director Legal and Corporate",
        bio: "Over nineteen years of experience as a Lawyer and thirteen as a Managing Partner in a UK Law Firm. Extensive knowledge of complex commercial transactions including cross border negotiation. Working for high profile clients in international dispute resolution involving complex financial and trust arrangements. Negotiated for clients with Governments and Sovereign Funds and has experience in funding arrangements and structuring projects for delivery.  Business interests in various countries and a strong presence in Iran, Pakistan and Turkey",
    },*/
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        name: "Alexander Risbey",
        title:"Director of Operations",
        bio: "Alexander brings over six years of professional experience across diverse sectors, including business development, logistics, operations, and software. With a background that includes service in the Swiss armed forces and roles in fintech, commodity trading, and software development, his track record reflects adaptability and success in varied environments.",
    },
    {
        imageSrc: "assets/images/andrew-roddam.png",
        name: "Dr Andrew Roddam",
        title:"Advisor",
        bio: "Dr Andrew Roddam is a life sciences executive and internationally recognized epidemiologist with over 25 years’ experience spanning academia, pharmaceuticals, biotechnology, and public health. He is Chief Business Development Officer at EveryONE Medicines, leading the adoption of precision medicine capabilities from genetic discovery to patient monitoring. Previously, he was CEO of Our Future Health, the UK’s largest health research programme in partnership with the NHS, creating one of the world’s largest prospective cohorts and genetic resources. An Oxford-trained statistician, Andrew has published over 100 scientific papers and is a regular keynote speaker. He serves as Chair of SNOMED International, where he has been a board director since 2020, and advises multiple organizations on data-driven healthcare innovation.",
    },
    {
        imageSrc: "assets/images/shahid-hanif.png",
        name: "Shahid Hanif",
        title:"Advisor",
        bio: "Dr Shahid Hanif is a life sciences executive with over 20 years’ of experience, specialising in driving strategic and collaborative approaches to data, evidence generation and patient outcomes. He is the Founder of Avenzoar Consulting, providing strategic support to life science organisations, and Co-Founder of a voluntary Science Policy Think Tank initiative. Previously, he led the establishment and development of the GetReal Institute, a multistakeholder initiative to advance the use of RWE for decision-making, and was the Head of Health Data & Outcomes at the ABPI. Recognised for enabling the development, approval, and access to innovative health technologies, combining deep industry knowledge with a forward-thinking mindset. Known for fostering partnerships across diverse stakeholders and aligning organisational goals with emerging trends in healthcare to deliver impactful, patient-focused solutions.",
    }
]

export const renderTeamMembers = () => {
    const teamWrapper = document.querySelector('.team_person-wrapper');
    if (!teamWrapper) return;
    teamMembers.forEach((member, index) => {
        const teamMemberHTML = `
            <div class="team_item" data-index="${index}">
                <div class="team_image-wrapper">
                    <img src="${member.imageSrc}" loading="lazy" alt="${member.name}" class="team_image"/>
                </div>
                <div class="text-color-blue">${member.title}</div>
                <div class="padding-bottom padding-xxsmall"></div>
                <h3 class="heading-style-h4">${member.name}</h3>
            </div>
        `;
        teamWrapper.insertAdjacentHTML('beforeend', teamMemberHTML);
    });
}

export const handleBioPopup = () => {
    const teamItems = document.querySelectorAll('.team_item');
    const bioContainer = document.querySelector('.bio-container');
    const closeButton = document.querySelector('.bio-close');

    if (!bioContainer || teamItems.length === 0) return;

    // Create close button if it doesn't exist
    if (!closeButton) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'bio-close';
        closeBtn.innerHTML = '×';
        closeBtn.setAttribute('aria-label', 'Close');
        bioContainer.querySelector('.bio-wrapper').appendChild(closeBtn);
    }

    teamItems.forEach(item => {
        item.addEventListener('click', () => {
            const memberIndex = item.getAttribute('data-index');
            const member = teamMembers[memberIndex];
            
            document.querySelector('.bio_image').src = member.imageSrc;
            document.querySelector('.bio_image').alt = member.name;
            document.querySelector('.bio-title').textContent = member.title;
            document.querySelector('.bio-name').textContent = member.name;
            document.querySelector('.bio-bio').textContent = member.bio;

            bioContainer.classList.add('is-active');
            // Allow background scrolling - remove body overflow lock
        });
    });

    const closeBio = () => {
        bioContainer.classList.remove('is-active');
        // No need to reset body overflow since we're not locking it
    }

    // Close button events
    const closeBtn = bioContainer.querySelector('.bio-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBio);
    }

    // Click outside to close
    bioContainer.addEventListener('click', (event) => {
        if (event.target === bioContainer) {
            closeBio();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && bioContainer.classList.contains('is-active')) {
            closeBio();
        }
    });
}

export const initTeamCarousel = () => {
    const carousel = document.querySelector('.team-carousel');
    const wrapper = carousel?.querySelector('.team_person-wrapper');
    const prevBtn = carousel?.querySelector('.carousel-nav.prev');
    const nextBtn = carousel?.querySelector('.carousel-nav.next');

    if (!carousel || !wrapper || !prevBtn || !nextBtn) {
        return;
    }

    const getScrollAmount = () => {
        const card = wrapper.querySelector('.team_item');
        if (!card) {
            return wrapper.clientWidth;
        }
        const styles = getComputedStyle(wrapper);
        const gapValue = styles.columnGap || styles.gap || '0';
        const gap = Number.parseFloat(gapValue) || 0;
        return card.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth - 4;
        const atStart = wrapper.scrollLeft <= 2;
        const atEnd = wrapper.scrollLeft >= maxScrollLeft;

        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
        prevBtn.classList.toggle('is-disabled', atStart);
        nextBtn.classList.toggle('is-disabled', atEnd);
    };

    const scrollByDirection = (direction) => {
        wrapper.scrollBy({
            left: getScrollAmount() * direction,
            behavior: 'smooth',
        });
        setTimeout(updateButtons, 300);
    };

    prevBtn.addEventListener('click', () => scrollByDirection(-1));
    nextBtn.addEventListener('click', () => scrollByDirection(1));
    wrapper.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    setTimeout(updateButtons, 120);
};
