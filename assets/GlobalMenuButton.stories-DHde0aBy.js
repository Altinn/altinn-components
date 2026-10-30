var i=Object.defineProperty;var o=(r,e)=>i(r,"name",{value:e,configurable:!0});import{G as p}from"./GlobalMenuButton-BBIPux6p.js";import"./iframe-BEPBrhYh.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuHamburger-CXEb9Ato.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";const{expect:c,within:u}=__STORYBOOK_MODULE_TEST__,B={title:"Layout/GlobalMenuButton",component:p,tags:["autodocs"],parameters:{layout:"centered"},args:{}},a={args:{}},n={args:{expanded:!0}},t={args:{badge:{variant:"base",color:"alert",label:"2"}}},s={globals:{viewport:{value:"mobile1"}},parameters:{screenshot:{skip:!0}},play:o(async({canvasElement:r})=>{const e=u(r),l=e.getByText("Menu");await c(l.getBoundingClientRect().width).toBeLessThanOrEqual(1),await c(e.getByRole("button",{name:"Menu"})).toBeInTheDocument()},"play")},y=["Closed","Open","WithBadge","NarrowScreen"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    badge: {
      variant: 'base',
      color: 'alert',
      label: '2'
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1'
    }
  },
  // storycap captures after the viewport has been reset, so a baseline here would
  // show the desktop rendering. The play function is the regression guard instead.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // Below 479px the label is visually hidden, so this asserts we are actually
    // exercising the narrow-screen branch and not passing vacuously at desktop width.
    const label = canvas.getByText('Menu');
    await expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);

    // The button must still have an accessible name while the label is hidden.
    await expect(canvas.getByRole('button', {
      name: 'Menu'
    })).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};export{a as Closed,s as NarrowScreen,n as Open,t as WithBadge,y as __namedExportsOrder,B as default};
