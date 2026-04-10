import{j as t}from"./iframe-CEV_bE_y.js";import{S as b}from"./ArrowRedo-7ugXalBe.js";import{S as v}from"./EyeClosed-DKasryyK.js";import{S as I}from"./Archive-DWBVULf9.js";import{S as k}from"./Trash-DL6cPj-R.js";import{S as w}from"./ClockDashed-DSofIfrb.js";import{S as l}from"./TeddyBear-CannDpUO.js";import{i as u}from"./inboxSearchResults-D7ZwuzdJ.js";import{C as r}from"./ContextMenu-Dufoe0MX.js";import{L as x}from"./List-C-GVcOeW.js";import{L as d}from"./ListItem-CqKn_y3x.js";import{D as g}from"./DialogListItem-B59fSnfL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BHfJgDBc.js";import"./dialogs-BrQlFfHj.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CV3hoshK.js";import"./AttachmentList-B7byv8Mq.js";import"./AttachmentLink-DmJpFnYK.js";import"./Icon-BwPDmLy2.js";import"./index-CGpVDQnA.js";import"./Skeleton-cNOPtI7P.js";import"./Badge-BVMw9Rw0.js";import"./Section-BaBnzd0n.js";import"./Flex-BZtJmJL5.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./TransmissionList-CqjwfG7y.js";import"./Transmission-el6KL60i.js";import"./Typography-BMVOyH8m.js";import"./SeenByLog-DLmZXCZO.js";import"./SeenByLogButton-Dgqs3FTk.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DHx4XjXe.js";import"./Avatar-Cf5aI0ZG.js";import"./SeenByLogItem-BxCFyJjV.js";import"./Byline-BOLAP6vM.js";import"./Divider-DYQFWbxY.js";import"./DialogActions-CB-iSmlG.js";import"./ButtonGroupDivider-BOlJgfYF.js";import"./ChevronUp-BgDvj3-f.js";import"./ChevronDown--HTcc5lI.js";import"./DropdownBase-BnZ2mdI4.js";import"./useClickOutside-DXo94wLb.js";import"./ButtonGroup-D8NAEtXB.js";import"./SearchField-C9XAkfHX.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./XMark-ByuttVGc.js";import"./FieldBase-D397wWlI.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Checkmark-D-WBqViW.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-COGXRvNW.js";import"./Dropdown--G_NTa0P.js";import"./Tooltip-CRnr2OHK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CPhYoHNE.js";import"./ItemLink-CMOTTmp_.js";import"./DialogByline-D-uSPz_m.js";import"./DialogMetadata-CVURGBT9.js";import"./DialogStatus-CN5PRuAX.js";import"./Hourglass-C7btLE1c.js";import"./MetaProgress-BOS4ZG_p.js";import"./MetaItemLabel-ykVDqIRQ.js";import"./ProgressIcon-QBysTppt.js";import"./MetaItem-DgH3pXXq.js";import"./MetaTimestamp-BMf8xShT.js";import"./Paperclip-CeF6R1tA.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
