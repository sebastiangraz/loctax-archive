import React, { useState } from "react";
import Accordion from "../components/accordion";
import BlockContent from "../components/block-content";
import Reveal from "../components/reveal";

const AccordionList = ({ data }) => {
  const { items } = data;

  const [activeAccordion, setActiveAccordion] = useState(null);

  const onToggle = (id, status) => {
    setActiveAccordion(status ? id : null);
  };

  return (
    <Reveal
      effect={[
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0 },
      ]}
      childDelay={0.2}
    >
      {items.map((accordion, key) => {
        return (
          <Accordion
            key={key}
            id={accordion.id}
            isOpen={accordion.id === activeAccordion}
            onToggle={onToggle}
            title={accordion.title}
          >
            <BlockContent blocks={accordion.content} />
          </Accordion>
        );
      })}
    </Reveal>
  );
};

export default AccordionList;
