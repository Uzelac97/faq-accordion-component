import "./FAQ.css";
import FAQItem from "./FAQItem";
import faqData from "../data/data";
import iconStar from "../assets/images/icon-star.svg";

function FAQ() {
  return (
    <section>
      <div className="background-header"></div>
      <div className="faq-component">
        <div className="accordion-header">
          <img className="icon-star" src={iconStar} alt="icon-star" />
          <h1 className="title">FAQs</h1>
        </div>
        <div className="faq-list">
          {/* OVO SUTRA RAZMOTRITI !!!!!! ---> dolee  */}
          {faqData.map((item) => (
            <div className="accordion-item" key={item.id}>
              <FAQItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
