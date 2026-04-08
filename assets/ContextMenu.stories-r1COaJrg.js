import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Archive-D_VKIJvC.js";import{t as n}from"./ArrowRedo-DzBkTQZy.js";import{t as r}from"./ClockDashed-td0kCU9s.js";import{t as i}from"./EyeClosed-D72Zg8g-.js";import{t as a}from"./TeddyBear-BOWHyBXM.js";import{t as o}from"./Trash-CA--6OQp.js";import{t as s}from"./ListItem-DAJg57C2.js";import{t as c}from"./DialogListItem-D6k4xXOW.js";import{t as l}from"./ContextMenu-BispZrd8.js";import{t as u}from"./List-BNjZuxCc.js";import{t as d}from"./inboxSearchResults-hZXwd8_3.js";var f=e(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Menu/ContextMenu`,component:l,tags:[`autodocs`],parameters:{},args:{placement:`left`,items:[{id:`1`,groupId:`1`,icon:n,title:`Del og gi tilgang`,onClick:()=>console.log(`Del og gi tilgang clicked`)},{id:`2`,groupId:`1`,icon:i,title:`Marker som ny`},{id:`3`,groupId:`2`,icon:t,title:`Flytt til arkiv`},{id:`4`,groupId:`2`,icon:o,title:`Flytt til papirkurv`},{id:`5`,groupId:`3`,icon:r,title:`Aktivitetslogg`}]}},_={args:{id:`context-menu-default`},play:async({canvasElement:e})=>{let t=h(e),n=h(document.body),r=t.getByRole(`button`);await m.click(r),await p(n.getByRole(`group`)).toBeInTheDocument(),await m.keyboard(`{Escape}`),await p(n.queryByRole(`group`)).not.toBeInTheDocument(),await m.click(r),await m.click(e),await p(n.queryByRole(`group`)).not.toBeInTheDocument(),await m.click(r);let i=n.getByText(`Flytt til arkiv`);await m.click(i),await p(n.queryByRole(`group`)).not.toBeInTheDocument()}},v=e=>(0,f.jsxs)(u,{children:[(0,f.jsx)(s,{title:`As badge`,icon:a,linkIcon:!0,badge:(0,f.jsx)(l,{...e,placement:`right`,id:`menu-1`})}),(0,f.jsx)(s,{title:`As controls`,icon:a,controls:(0,f.jsx)(l,{...e,placement:`right`,id:`menu-2`})})]}),y=e=>{let t=d.items[0],n=d.items[1];return(0,f.jsxs)(u,{children:[(0,f.jsx)(c,{...t,controls:(0,f.jsx)(l,{...e,placement:`right`,id:`menu-1`})}),(0,f.jsx)(c,{...n,controls:(0,f.jsx)(l,{...e,placement:`right`,id:`menu-2`})})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...y.parameters?.docs?.source}}};var b=[`Default`,`ListControls`,`DialogControls`];export{_ as Default,y as DialogControls,v as ListControls,b as __namedExportsOrder,g as default};