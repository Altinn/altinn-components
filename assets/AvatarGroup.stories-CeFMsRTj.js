import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./AvatarGroup-ChzQcDti.js";import{t as n}from"./Flex-SBjIXoOg.js";var r=e(),i={title:`Components/AvatarGroup`,component:t,tags:[`autodocs`,`stable`],parameters:{layout:`centered`},args:{style:{fontSize:`2em`}}},a={args:{defaultType:`person`,items:[{name:`Albert Åberg`},{name:`Birger Meling`},{name:`Celine Dion`}]}},o={args:{defaultType:`company`,items:[{name:`Albert Åberg`},{name:`Birger Meling`},{name:`Celine Dion`}]}},s={args:{items:[{type:`company`,name:`Albert Åberg`},{type:`person`,name:`Birger Meling`}]}},c=e=>{let i=Array(5e3).fill(null).map((e,t)=>({name:t+`AA`}));return(0,r.jsx)(n,{direction:`col`,align:`start`,spacing:2,children:(0,r.jsx)(t,{...e,items:i,maxItemsCountReachedLabel:`...`,defaultType:`company`,size:`sm`})})},l=e=>{let i=[{name:`A`},{name:`B`},{name:`C`},{name:`D`}];return(0,r.jsxs)(n,{direction:`col`,align:`start`,spacing:2,children:[(0,r.jsx)(t,{...e,items:i,maxItemsCount:1}),(0,r.jsx)(t,{...e,items:i,maxItemsCount:2}),(0,r.jsx)(t,{...e,items:i,maxItemsCount:3}),(0,r.jsx)(t,{...e,items:i,maxItemsCount:4})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      type: 'company',
      name: 'Albert Åberg'
    }, {
      type: 'person',
      name: 'Birger Meling'
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: AvatarGroupProps) => {
  const items = new Array(5000).fill(null).map((_, index) => ({
    name: index + 'AA'
  }));
  return <Flex direction="col" align="start" spacing={2}>
      <AvatarGroup {...args} items={items} maxItemsCountReachedLabel="..." defaultType="company" size="sm" />
    </Flex>;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: AvatarGroupProps) => {
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
}`,...l.parameters?.docs?.source}}};var u=[`People`,`Companies`,`CompanyAndPerson`,`CustomLabel`,`MaxItemsCount`];export{o as Companies,s as CompanyAndPerson,c as CustomLabel,l as MaxItemsCount,a as People,u as __namedExportsOrder,i as default};