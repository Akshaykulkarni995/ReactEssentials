import React, { useState } from 'react'
import Tabcomponents from './tabcomponents';
import { EXAMPLES } from '../../data';
import Section from '../section/section';

const tabComponentItem = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTab, setCurrentTab] = useState();

    let tabContent = "please click a buttom";
  
    const handleSelect = (selectedbtn: any) => {
      setCurrentTab(selectedbtn);
      tabContent = selectedbtn;
    };
  return (
    <div>
       <Section title="Examples" id="examples">
        <menu>
          <Tabcomponents onSelect={() => handleSelect("components")}>
            Components
          </Tabcomponents>
          <Tabcomponents onSelect={() => handleSelect("jsx")}>
            JSX
          </Tabcomponents>
          <Tabcomponents onSelect={() => handleSelect("props")}>
            Props
          </Tabcomponents>
          <Tabcomponents onSelect={() => handleSelect("state")}>
            State
          </Tabcomponents>
        </menu>
        <div id="tab-content">
          {!currentTab ? <p>Please select a topic</p> : null}
          {currentTab ? (
            <div>
              <h3>{EXAMPLES[currentTab].title}</h3>
              <p>{EXAMPLES[currentTab].description}</p>
              <pre>
                <code>{EXAMPLES[currentTab].code}</code>
              </pre>
            </div>
          ) : null}
        </div>
      </Section>
    </div>
  )
}

export default tabComponentItem
