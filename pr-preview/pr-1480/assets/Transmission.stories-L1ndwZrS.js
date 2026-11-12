var c=Object.defineProperty;var a=(e,p)=>c(e,"name",{value:p,configurable:!0});import{a6 as n,a9 as d}from"./iframe-CqoHfDH7.js";import{t}from"./transmissions-B75o3xEB.js";import{T as o}from"./Transmission-CZD2ydU3.js";import{L as i}from"./List-Dy-3Hrrg.js";const m=t,u={title:"Inbox/Transmission",component:o,parameters:{},args:{...m[0]}},s=a(()=>n.jsx(i,{spacing:2,children:n.jsx(o,{...t[0]})}),"Default"),r=a(()=>n.jsx(i,{spacing:2,children:m.map(e=>d.createElement(o,{...e,key:e.id}))}),"UsingBadges"),l=["Default","UsingBadges"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...r.parameters?.docs?.source}}};const L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,UsingBadges:r,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{s as D,L as T,r as U};
