var B=Object.defineProperty;var h=(g,S)=>B(g,"name",{value:S,configurable:!0});import{aa as D,a7 as u}from"./iframe-BaqLtPTs.js";import{D as A}from"./DialogActions-Ckn22ZbH.js";import{S as P}from"./Section-C__1PXg0.js";import{S as v}from"./Switch-cEGCs3Qc.js";const e={id:"primary",priority:"primary",label:"Til rapportering"},a={id:"secondary",priority:"secondary",label:"Gi tilbakemelding"},r=[{id:"tertiary-1",priority:"tertiary",label:"Last ned kvittering"},{id:"tertiary-2",priority:"tertiary",label:"Be om utsettelse"},{id:"tertiary-3",priority:"tertiary",label:"Trekk innsendingen"},{id:"tertiary-4",priority:"tertiary",label:"Slett"}],j={title:"Inbox/Dialog/DialogActions",component:A,tags:["autodocsi","beta"],args:{items:[e,a]}},t={},s={args:{items:[e]}},i={args:{items:[a]}},n={args:{items:[e,a,r[0]]}},o={args:{items:[e,a,...r]}},c={args:{items:[r[0],a,r[1],e]}},d={args:{items:[e,{...a,hidden:!0},r[0],{...r[1],hidden:!0}]}},m={args:{items:[{...e,disabled:!0},a,r[0]]}},p={args:{items:[{...e,loading:!0},a,r[0]]}},l={args:{items:[e,a,...r]},decorators:[g=>u.jsx("div",{style:{maxWidth:"20rem"},children:u.jsx(g,{})})]},y={render:h(function(S){const[b,x]=D.useState(!1),f=[...S.items,{id:"delete",priority:"tertiary",label:"Slett",hidden:!b}];return u.jsxs(P,{spacing:6,children:[u.jsx(v,{name:"in-bin",value:"1",label:"Flytt dialogen til papirkurven",checked:b,onChange:h(()=>x(!b),"onChange")}),u.jsx(A,{items:f})]})},"Render")};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: [secondary]
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, secondary, tertiary[0]]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, secondary, ...tertiary]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [tertiary[0], secondary, tertiary[1], primary]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, {
      ...secondary,
      hidden: true
    }, tertiary[0], {
      ...tertiary[1],
      hidden: true
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      ...primary,
      disabled: true
    }, secondary, tertiary[0]]
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      ...primary,
      loading: true
    }, secondary, tertiary[0]]
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, secondary, ...tertiary]
  },
  decorators: [Story => <div style={{
    maxWidth: '20rem'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [inBin, setInBin] = useState(false);
    const items: DialogActionButtonProps[] = [...args.items, {
      id: 'delete',
      priority: 'tertiary',
      label: 'Slett',
      hidden: !inBin
    }];
    return <Section spacing={6}>
        <Switch name="in-bin" value="1" label="Flytt dialogen til papirkurven" checked={inBin} onChange={() => setInBin(!inBin)} />
        <DialogActions items={items} />
      </Section>;
  }
}`,...y.parameters?.docs?.source}}};const k=["Default","PrimaryOnly","SecondaryOnly","WithTertiary","MaxActions","SortedByPriority","HiddenActions","PrimaryDisabled","PrimaryLoading","NarrowContainer","ActionAddedAtRuntime"],w=Object.freeze(Object.defineProperty({__proto__:null,ActionAddedAtRuntime:y,Default:t,HiddenActions:d,MaxActions:o,NarrowContainer:l,PrimaryDisabled:m,PrimaryLoading:p,PrimaryOnly:s,SecondaryOnly:i,SortedByPriority:c,WithTertiary:n,__namedExportsOrder:k,default:j},Symbol.toStringTag,{value:"Module"}));export{y as A,t as D,d as H,o as M,l as N,m as P,i as S,n as W,w as a,p as b,s as c,c as d};
