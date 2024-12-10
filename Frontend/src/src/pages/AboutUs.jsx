// import React, { useState } from "react";
// import "./AboutUs.css";

// const faqs = [
//   {
//     question: "Who are we?",
//     answer:
//       "We are a team of dedicated professionals providing exceptional real estate services, including photography, virtual staging, and more, to help you showcase properties in the best light.",
//   },
//   {
//     question: "What services do we offer?",
//     answer:
//       "Our services include HDR photography, virtual staging, twilight shoots, and 360° tours to elevate your real estate listings.",
//   },
//   {
//     question: "Why choose us?",
//     answer:
//       "We combine creativity, technology, and expertise to deliver high-quality visuals that make your properties stand out in the competitive market.",
//   },
//   {
//     question: "How can you contact us?",
//     answer:
//       "You can reach us via the contact form on our website or email us at support@realestatepro.com.",
//   },
// ];

// function AboutUs() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="about-us">
//       <div className="about-intro">
//         <h2>About Us</h2>
//         <p>
//           At <strong>RealEstatePro</strong>, we are passionate about transforming properties into captivating visuals that resonate with potential buyers. Our team specializes in providing innovative and professional real estate services that help showcase the true potential of your listings.
//         </p>
//         <p>
//           With 5 years of experience in the industry, we strive to exceed expectations and deliver excellence in every project. Let us help you tell your property's story with precision and creativity.
//         </p>
//       </div>
//       <div className="faq-section">
//         <h3>Frequently Asked Questions</h3>
//         <div className="faqs">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`faq-item ${activeIndex === index ? "active" : ""}`}
//             >
//               <div
//                 className="faq-question"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 {faq.question}
//                 <span className="arrow">
//                   {activeIndex === index ? "▲" : "▼"}
//                 </span>
//               </div>
//               {activeIndex === index && (
//                 <div className="faq-answer">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;


import React, { useState } from "react";
import "./AboutUs.css";

const faqs = [
  {
    question: "What is Real Estate Image Editing?",
    answer:
      "Real estate image editing enhances property photos by adjusting colors, lighting, and composition, ensuring the images look professional and attract potential buyers.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We specialize in HDR blending, virtual staging, twilight conversions, object removal, and 360° virtual tours to elevate your property listings.",
  },
  {
    question: "How long does it take to edit images?",
    answer:
      "Our turnaround time depends on the service. Basic edits are delivered within 24 hours, while complex edits like virtual staging may take up to 48 hours.",
  },
  {
    question: "Why is photo editing essential for real estate?",
    answer:
      "Professional photo editing showcases properties in their best light, helping listings stand out and sell faster in a competitive market.",
  },
];

function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about-us">
      <div className="about-intro">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>RealEstatePro Photo Editing</strong>, your trusted partner in transforming property visuals. We help real estate professionals, photographers, and agencies showcase properties at their best with expertly edited images.
        </p>
        <p>
          Our mission is to bring out the full potential of every property photo through creativity, precision, and cutting-edge tools. Whether it's a cozy apartment or a luxurious estate, we make every listing shine.
        </p>
      </div>
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
