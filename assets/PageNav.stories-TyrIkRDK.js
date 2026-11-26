var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a6 as o,c as p}from"./iframe-Dhr5kNpI.js";import{B as d}from"./BreadcrumbsLink-D3ZvT99q.js";import{S as u}from"./ArrowLeft-B9Bu3h7d.js";import{F as g}from"./Flex-CQB0dbJh.js";import{S as b}from"./ArrowRedo-DNXqeRWY.js";import{S as k}from"./ClockDashed-CsZP5RVc.js";import{C as B}from"./ContextMenu-BSYfi7oi.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-CNFtkaIJ.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),eo={title:"Page/PageNav",component:f,tags:["autodocs"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},ao=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home'
    }, {
      label: 'Section'
    }, {
      label: 'Article'
    }]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake'
    }
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    backButton: {
      label: 'Tilbake'
    },
    controls: <ContextMenu id="context-menu" items={[{
      id: '1',
      groupId: '1',
      icon: ArrowRedoIcon,
      title: 'Del og gi tilgang'
    }, {
      id: '5',
      groupId: '3',
      icon: ClockDashedIcon,
      title: 'Aktivitetslogg'
    }]} />
  }
}`,...e.parameters?.docs?.source}}};export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,ao as __namedExportsOrder,eo as default};
