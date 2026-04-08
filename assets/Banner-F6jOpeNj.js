import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{Colors as i}from"./Banner.stories-BCgY_naI.js";var a=e();function o(e){let o={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`Banner`}),`
`,(0,a.jsx)(o.h1,{id:`the-banner`,children:`The Banner`}),`
`,(0,a.jsxs)(o.p,{children:[`A `,(0,a.jsx)(o.code,{children:`Banner`}),` is a component designed to display important information or announcements to users. It’s commonly used to highlight updates, promotions, or specific notices, such as a Beta Banner to inform users about ongoing changes or testing phases.`]}),`
`,(0,a.jsx)(o.h2,{id:`usage`,children:`Usage`}),`
`,(0,a.jsxs)(o.p,{children:[`The `,(0,a.jsx)(o.code,{children:`Banner`}),` can be used to convey various types of messages, but the component itself is confined to presenting the message.
Any parent component or consumer of the `,(0,a.jsx)(o.code,{children:`Banner`}),` should handle the logic for when and how to display it, e.g. text and color, depending on the context.`]}),`
`,(0,a.jsx)(t,{of:i}),`
`,(0,a.jsx)(o.h3,{id:`real-usage-example-of-a-beta-banner-in-arbeidsflate`,children:`Real usage example of a Beta Banner in Arbeidsflate:`}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-jsx`,children:`
import { useState } from 'react';
import { Banner } from './Banner';

const BETA_BANNER_KEY = 'arbeidsflate:show_beta_banner';

export const BetaBanner = () => {
  const isPreviouslyDismissed = localStorage.getItem(BETA_BANNER_KEY) === 'true';
  const [showBetaBanner, setShowBetaBanner] = useState(!isPreviouslyDismissed);

  const handleClose = () => {
    setShowBetaBanner(false);
    localStorage.setItem(BETA_BANNER_KEY, 'true');
  };

  if (!showBetaBanner) return null;

  return (
    <Banner
      onClose={handleClose}
      closeTitle="close"
      text="This is a beta version of Arbeidsflate. We are continuously working on improvements and new features. Please report any issues you encounter."
      color="warning"
    />
  );
};


`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}export{s as default};