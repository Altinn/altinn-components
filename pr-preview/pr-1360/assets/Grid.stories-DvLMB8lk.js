import{a7 as t,aa as a}from"./iframe-BKPYfBaP.js";import{G as m}from"./Grid-CCg_P7uy.js";import{c as i}from"./categoryItems-B9viJLIN.js";import{L as o}from"./ListItem-vuMFE_6d.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-C5rfLR-k.js";import"./Truck-CrE9W5FQ.js";import"./TeddyBear-ivQRmAPd.js";import"./Buildings2-C-O3AVkE.js";import"./Input-CHWt3Nk0.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...s.parameters?.docs?.source}}};const F=["Large","Small"];export{r as Large,s as Small,F as __namedExportsOrder,S as default};
