import{j as t}from"./iframe-gnB9S1An.js";import{S as b}from"./ArrowRedo-OrtX1TSQ.js";import{S as v}from"./EyeClosed-Bb81xmLC.js";import{S as I}from"./Archive-rt_tWVCY.js";import{S as k}from"./Trash-R2DUJthc.js";import{S as w}from"./ClockDashed-ZXHkruvq.js";import{S as l}from"./TeddyBear-CD0Ai5Pv.js";import{i as u}from"./inboxSearchResults-CAm1cMbE.js";import{C as r}from"./ContextMenu-lyfY76oB.js";import{L as x}from"./List-CTy1OnCl.js";import{L as d}from"./ListItem-9SoGvFex.js";import{D as g}from"./DialogListItem-BFDcU81b.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B9nFNwMW.js";import"./dialogs-CJrUv1vC.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bn0r__mx.js";import"./AttachmentList-DYwMe_ei.js";import"./AttachmentLink-DoXlG83G.js";import"./Icon-CL2c9__7.js";import"./index-C4jL9APw.js";import"./Skeleton-_K166C5F.js";import"./Badge-D2lHyQ6d.js";import"./Section-0HIHqGS0.js";import"./Flex-Dhq417nc.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./TransmissionList-DEkSeLHJ.js";import"./Transmission-yT8tiEU6.js";import"./Typography-uy1P5_7q.js";import"./SeenByLog-ByX4jVbJ.js";import"./SeenByLogButton-CdYRgCfo.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Avatar-otyGg43a.js";import"./SeenByLogItem-CzB_26Ms.js";import"./Byline-B78kYPxw.js";import"./Divider--EGssROD.js";import"./DialogActions-BclvWB98.js";import"./ButtonGroupDivider-CPu4IzmD.js";import"./ChevronUp-C8nzXkEI.js";import"./ChevronDown-CiJH-Uj-.js";import"./DropdownBase-o4XK_oxD.js";import"./useClickOutside-Dg3BIqlh.js";import"./ButtonGroup-b_-H3sds.js";import"./SearchField-CW2AroNW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./XMark-F0lxfgWB.js";import"./FieldBase-BbR80WA9.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Checkmark-D8iTH_Nd.js";import"./ItemControls-0hV_6Ao9.js";import"./ChevronRight-CmdeYhPT.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-4NcEcuey.js";import"./Dropdown-C0Ynf067.js";import"./Tooltip-D-gwYEuh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-D2vAb7CX.js";import"./ItemLink-CC8guiT_.js";import"./DialogByline-C_cg98D5.js";import"./DialogMetadata-DFaq8jkl.js";import"./DialogStatus-xb9ABpic.js";import"./Hourglass-BixJXCyu.js";import"./MetaProgress--exWmJ7F.js";import"./MetaItemLabel-DrOH0WRK.js";import"./ProgressIcon-D08xtycw.js";import"./MetaItem-B6Os2TQM.js";import"./MetaTimestamp-B-sPaRKe.js";import"./Paperclip-YCmG63MU.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
