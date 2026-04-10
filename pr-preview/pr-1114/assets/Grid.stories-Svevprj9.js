import{j as e,r as o}from"./iframe-BbAJh2l_.js";import{G as a}from"./Grid-DwkwsgiA.js";import{c as s}from"./categoryItems-DQdpbvUc.js";import{L as m}from"./ListItem-1XPivOtK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4eFSvt3.js";import"./useId-DlaeWOGU.js";import"./HardHat-CxHbj9T0.js";import"./Truck-BbK29sJQ.js";import"./TeddyBear-C_Hv6JoA.js";import"./Buildings2-Bl-BhvZh.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./XMark-CBD09dy-.js";import"./Icon-BPIDnrjf.js";import"./Skeleton-DCAPmpFX.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Badge-Bayw0f9c.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ChevronUp-BK_whBfS.js";import"./ChevronDown-B5pHKuJa.js";import"./ChevronRight-C-emBdlp.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    size: 'lg',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={{
        children: item.title as string,
        size: 'md',
        weight: 'bold'
      }} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const B=["Large","Small"];export{r as Large,i as Small,B as __namedExportsOrder,A as default};
