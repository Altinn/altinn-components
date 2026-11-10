"use client";var $=Object.defineProperty;var n=(b,w)=>$(b,"name",{value:w,configurable:!0});import{ah as H,a9 as r,a6 as c,c as M,I as J,T as Q}from"./iframe-CfESZwGq.js";import{a as U}from"./useMenu-DCL6y2xK.js";import{u as Y}from"./useClickOutside-DJmdr3i5.js";import{B as Z}from"./ButtonIcon-CMvu13gC.js";import{S as x}from"./Plus-C15azGMz.js";import{S}from"./InformationSquare-BWZxY-Ir.js";import{S as N}from"./ArrowLeft-CNUXWL3x.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";const ee="_container_dqumv_1",oe="_button_dqumv_13",ne="_dropdown_dqumv_21",te="_dropdownItem_dqumv_45",re="_itemTitle_dqumv_75",l={container:ee,button:oe,dropdown:ne,dropdownItem:te,itemTitle:re},se=n(({variant:b="solid",size:w,icon:O,iconOpen:h,iconSize:P,iconAltText:W,id:u="floatingDropdown",color:C="company",items:B,"data-testid":G})=>{const{currentId:K,toggleId:I}=H(),e=K===u,_=r.useRef(e),k=r.useRef(null),y=r.useRef(null),E=r.useRef(null),V=n(o=>s=>{o(s),I(u)},"handleItemClick"),{menu:z,setActiveIndex:D,activeIndex:j}=U({items:B,groups:{ungrouped:{}},keyboardEvents:e,ref:k});r.useEffect(()=>{const o=_.current;_.current=e,o&&!e&&E.current?.focus()},[e]),r.useEffect(()=>{e&&D(0)},[e,D]),r.useEffect(()=>{if(!e)return;const o=requestAnimationFrame(()=>{y.current?.focus({preventScroll:!0})});return()=>cancelAnimationFrame(o)},[e]),r.useEffect(()=>{if(!e)return;const o=y.current;if(!o)return;const s=n(()=>Array.from(o.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(t=>t.tabIndex!==-1),"getFocusable"),i=n(()=>{s()[0]?.focus({preventScroll:!0})},"focusFirst"),q=n(t=>{const a=t.target;a&&!o.contains(a)&&i()},"onFocusIn"),L=n(t=>{if(t.key!=="Tab")return;const a=s();if(a.length===0){t.preventDefault(),o.focus({preventScroll:!0});return}const R=a[0],T=a[a.length-1],F=document.activeElement;t.shiftKey&&F===R?(t.preventDefault(),T.focus({preventScroll:!0})):!t.shiftKey&&F===T&&(t.preventDefault(),R.focus({preventScroll:!0}))},"onKeyDown");return document.addEventListener("focusin",q),document.addEventListener("keydown",L),()=>{document.removeEventListener("focusin",q),document.removeEventListener("keydown",L)}},[e]),Y(k,()=>{e&&I(u)});const A=e&&h?h:O,X=e&&j>=0?`floating-dropdown-button-${j}`:void 0;return c.jsxs("div",{className:l.container,ref:k,children:[e&&c.jsx("div",{id:"floating-dropdown-menu",className:l.dropdown,"data-color":C,role:"menu","aria-labelledby":"floating-dropdown-button","aria-activedescendant":X,tabIndex:-1,ref:y,children:z[0]?.items.map((o,s)=>{const i=o.props;return c.jsxs(M,{id:"floating-dropdown-button-"+s,className:l.dropdownItem,onClick:V(i.onClick),type:"button",role:"menuitem",tabIndex:-1,"data-active":o.active,onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave,children:[c.jsx(J,{svgElement:i.icon,size:"md",color:"inherit"}),c.jsx("span",{className:l.itemTitle,children:i.title})]},s)})}),c.jsx(M,{className:l.button,variant:b,color:C,size:w,onClick:n(()=>I(u),"onClick"),"data-testid":G,"aria-label":W,"aria-expanded":e,"aria-haspopup":"menu",id:"floating-dropdown-button",ref:E,autoFocus:!1,"aria-controls":e?"floating-dropdown-menu":void 0,children:A&&c.jsx(Z,{icon:A,size:P})})]})},"FloatingDropdown"),be={title:"Components/FloatingDropdown",component:se,tags:["autodocs","deprecated"],parameters:{layout:"padded",docs:{description:{component:"**Deprecated.** FloatingDropdown will be removed in a future release."}}},args:{icon:x,iconAltText:"Actions menu",items:[{icon:S,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:N,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")}]}},d={args:{}},m={args:{color:"neutral"}},p={args:{color:"company"}},f={args:{color:"person"}},g={args:{items:[{icon:S,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:N,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")},{icon:x,title:"Legg til",onClick:n(()=>console.log("Add"),"onClick")},{icon:S,title:"Informasjon",onClick:n(()=>console.log("Info"),"onClick")}]}},v={args:{icon:x,iconOpen:Q,color:"company"}},we=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};export{p as Company,d as Default,m as Neutral,f as Person,v as WithDifferentIcon,g as WithManyItems,we as __namedExportsOrder,be as default};
