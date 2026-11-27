var B=Object.defineProperty;var A=(S,b)=>B(S,"name",{value:b,configurable:!0});import{a9 as D,a6 as h}from"./iframe-DS_59AwM.js";import{D as f}from"./DialogActions-BUZ6EOuf.js";import{S as v}from"./Section-C50awZDU.js";import{S as L}from"./Switch-UOM24JjQ.js";const e={id:"primary",priority:"primary",label:"Til rapportering"},r={id:"secondary",priority:"secondary",label:"Gi tilbakemelding"},a=[{id:"tertiary-1",priority:"tertiary",label:"Last ned kvittering"},{id:"tertiary-2",priority:"tertiary",label:"Be om utsettelse"},{id:"tertiary-3",priority:"tertiary",label:"Trekk innsendingen"},{id:"tertiary-4",priority:"tertiary",label:"Slett"}],P={title:"Inbox/Dialog/DialogActions",component:f,args:{items:[e,r]}},t={},s={args:{items:[e]}},i={args:{items:[r]}},n={args:{items:[e,r,a[0]]}},o={args:{items:[e,r,...a]}},d={args:{items:[a[0],r,a[1],e]}},c={args:{items:[e,{...r,hidden:!0},a[0],{...a[1],hidden:!0}]}},m={args:{items:[e,{...r,disabled:!0}],hiddenItemsLabel:"+ 2 handlinger du ikke har tilgang til.",hiddenItemsTooltip:"Avsender har skjult disse fordi du ikke har tilgang."}},l={args:{items:[],hiddenItemsLabel:"+ 1 handling du ikke har tilgang til."}},p={args:{items:[{...e,disabled:!0},r,a[0]]}},y={args:{items:[{...e,loading:!0},r,a[0]]}},u={args:{items:[e,r,...a]},decorators:[S=>h.jsx("div",{style:{maxWidth:"20rem"},children:h.jsx(S,{})})]},g={render:A(function(b){const[k,x]=D.useState(!1),I=[...b.items,{id:"delete",priority:"tertiary",label:"Slett",hidden:!k}];return h.jsxs(v,{spacing:6,children:[h.jsx(L,{name:"in-bin",value:"1",label:"Flytt dialogen til papirkurven",checked:k,onChange:A(()=>x(!k),"onChange")}),h.jsx(f,{items:I})]})},"Render")},j=["Default","PrimaryOnly","SecondaryOnly","WithTertiary","MaxActions","SortedByPriority","HiddenActions","WithHiddenItemsLabel","OnlyHiddenItemsLabel","PrimaryDisabled","PrimaryLoading","NarrowContainer","ActionAddedAtRuntime"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [tertiary[0], secondary, tertiary[1], primary]
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, {
      ...secondary,
      hidden: true
    }, tertiary[0], {
      ...tertiary[1],
      hidden: true
    }]
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, {
      ...secondary,
      disabled: true
    }],
    hiddenItemsLabel: '+ 2 handlinger du ikke har tilgang til.',
    hiddenItemsTooltip: 'Avsender har skjult disse fordi du ikke har tilgang.'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    hiddenItemsLabel: '+ 1 handling du ikke har tilgang til.'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      ...primary,
      disabled: true
    }, secondary, tertiary[0]]
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      ...primary,
      loading: true
    }, secondary, tertiary[0]]
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [primary, secondary, ...tertiary]
  },
  decorators: [Story => <div style={{
    maxWidth: '20rem'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const R=Object.freeze(Object.defineProperty({__proto__:null,ActionAddedAtRuntime:g,Default:t,HiddenActions:c,MaxActions:o,NarrowContainer:u,OnlyHiddenItemsLabel:l,PrimaryDisabled:p,PrimaryLoading:y,PrimaryOnly:s,SecondaryOnly:i,SortedByPriority:d,WithHiddenItemsLabel:m,WithTertiary:n,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{g as A,t as D,c as H,o as M,u as N,p as P,i as S,n as W,R as a,y as b,s as c,d};
