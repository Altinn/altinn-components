import{j as e}from"./iframe-DxxW_Hah.js";import{A as n}from"./AvatarGroup-C6j_8VXQ.js";import{F as p}from"./Flex-CRmH3H-L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pOAXHZ6n.js";import"./Avatar--rA6gsID.js";import"./useId-CckRU7I8.js";import"./Skeleton-DiRARuJ9.js";const f={title:"Components/AvatarGroup",component:n,tags:["autodocs","stable"],parameters:{layout:"centered"},args:{style:{fontSize:"2em"}}},s={args:{defaultType:"person",items:[{name:"Albert Åberg"},{name:"Birger Meling"},{name:"Celine Dion"}]}},t={args:{defaultType:"company",items:[{name:"Albert Åberg"},{name:"Birger Meling"},{name:"Celine Dion"}]}},o={args:{items:[{type:"company",name:"Albert Åberg"},{type:"person",name:"Birger Meling"}]}},m=a=>{const r=new Array(5e3).fill(null).map((l,c)=>({name:c+"AA"}));return e.jsx(p,{direction:"col",align:"start",spacing:2,children:e.jsx(n,{...a,items:r,maxItemsCountReachedLabel:"...",defaultType:"company",size:"sm"})})},i=a=>{const r=[{name:"A"},{name:"B"},{name:"C"},{name:"D"}];return e.jsxs(p,{direction:"col",align:"start",spacing:2,children:[e.jsx(n,{...a,items:r,maxItemsCount:1}),e.jsx(n,{...a,items:r,maxItemsCount:2}),e.jsx(n,{...a,items:r,maxItemsCount:3}),e.jsx(n,{...a,items:r,maxItemsCount:4})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const I=["People","Companies","CompanyAndPerson","CustomLabel","MaxItemsCount"];export{t as Companies,o as CompanyAndPerson,m as CustomLabel,i as MaxItemsCount,s as People,I as __namedExportsOrder,f as default};
