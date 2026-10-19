import{a7 as t,aa as a}from"./iframe-C7zNVDTT.js";import{G as m}from"./Grid-DRRYlzi4.js";import{c as i}from"./categoryItems-BG_9mwxF.js";import{L as o}from"./ListItem-taDywDuL.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-BOE9RxAZ.js";import"./Truck-FGeueZDT.js";import"./TeddyBear-SNGiC_-p.js";import"./Buildings2-C52yfc6A.js";import"./Input-CFKt0A_s.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
