import{w as s,p as e,c as r,C as a}from"./iframe-43_RSSTf.js";import{Colors as i}from"./Banner.stories-B7eDBpTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-CiIOW2zK.js";import"./index-D9XEmR3s.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Icon-DxaOlqJE.js";import"./useId-BLkk23cI.js";import"./InformationSquare-BgUnCFaX.js";import"./Typography-Ct8ipg3s.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./XMark-Baw5EL5c.js";import"./Flex-CbLPS6D2.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Banner"}),`
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
`})})]})}function E(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{E as default};
