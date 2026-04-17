import{j as e,M as r,C as a}from"./iframe-C30XMp4u.js";import{useMDXComponents as s}from"./index-Cihnk0wP.js";import{Colors as i}from"./Banner.stories-DeGR0hVr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfjgmy9H.js";import"./InformationSquare-Cu6RA9m9.js";import"./useId-k4Xjw1TB.js";import"./XMark-ZCF0kQw6.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Flex-Olz8YtsP.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Banner"}),`
`,e.jsx(n.h1,{id:"the-banner",children:"The Banner"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"Banner"})," is a component designed to display important information or announcements to users. It’s commonly used to highlight updates, promotions, or specific notices, such as a Beta Banner to inform users about ongoing changes or testing phases."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Banner"}),` can be used to convey various types of messages, but the component itself is confined to presenting the message.
Any parent component or consumer of the `,e.jsx(n.code,{children:"Banner"})," should handle the logic for when and how to display it, e.g. text and color, depending on the context."]}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.h3,{id:"real-usage-example-of-a-beta-banner-in-arbeidsflate",children:"Real usage example of a Beta Banner in Arbeidsflate:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`
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


`})})]})}function y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{y as default};
