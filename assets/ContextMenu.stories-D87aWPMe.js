import{j as t}from"./iframe-Cqj3AiBb.js";import{S as b}from"./ArrowRedo-asotqLuC.js";import{S as v}from"./EyeClosed-BpNISngF.js";import{S as I}from"./Archive-Brm_9A3i.js";import{S as k}from"./Trash-B8H25DCw.js";import{S as w}from"./ClockDashed-2w90gDju.js";import{S as l}from"./TeddyBear-DUVEhGuY.js";import{i as u}from"./inboxSearchResults-C-cmfDps.js";import{C as r}from"./ContextMenu-DvzTTWGt.js";import{L as x}from"./List-kmWDlagH.js";import{L as d}from"./ListItem-cfHlhQru.js";import{D as g}from"./DialogListItem-CwAqSmiR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bi-DL88I.js";import"./dialogs-BffBQTCj.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C0b3YmaB.js";import"./AttachmentList-B-h8PVF5.js";import"./AttachmentLink-BBZyrbGW.js";import"./Icon-CHi77IUK.js";import"./index-CHG1hv9Q.js";import"./Skeleton-B33vAz-c.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Section-BsXiOSXS.js";import"./Flex-DFnlILDc.js";import"./Heading-CJiOkJPI.js";import"./useHighlightedText-Cyl54eZj.js";import"./TransmissionList-D85X12fc.js";import"./Transmission-BPBEuBnh.js";import"./Typography-CV-E4tqG.js";import"./SeenByLog-DAyFtHrp.js";import"./SeenByLogButton-CYeQ3n8T.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./AvatarGroup-CmMUwf3A.js";import"./Avatar-D1U6ps5a.js";import"./SeenByLogItem-prIvVWJ4.js";import"./Byline-BT_6GGpj.js";import"./Divider-Dh6Z2_Iw.js";import"./DialogActions-R-51nvaR.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ChevronUp-BaSPXXxx.js";import"./ChevronDown-g18mW4eX.js";import"./DropdownBase-CZnlKV6Y.js";import"./useClickOutside-BfcARQKE.js";import"./ButtonGroup-HmC79Nv3.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./XMark-ReENydG3.js";import"./FieldBase-DDsWnoQi.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Checkmark-BFwQvgMU.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Dropdown-Cx7yQmcU.js";import"./MenuElipsisHorizontal-DNpXF7Es.js";import"./ItemLink-Bkhdk8v_.js";import"./DialogByline-DYKGYX3L.js";import"./DialogMetadata-CcXVqmVq.js";import"./DialogStatus-C_2zXP1p.js";import"./MetaItem-BNpPn6he.js";import"./ProgressIcon-Dos1fHVo.js";import"./Paperclip-DhIyBwic.js";import"./Files-Bp7HCD3v.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
