import{j as t}from"./iframe-BTgHnb1V.js";import{S as b}from"./ArrowRedo-Bbw-dFM4.js";import{S as v}from"./EyeClosed-C1IuUdUq.js";import{S as I}from"./Archive-D54l5aI2.js";import{S as k}from"./Trash-CNgFJdUI.js";import{S as w}from"./ClockDashed-DRgqeOpf.js";import{S as l}from"./TeddyBear-c6zWdmdJ.js";import{i as u}from"./inboxSearchResults-DOEY0_vM.js";import{C as r}from"./ContextMenu-BNqnjHRO.js";import{L as x}from"./List-D_Cei_q3.js";import{L as d}from"./ListItem-C5a5niC3.js";import{D as g}from"./DialogListItem-BN4yKSL7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DWidDjIe.js";import"./dialogs-DuQokW2C.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DZ2aeRkk.js";import"./AttachmentList-Dx6hwvHc.js";import"./AttachmentLink-DE4n2hhv.js";import"./Icon-PY6OftAR.js";import"./index-t_Anj6Qz.js";import"./Skeleton-B3M39f3D.js";import"./Badge-sZl2g-is.js";import"./Section-B92QpPhv.js";import"./Flex-ujxLNWuk.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./TransmissionList-DJC1SeVo.js";import"./Transmission-BWhqp468.js";import"./Typography-CR3zr5Vv.js";import"./SeenByLog-CCB0j96w.js";import"./SeenByLogButton-IP09Jttv.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-4I2zgroj.js";import"./Avatar-DpDT0aNa.js";import"./SeenByLogItem-DgeP2bn8.js";import"./Byline-DW7l22NR.js";import"./Divider-DeDDFaQq.js";import"./DialogActions-frkEDAGU.js";import"./ButtonGroupDivider-DWFV_Mpd.js";import"./ChevronUp-Cx3Hy4Md.js";import"./ChevronDown-BdtQrLIc.js";import"./DropdownBase-DkBWmYvT.js";import"./useClickOutside-CCvWuVdp.js";import"./ButtonGroup-CI4RwwaJ.js";import"./SearchField-Dea1MzEn.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./XMark-DMQzhoj3.js";import"./FieldBase-B5jTEalp.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Checkmark-jKAH024b.js";import"./ChevronRight-DEDRS1St.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DQ81-Fhy.js";import"./Dropdown-Dca6GJ-b.js";import"./Tooltip-CnMb4V-4.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-C3hBnT_b.js";import"./DialogByline-BLkfw24t.js";import"./DialogMetadata-BhxEOK-X.js";import"./DialogStatus-DH1-bTP0.js";import"./Hourglass-DhW1tRj-.js";import"./MetaProgress-B_5wHedk.js";import"./MetaItemLabel-D_5m_zMt.js";import"./ProgressIcon-DwTw_Ynv.js";import"./MetaItem-BH0pHSPv.js";import"./MetaTimestamp-5UPpK3dx.js";import"./Paperclip-_Rg2l9Nd.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
