"use client";var $=Object.defineProperty;var n=(b,I)=>$(b,"name",{value:I,configurable:!0});import{ah as H,a9 as r,a6 as c,c as F,I as J,T as Q}from"./iframe-Yc5vADWD.js";import{a as U}from"./useMenu-CxtnSdnP.js";import{u as Y}from"./useClickOutside-DlvvEhNo.js";import{B as Z}from"./ButtonIcon-CKHHrDRr.js";import{S as x}from"./Plus-BG9CstYb.js";import{S}from"./InformationSquare-TRKWejmi.js";import{S as N}from"./ArrowLeft-ClPN6wJP.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";const oo="_container_dqumv_1",eo="_button_dqumv_13",no="_dropdown_dqumv_21",to="_dropdownItem_dqumv_45",ro="_itemTitle_dqumv_75",l={container:oo,button:eo,dropdown:no,dropdownItem:to,itemTitle:ro},so=n(({variant:b="solid",size:I,icon:O,iconOpen:h,iconSize:P,iconAltText:W,id:u="floatingDropdown",color:C="company",items:B,"data-testid":G})=>{const{currentId:K,toggleId:w}=H(),o=K===u,_=r.useRef(o),k=r.useRef(null),y=r.useRef(null),E=r.useRef(null),V=n(e=>s=>{e(s),w(u)},"handleItemClick"),{menu:z,setActiveIndex:j,activeIndex:D}=U({items:B,groups:{ungrouped:{}},keyboardEvents:o,ref:k});r.useEffect(()=>{const e=_.current;_.current=o,e&&!o&&E.current?.focus()},[o]),r.useEffect(()=>{o&&j(0)},[o,j]),r.useEffect(()=>{if(!o)return;const e=requestAnimationFrame(()=>{y.current?.focus({preventScroll:!0})});return()=>cancelAnimationFrame(e)},[o]),r.useEffect(()=>{if(!o)return;const e=y.current;if(!e)return;const s=n(()=>Array.from(e.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(t=>t.tabIndex!==-1),"getFocusable"),i=n(()=>{s()[0]?.focus({preventScroll:!0})},"focusFirst"),q=n(t=>{const a=t.target;a&&!e.contains(a)&&i()},"onFocusIn"),L=n(t=>{if(t.key!=="Tab")return;const a=s();if(a.length===0){t.preventDefault(),e.focus({preventScroll:!0});return}const R=a[0],T=a[a.length-1],M=document.activeElement;t.shiftKey&&M===R?(t.preventDefault(),T.focus({preventScroll:!0})):!t.shiftKey&&M===T&&(t.preventDefault(),R.focus({preventScroll:!0}))},"onKeyDown");return document.addEventListener("focusin",q),document.addEventListener("keydown",L),()=>{document.removeEventListener("focusin",q),document.removeEventListener("keydown",L)}},[o]),Y(k,()=>{o&&w(u)});const A=o&&h?h:O,X=o&&D>=0?`floating-dropdown-button-${D}`:void 0;return c.jsxs("div",{className:l.container,ref:k,children:[o&&c.jsx("div",{id:"floating-dropdown-menu",className:l.dropdown,"data-color":C,role:"menu","aria-labelledby":"floating-dropdown-button","aria-activedescendant":X,tabIndex:-1,ref:y,children:z[0]?.items.map((e,s)=>{const i=e.props;return c.jsxs(F,{id:"floating-dropdown-button-"+s,className:l.dropdownItem,onClick:V(i.onClick),type:"button",role:"menuitem",tabIndex:-1,"data-active":e.active,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:[c.jsx(J,{svgElement:i.icon,size:"md",color:"inherit"}),c.jsx("span",{className:l.itemTitle,children:i.title})]},s)})}),c.jsx(F,{className:l.button,variant:b,color:C,size:I,onClick:n(()=>w(u),"onClick"),"data-testid":G,"aria-label":W,"aria-expanded":o,"aria-haspopup":"menu",id:"floating-dropdown-button",ref:E,autoFocus:!1,"aria-controls":o?"floating-dropdown-menu":void 0,children:A&&c.jsx(Z,{icon:A,size:P})})]})},"FloatingDropdown"),Io={title:"Components/Dropdown/FloatingDropdown",component:so,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:x,iconAltText:"Actions menu",items:[{icon:S,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:N,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")}]}},d={args:{}},m={args:{color:"neutral"}},p={args:{color:"company"}},f={args:{color:"person"}},g={args:{items:[{icon:S,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:N,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")},{icon:x,title:"Legg til",onClick:n(()=>console.log("Add"),"onClick")},{icon:S,title:"Informasjon",onClick:n(()=>console.log("Info"),"onClick")}]}},v={args:{icon:x,iconOpen:Q,color:"company"}},wo=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: InformationSquareIcon,
      title: 'Vis nye funksjoner',
      onClick: () => console.log('Show new features')
    }, {
      icon: ArrowLeftIcon,
      title: 'Ta meg tilbake',
      onClick: () => console.log('Go back')
    }, {
      icon: PlusIcon,
      title: 'Legg til',
      onClick: () => console.log('Add')
    }, {
      icon: InformationSquareIcon,
      title: 'Informasjon',
      onClick: () => console.log('Info')
    }]
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company'
  }
}`,...v.parameters?.docs?.source}}};export{p as Company,d as Default,m as Neutral,f as Person,v as WithDifferentIcon,g as WithManyItems,wo as __namedExportsOrder,Io as default};
