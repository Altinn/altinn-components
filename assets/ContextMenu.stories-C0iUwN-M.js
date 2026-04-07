import{j as t}from"./iframe-B1AqnzaQ.js";import{S as b}from"./ArrowRedo-BBsKLVxD.js";import{S as v}from"./EyeClosed-DvtfuPz_.js";import{S as I}from"./Archive-BQ-4sTsA.js";import{S as k}from"./Trash-DvhW7kU1.js";import{S as w}from"./ClockDashed-CC6jchBR.js";import{S as l}from"./TeddyBear-DBnZAiGO.js";import{i as u}from"./inboxSearchResults-xVrtlbsr.js";import{C as r}from"./ContextMenu-BbOAT8ce.js";import{L as x}from"./List-BG7le78U.js";import{L as d}from"./ListItem-DtW6UlaD.js";import{D as g}from"./DialogListItem-h38J6iib.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D3sFZbtB.js";import"./dialogs-DhuS-Q1X.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Dc0P6Nxv.js";import"./AttachmentList-B7Rc5dtI.js";import"./AttachmentLink-SCFUC8QP.js";import"./Icon-68Gi_xA8.js";import"./index-Ddi2Dmvi.js";import"./Skeleton-6Posg2tf.js";import"./Badge-DUhzLQsC.js";import"./Section-BiNpoqqK.js";import"./Flex-DsTgjl9e.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./TransmissionList-DQpEEdxq.js";import"./Transmission-UFJEb70b.js";import"./Typography-lvuy6SF3.js";import"./SeenByLog-CeTrcwzA.js";import"./SeenByLogButton-BYEfhcEZ.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Avatar-Dhw0Atsj.js";import"./SeenByLogItem-UdLieCnw.js";import"./Byline-KR-JBYsj.js";import"./Divider-BmD1gm9l.js";import"./DialogActions-8rZRyTyI.js";import"./ButtonGroupDivider-DeeJoG6r.js";import"./ChevronUp-DDB3rTR_.js";import"./ChevronDown-yd2Fwy4k.js";import"./DropdownBase-D9RV5RWU.js";import"./useClickOutside-CJx0BeZh.js";import"./ButtonGroup-Kwyl4wzf.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./XMark-COJVLPGF.js";import"./FieldBase-BfQZNQHG.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Checkmark-Ci7lq5dQ.js";import"./ChevronRight-BOPTtlba.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Dropdown-CFvQqfeA.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Bgx9uzOH.js";import"./DialogByline-gBIZQQeb.js";import"./DialogMetadata-CcTG9vzu.js";import"./DialogStatus-CQFNLUif.js";import"./Hourglass-Bthrx0iO.js";import"./MetaProgress-JA0e0n4V.js";import"./MetaItemLabel-DvWDqxhb.js";import"./ProgressIcon-Ce46HneR.js";import"./MetaItem-DX96mDve.js";import"./MetaTimestamp-DugnA2fz.js";import"./Paperclip-BC4CQte1.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
