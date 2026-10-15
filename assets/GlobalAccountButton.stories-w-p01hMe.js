var u=Object.defineProperty;var c=(d,m)=>u(d,"name",{value:m,configurable:!0});import{a7 as i,x as g}from"./iframe-BaqLtPTs.js";import{G as p}from"./GlobalAccountButton-C3nBJomz.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DvYNusc4.js";import"./ChevronDown-T0hrSAlY.js";import"./Enter-B84KAbyR.js";const B={title:"Layout/GlobalAccountButton",component:p,tags:["autodocs"],parameters:{layout:"centered"},args:{currentAccount:{id:"1",name:"Mathias Dyngeland",description:"Født: 01.01.1990",type:"person",icon:{type:"person",name:"Mathias Dyngeland"}},minimized:!1,expanded:!1},argTypes:{minimized:{control:"boolean"},expanded:{control:"boolean"}}},e={args:{currentAccount:void 0}},n=c(()=>i.jsx(g,{languageCode:"en",children:i.jsx(p,{currentAccount:void 0,minimized:!1,expanded:!1})}),"LoginWithEnglishText"),r={args:{currentAccount:{id:"1",name:"Mathias Dyngeland",description:"Født: 01.01.1990",type:"person",icon:{type:"person",name:"Mathias Dyngeland"}}}},a={args:{currentAccount:{id:"1",name:"Diaspora Bergensis",description:"Org.nr: 987654321",type:"company",icon:{type:"company",name:"Diaspora Bergensis"}}}},o={args:{expanded:!0}},s={args:{loading:!0}},t={args:{currentAccount:{id:"1",name:"Diaspora Bergensis",description:"Org.nr: 987654321",type:"company",icon:{type:"company",name:"Diaspora Bergensis"}},minimized:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    currentAccount: undefined
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <RootProvider languageCode="en">
      <GlobalAccountButton currentAccount={undefined} minimized={false} expanded={false} />
    </RootProvider>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    currentAccount: {
      id: '1',
      name: 'Mathias Dyngeland',
      description: 'Født: 01.01.1990',
      type: 'person',
      icon: {
        type: 'person',
        name: 'Mathias Dyngeland'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis'
      }
    },
    minimized: true
  }
}`,...t.parameters?.docs?.source}}};const M=["Login","LoginWithEnglishText","Person","Company","Expanded","Loading","MinimizedForMobile"];export{a as Company,o as Expanded,s as Loading,e as Login,n as LoginWithEnglishText,t as MinimizedForMobile,r as Person,M as __namedExportsOrder,B as default};
