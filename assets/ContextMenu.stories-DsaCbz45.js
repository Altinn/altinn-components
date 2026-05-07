import{j as t}from"./iframe-BakMcPB9.js";import{S as b}from"./ArrowRedo-BBfw7Kam.js";import{S as v}from"./EyeClosed-DJi0KI_c.js";import{S as I}from"./Archive-BR--IAyW.js";import{S as k}from"./Trash-C23JfHvO.js";import{S as w}from"./ClockDashed-CWsxc4aJ.js";import{S as l}from"./TeddyBear-ThDzPleD.js";import{i as u}from"./inboxSearchResults-CrENYfk8.js";import{C as r}from"./ContextMenu-z94PUUNE.js";import{L as x}from"./List-BrkjmLNt.js";import{L as d}from"./ListItem-xf55yvbN.js";import{D as g}from"./DialogListItem-qBG-cbzT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Btw-Kuqp.js";import"./dialogs-B1CNHHTc.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cqr3C_0m.js";import"./AttachmentList-C5-XBbsw.js";import"./AttachmentLink-kI-4rUyB.js";import"./Icon-D4ysQTre.js";import"./index-DAwqyEdM.js";import"./Skeleton-CIZGLt5B.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Section-C3ywv7P2.js";import"./Flex-73Lku4Kd.js";import"./Heading-Dpm-6zaj.js";import"./useHighlightedText-nzhiVGnc.js";import"./TransmissionList-mrSsLu93.js";import"./Transmission-BTTkgCKa.js";import"./Typography-BzplxmiV.js";import"./SeenByLog-C4FmyOdT.js";import"./SeenByLogButton-4yZg-dTe.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./AvatarGroup-DgPgqKip.js";import"./Avatar-bwZt4czp.js";import"./SeenByLogItem-CDghtOOy.js";import"./Byline-BaThz4WY.js";import"./Divider-Hrvd7glH.js";import"./DialogActions-IYv05YxS.js";import"./ButtonGroupDivider-BxtMkVsF.js";import"./ChevronUp-D-5UFsw8.js";import"./ChevronDown-DMRBxZop.js";import"./DropdownBase-D21LLzUa.js";import"./useClickOutside-n8UoA4m0.js";import"./ButtonGroup-4RnrqVmD.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./XMark-D8cLqedS.js";import"./FieldBase-B35pktZu.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Checkmark-Bv6xEUnW.js";import"./ItemControls-BIaUvdXD.js";import"./ChevronRight-C2TalX8u.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Dropdown-UmxICHKp.js";import"./MenuElipsisHorizontal-554EG_sf.js";import"./ItemLink-Dn0iTF8z.js";import"./DialogByline-CALSGz0N.js";import"./DialogMetadata-CuSGXFJ-.js";import"./DialogStatus-BUuJ38OM.js";import"./MetaItem-S-FVa9zL.js";import"./ProgressIcon-CGOhX5s1.js";import"./Paperclip-dw8uMOP-.js";import"./Files-BpQrWYUC.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Xt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Xt as __namedExportsOrder,Wt as default};
