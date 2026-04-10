import{j as t}from"./iframe-BmFIVBn_.js";import{S as b}from"./ArrowRedo-CSlIZ1zz.js";import{S as v}from"./EyeClosed-C-kxa-0B.js";import{S as I}from"./Archive-kTBarS_a.js";import{S as k}from"./Trash-eorIYi8J.js";import{S as w}from"./ClockDashed-D19_5m9-.js";import{S as l}from"./TeddyBear-BFFH_Plg.js";import{i as u}from"./inboxSearchResults-C6cvNzbU.js";import{C as r}from"./ContextMenu-BSs9gTuy.js";import{L as x}from"./List-DKOvmWxK.js";import{L as d}from"./ListItem-CaiNUw8w.js";import{D as g}from"./DialogListItem-D6p_uv4F.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ClegSKnE.js";import"./dialogs-3SdH_W9z.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cu0SCNsV.js";import"./AttachmentList-BlWh5Zw8.js";import"./AttachmentLink-CmEzMP-w.js";import"./Icon-zZDqlwOf.js";import"./index-3BUTcXKg.js";import"./Skeleton-DRn19mA6.js";import"./Badge-DoiHwmxA.js";import"./Section-8wZRyHWu.js";import"./Flex-CFezmhlL.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./TransmissionList-DP0OjmnB.js";import"./Transmission-BPwuf-2e.js";import"./Typography-CMiy0gec.js";import"./SeenByLog-CHNiJg-1.js";import"./SeenByLogButton-CCogXZRU.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Avatar-Zvdkk7EN.js";import"./SeenByLogItem-B-BMIyE7.js";import"./Byline-BGhU5n_P.js";import"./Divider-BzRFkj3B.js";import"./DialogActions-BDl0bFkE.js";import"./ButtonGroupDivider-J3W78A7-.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./DropdownBase-BLNkKCkf.js";import"./useClickOutside-DEjsvD2U.js";import"./ButtonGroup-DOYzKGQP.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./XMark-DPeWQ31a.js";import"./FieldBase-Cx6yKeh2.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Checkmark-DWNi5SDl.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Dropdown-OBdyljPV.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-1g4ibsMX.js";import"./ItemLink-CbhqGqnO.js";import"./DialogByline-BLZyfUC2.js";import"./DialogMetadata-CKbKfz4k.js";import"./DialogStatus-f92sg-i8.js";import"./Hourglass-v_nhnmq2.js";import"./MetaProgress-aB5GqF2P.js";import"./MetaItemLabel-7f6AUGMn.js";import"./ProgressIcon-Bhcs4qUh.js";import"./MetaItem-B_PqnKDS.js";import"./MetaTimestamp-BI6u6tPS.js";import"./Paperclip-CwWA-SCq.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
