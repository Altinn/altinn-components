import{j as t}from"./iframe-BM6RZuQM.js";import{S as b}from"./ArrowRedo-Bo0pSuMP.js";import{S as v}from"./EyeClosed-BRv5jtAC.js";import{S as I}from"./Archive-DxmrpUmh.js";import{S as k}from"./Trash-CeRRfZXt.js";import{S as w}from"./ClockDashed-sGix1zSO.js";import{S as l}from"./TeddyBear-DBHlmWOt.js";import{i as u}from"./inboxSearchResults-B220fXGr.js";import{C as r}from"./ContextMenu-CTWKr_fC.js";import{L as x}from"./List-6_Ms0xCG.js";import{L as d}from"./ListItem-BBnKBFME.js";import{D as g}from"./DialogListItem-CfiPOLCU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BYt_OYJh.js";import"./dialogs-LcoMUah4.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-bBklWcT1.js";import"./AttachmentList-HUBOZ4Zu.js";import"./AttachmentLink-eVyhfpr6.js";import"./Icon-m3ZEAfHU.js";import"./index-DAnedVDn.js";import"./Skeleton-DWzjK3h6.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./tooltip-DKLQ4JCb.js";import"./Section-h9TGEdkh.js";import"./Flex-DCHL4VAz.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./TransmissionList-5Dg1Ltdb.js";import"./Transmission-C2E8lNkL.js";import"./Typography-CXaseqiH.js";import"./SeenByLog-B1RswZwx.js";import"./SeenByLogButton-D36_o5vk.js";import"./Button-DhtPu9_Y.js";import"./AvatarGroup-pynF50Va.js";import"./Avatar-P_Ikblul.js";import"./SeenByLogItem-B1FGN6tI.js";import"./Byline-BTx_wYwG.js";import"./Divider-BSO9eeiw.js";import"./DialogActions-X2Vc7BkA.js";import"./ButtonGroupDivider-BOAkNbb9.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./DropdownBase-CZmKKbUs.js";import"./useClickOutside-D39Si8nh.js";import"./ButtonGroup-DLPKqiPP.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./XMark-EbOSJv8a.js";import"./FieldBase-lFVyN1xh.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Checkmark-CVccove_.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Dropdown-Cm6GAKAK.js";import"./MenuElipsisHorizontal-Bs3D9CID.js";import"./ItemLink-ADNTAdax.js";import"./DialogByline-Cb_RfoE2.js";import"./DialogMetadata-B_sc0MJm.js";import"./DialogStatus-_aJ1BUp_.js";import"./MetaItem-twcGd1zB.js";import"./ProgressIcon-DvpRscNj.js";import"./Paperclip-x0PjbURb.js";import"./Files-BLJogD_w.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
