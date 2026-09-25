import{G as l}from"./GlobalMenuButton-C2qNbC_k.js";import"./iframe-C7-WWuUz.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuHamburger-C7i5GpCo.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";const{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,b={title:"Layout/GlobalMenuButton",component:l,tags:["autodocs"],parameters:{layout:"centered"},args:{}},e={args:{}},a={args:{expanded:!0}},n={args:{badge:{variant:"base",color:"alert",label:"2"}}},t={globals:{viewport:{value:"mobile1"}},parameters:{screenshot:{skip:!0}},play:async({canvasElement:o})=>{const s=i(o),c=s.getByText("Menu");await r(c.getBoundingClientRect().width).toBeLessThanOrEqual(1),await r(s.getByRole("button",{name:"Menu"})).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    badge: {
      variant: 'base',
      color: 'alert',
      label: '2'
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Closed","Open","WithBadge","NarrowScreen"];export{e as Closed,t as NarrowScreen,a as Open,n as WithBadge,w as __namedExportsOrder,b as default};
