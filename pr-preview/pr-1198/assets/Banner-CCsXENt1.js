import{j as e,M as r,C as a}from"./iframe-C6Awlou2.js";import{useMDXComponents as s}from"./index-CFcRwB6s.js";import{Colors as i}from"./Banner.stories-BmnhkD8z.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-B2-xsWiw.js";import"./index-DlBZqmFk.js";import"./useId-InpKFtFj.js";import"./InformationSquare-DNjiq8ws.js";import"./XMark-BEbAfGHw.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./Icon-DNxmTYNY.js";import"./Typography-B5eitD86.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./Flex-CdwLgxBs.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Banner"}),`
`,e.jsx(n.h1,{id:"the-banner",children:"The Banner"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"Banner"})," is a component designed to display important information or announcements to users. It’s commonly used to highlight updates, promotions, or specific notices, such as a Beta Banner to inform users about ongoing changes or testing phases."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Banner"}),` can be used to convey various types of messages, but the component itself is confined to presenting the message.
Any parent component or consumer of the `,e.jsx(n.code,{children:"Banner"})," should handle the logic for when and how to display it, e.g. text and color, depending on the context."]}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.h3,{id:"real-usage-example-of-a-beta-banner-in-arbeidsflate",children:"Real usage example of a Beta Banner in Arbeidsflate:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from "react";
import { Banner } from "./Banner";

const BETA_BANNER_KEY = "arbeidsflate:show_beta_banner";

export const BetaBanner = () => {
  const isPreviouslyDismissed =
    localStorage.getItem(BETA_BANNER_KEY) === "true";
  const [showBetaBanner, setShowBetaBanner] = useState(!isPreviouslyDismissed);

  const handleClose = () => {
    setShowBetaBanner(false);
    localStorage.setItem(BETA_BANNER_KEY, "true");
  };

  if (!showBetaBanner) return null;

  return (
    <Banner
      onClose={handleClose}
      closeTitle="close"
      title="This is a beta version of Arbeidsflate. We are continuously working on improvements and new features. Please report any issues you encounter."
      color="warning"
    />
  );
};
`})})]})}function _(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{_ as default};
