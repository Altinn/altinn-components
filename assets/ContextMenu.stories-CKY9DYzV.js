import{j as t}from"./iframe-C5YDQF8t.js";import{S as b}from"./ArrowRedo-BLCJm7Mc.js";import{S as v}from"./EyeClosed-DdGfLVZ5.js";import{S as I}from"./Archive-vblwy2cE.js";import{S as k}from"./Trash-D8RBkZPj.js";import{S as w}from"./ClockDashed-CHE2RCR-.js";import{S as l}from"./TeddyBear-A0tWLTtU.js";import{i as u}from"./inboxSearchResults-BnTwiycQ.js";import{C as r}from"./ContextMenu-D457U-Bj.js";import{L as x}from"./List-Boa0b6al.js";import{L as d}from"./ListItem-Drd2VZlP.js";import{D as g}from"./DialogListItem-BGL8eHIP.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D8_RB8wa.js";import"./dialogs-LnWfoxgv.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Dv2aJFWL.js";import"./AttachmentList-B7AQVZh9.js";import"./AttachmentLink-Bl0AbJk9.js";import"./Icon-CecLgcvt.js";import"./index-Wv9BNi45.js";import"./Skeleton-Drx-E9Fo.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./Section-Dr7qREfG.js";import"./Flex-6suuLzFU.js";import"./Heading-DpfkgbSv.js";import"./useHighlightedText-n06FiY88.js";import"./TransmissionList-CEX0aO6R.js";import"./Transmission-nIhS3fVQ.js";import"./Typography-yp9Qf0rT.js";import"./SeenByLog-DsQnSFl9.js";import"./SeenByLogButton-BUq1jBtD.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Avatar-BGjXXmrj.js";import"./SeenByLogItem-CWnBjMeu.js";import"./Byline-w01tvust.js";import"./Divider-Dv1yq08v.js";import"./DialogActions-DIz0t-hd.js";import"./ButtonGroupDivider-7keb6YJA.js";import"./ChevronUp-4JOxusLP.js";import"./ChevronDown-C8XWqM8H.js";import"./DropdownBase-ZZ0efeFO.js";import"./useClickOutside-DUMp00Li.js";import"./ButtonGroup-Z2Cev14m.js";import"./SearchField-DhRNQpTW.js";import"./MagnifyingGlass-CEZChhW1.js";import"./XMark-DdTqeOk-.js";import"./FieldBase-BeNWnE8F.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Checkmark-B_9eKN07.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BRCJdC3F.js";import"./Dropdown-r5WY9yG7.js";import"./MenuElipsisHorizontal-DeUO5vCb.js";import"./ItemLink-BHq-nEBb.js";import"./DialogByline-Dy2BuGza.js";import"./DialogMetadata-DfbndZVK.js";import"./DialogStatus-BGtuHGEa.js";import"./MetaItem-b1ZHfUtc.js";import"./ProgressIcon-A503VzAy.js";import"./Paperclip-CumVX6Ac.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
