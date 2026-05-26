import{j as t}from"./iframe-CdkbiINU.js";import{S as b}from"./ArrowRedo-BAZOK10H.js";import{S as v}from"./EyeClosed-Dt2PSaKq.js";import{S as I}from"./Archive-5hJJ1NJt.js";import{S as k}from"./Trash-D4pY1Rc-.js";import{S as w}from"./ClockDashed-Da5zW20o.js";import{S as l}from"./TeddyBear-C_Hc3Sug.js";import{i as u}from"./inboxSearchResults-Cy8cjF2P.js";import{C as r}from"./ContextMenu-DKrW1DIT.js";import{L as x}from"./List-aGBfRfyr.js";import{L as d}from"./ListItem-CivujPX4.js";import{D as g}from"./DialogListItem-BByA70m_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BBNwfwR-.js";import"./dialogs-CDbUdbLf.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DXA42-yX.js";import"./AttachmentList-YNaBYZqr.js";import"./AttachmentLink-BSp5IwFw.js";import"./Icon-Cn1mWE7M.js";import"./index-ClUlC5r_.js";import"./Skeleton-DNrLKFK9.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./tooltip-ClrKYCC2.js";import"./Section-CxpgG4VY.js";import"./Flex-B60SO79o.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./TransmissionList-CT4EDE6M.js";import"./Transmission-DoIKCKCZ.js";import"./Typography-CbNgqrog.js";import"./SeenByLog-BYQgoOuk.js";import"./SeenByLogButton-BW0LCyMq.js";import"./Button-DbqBa2Ra.js";import"./AvatarGroup-XhgZMwS_.js";import"./Avatar-Dqj4y4ce.js";import"./SeenByLogItem-BtP9wLGI.js";import"./Byline-C6b88TbQ.js";import"./Divider-BUmLpEgb.js";import"./DialogActions-DqXD3zLy.js";import"./ButtonGroupDivider-Buidn4Ls.js";import"./ChevronUp-zAhIBGoC.js";import"./ChevronDown-DqPtLl_G.js";import"./DropdownBase-C46S0t4k.js";import"./useClickOutside-Dhv-Q2RK.js";import"./ButtonGroup-rFZEcV2R.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./XMark-CXTea0I2.js";import"./FieldBase-CADFK9ds.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Checkmark-B8HStk1Z.js";import"./ItemControls-2WNlOUKw.js";import"./ChevronRight-WcqCaCSB.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Dropdown-B3ZWUXYU.js";import"./MenuElipsisHorizontal-Drry6q8X.js";import"./ItemLink-uRj7Y6jT.js";import"./DialogByline-Dl3k45eE.js";import"./DialogMetadata-CYX75hrx.js";import"./DialogStatus-Bc6WhyWs.js";import"./MetaItem-BgqY3nTo.js";import"./ProgressIcon-Doi3rmxL.js";import"./Paperclip-BlHBNGLa.js";import"./Files-Cf3XZkhL.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
