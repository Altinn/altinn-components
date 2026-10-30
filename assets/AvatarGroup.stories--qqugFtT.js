var u=Object.defineProperty;var p=(e,n)=>u(e,"name",{value:n,configurable:!0});import{a5 as a}from"./iframe-BenRi1VF.js";import{A as r}from"./AvatarGroup-BAohrV6V.js";import{F as c}from"./Flex-BtqRQeFd.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DXBUAkUc.js";const f={title:"Components/AvatarGroup",component:r,tags:["autodocs","stable"],parameters:{layout:"centered"},args:{style:{fontSize:"2em"}}},s={args:{defaultType:"person",items:[{name:"Albert Åberg"},{name:"Birger Meling"},{name:"Celine Dion"}]}},t={args:{defaultType:"company",items:[{name:"Albert Åberg"},{name:"Birger Meling"},{name:"Celine Dion"}]}},o={args:{items:[{type:"company",name:"Albert Åberg"},{type:"person",name:"Birger Meling"}]}},m=p(e=>{const n=new Array(5e3).fill(null).map((g,l)=>({name:l+"AA"}));return a.jsx(c,{direction:"col",align:"start",spacing:2,children:a.jsx(r,{...e,items:n,maxItemsCountReachedLabel:"...",defaultType:"company",size:"sm"})})},"CustomLabel"),i=p(e=>{const n=[{name:"A"},{name:"B"},{name:"C"},{name:"D"}];return a.jsxs(c,{direction:"col",align:"start",spacing:2,children:[a.jsx(r,{...e,items:n,maxItemsCount:1}),a.jsx(r,{...e,items:n,maxItemsCount:2}),a.jsx(r,{...e,items:n,maxItemsCount:3}),a.jsx(r,{...e,items:n,maxItemsCount:4})]})},"MaxItemsCount"),I=["People","Companies","CompanyAndPerson","CustomLabel","MaxItemsCount"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultType: 'person',
    items: [{
      name: 'Albert Åberg'
    }, {
      name: 'Birger Meling'
    }, {
      name: 'Celine Dion'
    }]
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultType: 'company',
    items: [{
      name: 'Albert Åberg'
    }, {
      name: 'Birger Meling'
    }, {
      name: 'Celine Dion'
    }]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      type: 'company',
      name: 'Albert Åberg'
    }, {
      type: 'person',
      name: 'Birger Meling'
    }]
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AvatarGroupProps) => {
  const items = new Array(5000).fill(null).map((_, index) => ({
    name: index + 'AA'
  }));
  return <Flex direction="col" align="start" spacing={2}>
      <AvatarGroup {...args} items={items} maxItemsCountReachedLabel="..." defaultType="company" size="sm" />
    </Flex>;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: AvatarGroupProps) => {
  const items = [{
    name: 'A'
  }, {
    name: 'B'
  }, {
    name: 'C'
  }, {
    name: 'D'
  }];
  return <Flex direction="col" align="start" spacing={2}>
      <AvatarGroup {...args} items={items} maxItemsCount={1} />
      <AvatarGroup {...args} items={items} maxItemsCount={2} />
      <AvatarGroup {...args} items={items} maxItemsCount={3} />
      <AvatarGroup {...args} items={items} maxItemsCount={4} />
    </Flex>;
}`,...i.parameters?.docs?.source}}};export{t as Companies,o as CompanyAndPerson,m as CustomLabel,i as MaxItemsCount,s as People,I as __namedExportsOrder,f as default};
