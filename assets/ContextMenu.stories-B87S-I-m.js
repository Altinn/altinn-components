import{j as t}from"./iframe-aFNUvxii.js";import{S as b}from"./ArrowRedo-DzlvqA5b.js";import{S as v}from"./EyeClosed-C8wjsZGa.js";import{S as I}from"./Archive-CsRyWol-.js";import{S as k}from"./Trash-CL4Cjfxa.js";import{S as w}from"./ClockDashed-DpEl0pcn.js";import{S as l}from"./TeddyBear-BWwRV_p2.js";import{i as u}from"./inboxSearchResults-ELixRIKM.js";import{C as r}from"./ContextMenu-Q0cpQIs-.js";import{L as x}from"./List-BFyaa2z4.js";import{L as d}from"./ListItem-BlzUsJv5.js";import{D as g}from"./DialogListItem-B-b5i2Fa.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-W_OLMGMd.js";import"./dialogs-B9bx0Pin.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-bEE5RxIZ.js";import"./AttachmentList-Ba-31SDz.js";import"./AttachmentLink-BXPuKAqW.js";import"./Icon-DC5Qp50u.js";import"./index-DmNdTbFH.js";import"./Skeleton-Cd5GNeeI.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./Section-BIq-JpVN.js";import"./Flex-DARe3czq.js";import"./Heading-F0__TKrp.js";import"./useHighlightedText-DGtjyph8.js";import"./TransmissionList-BTAp0Lxa.js";import"./Transmission-BWgPReQx.js";import"./Typography-Co9p8t4Z.js";import"./SeenByLog-CgfikTOh.js";import"./SeenByLogButton-Bg4SnWfr.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Avatar-DUHlMNex.js";import"./SeenByLogItem-D_vNjATo.js";import"./Byline-BtOWHU9J.js";import"./Divider-BylZJaCS.js";import"./DialogActions-BpUNhuK0.js";import"./ButtonGroupDivider-BWsibbzd.js";import"./ChevronUp-DqbXbD5l.js";import"./ChevronDown-CHfhU-Uc.js";import"./DropdownBase-Bjqd0u3d.js";import"./useClickOutside-p5uwDvYI.js";import"./ButtonGroup-Cv-I5W75.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./XMark-BNsj9R6R.js";import"./FieldBase-Bx4PyUkS.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Checkmark-CrF1sW3U.js";import"./ItemControls-BgCWQjxP.js";import"./ChevronRight-B0RIPM-U.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-MoNgRnPR.js";import"./Dropdown-C8yUJUHT.js";import"./MenuElipsisHorizontal-BORchHTr.js";import"./ItemLink-DcFOssNC.js";import"./DialogByline--A3uB3li.js";import"./DialogMetadata-BLk3GywC.js";import"./DialogStatus-sTG4g2hZ.js";import"./MetaItem-CwHe1IDu.js";import"./ProgressIcon-DUaVmNi7.js";import"./Paperclip-CY9V8ZeY.js";import"./Files-DINLMFue.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
