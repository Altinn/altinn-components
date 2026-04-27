import{j as t}from"./iframe-B56t8i7v.js";import{S as b}from"./ArrowRedo-BU7XyluJ.js";import{S as v}from"./EyeClosed-G_1mo8GH.js";import{S as I}from"./Archive-C86xORiC.js";import{S as k}from"./Trash-CCj34_zQ.js";import{S as w}from"./ClockDashed-wryP5gNL.js";import{S as l}from"./TeddyBear-D0qKMGJZ.js";import{i as u}from"./inboxSearchResults-CiMombhe.js";import{C as r}from"./ContextMenu-WzTnKvto.js";import{L as x}from"./List-Cf0-_oGc.js";import{L as d}from"./ListItem-DXm9Ifb4.js";import{D as g}from"./DialogListItem-uAofvqim.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Ce_44NzT.js";import"./dialogs-Dzi-2XDN.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CxtYu3xN.js";import"./AttachmentList-blzAhauI.js";import"./AttachmentLink-CejqY68I.js";import"./Icon-CgN9F-ql.js";import"./index-CHgNdXFp.js";import"./Skeleton-Cer98cLN.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./Section-DXg-mnVx.js";import"./Flex-BSViFEWJ.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./TransmissionList-H61x7SQt.js";import"./Transmission-DjYB2efi.js";import"./Typography-C36VcWyw.js";import"./SeenByLog-CsUXDIFQ.js";import"./SeenByLogButton-D6U2MHOI.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./AvatarGroup-kqIJtB4O.js";import"./Avatar-_1995Z8x.js";import"./SeenByLogItem-kHesz-4f.js";import"./Byline-BYqSnbZ1.js";import"./Divider-BSd8txhR.js";import"./DialogActions-CDmRM-RJ.js";import"./ButtonGroupDivider-CubiqsGU.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./DropdownBase-C18X2TO4.js";import"./useClickOutside-D5Pq4X4m.js";import"./ButtonGroup-DUjF8sgK.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./XMark-CQR84vCO.js";import"./FieldBase-BkGCBc8B.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Checkmark-cFLQXWmW.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Dropdown-CjWcilfw.js";import"./MenuElipsisHorizontal-CC_TKBZM.js";import"./ItemLink-CR2F4UR3.js";import"./DialogByline-DSfh2uCs.js";import"./DialogMetadata-C3wobFH0.js";import"./DialogStatus-idNnz76R.js";import"./MetaItem-CbvUjGB_.js";import"./ProgressIcon-BBTgu9fm.js";import"./Paperclip-CfzmQspy.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
