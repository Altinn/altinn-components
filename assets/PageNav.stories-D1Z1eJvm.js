var l=Object.defineProperty;var c=(a,n)=>l(a,"name",{value:n,configurable:!0});import{a5 as o,b as p}from"./iframe-BfD7syly.js";import{B as d}from"./BreadcrumbsLink-DYiILvvM.js";import{S as u}from"./ArrowLeft-D37TGPgu.js";import{F as g}from"./Flex-B7LQuBXt.js";import{S as b}from"./ArrowRedo-Gws1by9s.js";import{S as k}from"./ClockDashed-BHc3FuEH.js";import{C as B}from"./ContextMenu-4kM9ynf9.js";import"./preload-helper-Cc2_yIPf.js";import"./ArrowRight-VmwRvciP.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./MenuElipsisHorizontal-BaU63blA.js";const x="_controls_9bu1z_7",S={controls:x},f=c(({color:a,padding:n,breadcrumbs:s,backButton:i={as:"a",label:"Back"},controls:m})=>o.jsxs(g,{as:"nav",direction:"row",align:"center",justify:"between",color:a,padding:n,children:[s?o.jsx(d,{items:s}):o.jsxs(p,{...i,variant:"ghost",size:"sm",children:[o.jsx(u,{}),o.jsx("span",{children:i?.label||"Back"})]}),m&&o.jsx("div",{className:S.controls,children:m})]}),"PageNav"),ao={title:"Page/PageNav",component:f,tags:["autodocs","beta"],parameters:{},args:{backButton:{label:"Tilbake"}}},t={args:{breadcrumbs:[{label:"Home"},{label:"Section"},{label:"Article"}]}},r={args:{backButton:{label:"Tilbake"}}},e={args:{backButton:{label:"Tilbake"},controls:o.jsx(B,{id:"context-menu",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang"},{id:"5",groupId:"3",icon:k,title:"Aktivitetslogg"}]})}},no=["Breadcrumbs","BackButton","BackButtonAndControls"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{r as BackButton,e as BackButtonAndControls,t as Breadcrumbs,no as __namedExportsOrder,ao as default};
