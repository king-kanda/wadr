import { useState } from 'react';
import styles from '../styles/home.module.scss';


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    console.log(index);
    console.log(activeIndex);
  };

  const accordionItems = [
    {
      title: 'Empowerment',
      content: "We strive to empower women in ADR by providing them with the resources, support, and opportunities to excel in their professional journeys. Through mentorship, training, and networking, we enable women practitioners to reach new heights of success."
    },
    {
      title: 'Excellence',
      content: 'We foster a culture of excellence in ADR by continuously expanding our knowledge, honing our skills, and embracing innovation. By promoting best practices and encouraging continuous professional development, we ensure that our members are exceptional practitioners in their field.',
    },
    {
      title: 'Gender Equality',
      content: 'We are committed to promoting gender equality within the field of ADR. By advocating for equal opportunities and challenging gender biases, we aim to create a more equitable and inclusive industry. ',
    },
    {
        title: 'Collaboration',
        content: 'We believe in the power of collaboration and strive to create a supportive network where women can connect, share insights, and learn from one another. By fostering a collaborative environment, we enhance the professional growth and success of our members.',
    },
  ];

  return (
    <div className="px-6 py-2 border-l border-dashed border-gray-3 ">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={` text-gray-5 ${styles.accordionItem} ${
            index === activeIndex ? 'active text-black  mb-12' : ''
          }`}
        >
          <div
            className={` ${styles.accordionHeader} `}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className={` py-2
            ${ index === activeIndex ? 'active text-yellow' : ''}
            `}>{item.title}</h3>
            
          </div>
          <div className={` ${styles.accordionContent}
           ${ index === activeIndex ? 'active text-black ' : ''}
           `}>
            {index === activeIndex && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
