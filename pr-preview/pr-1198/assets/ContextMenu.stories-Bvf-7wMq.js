import{j as t}from"./iframe-CbC-fLaY.js";import{S as b}from"./ArrowRedo-B5mvV5GM.js";import{S as v}from"./EyeClosed-elejBfJD.js";import{S as I}from"./Archive-DZm8Lj52.js";import{S as k}from"./Trash-oVpQevMD.js";import{S as w}from"./ClockDashed-B4aZfU4M.js";import{S as l}from"./TeddyBear-BggMGtyM.js";import{i as u}from"./inboxSearchResults-BfAylVRz.js";import{C as r}from"./ContextMenu-CmXEuRA_.js";import{L as x}from"./List-DoiqK_JD.js";import{L as d}from"./ListItem-CnbC7rOU.js";import{D as g}from"./DialogListItem-CBHs_9zu.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C2JQsT24.js";import"./dialogs-2ZMGLqU0.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-8VjOG9z_.js";import"./AttachmentList-DcGuQJBR.js";import"./AttachmentLink-Cumd2BtD.js";import"./Icon-DW3Nd0-m.js";import"./index-Ds9VDGIC.js";import"./Skeleton-D8kEQByH.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./tooltip-BtbQ4KG6.js";import"./Section-DypEBfCX.js";import"./Flex-DahTG4Th.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./TransmissionList-BXHpRz3n.js";import"./Transmission-BRESdqP8.js";import"./Typography-BWnrNFau.js";import"./SeenByLog-Dvcp3mk1.js";import"./SeenByLogButton-CHp1qxx5.js";import"./Button-B0m1rUs2.js";import"./AvatarGroup-CtTcTi_X.js";import"./Avatar-CmrLTlqi.js";import"./SeenByLogItem-DGUGfIj8.js";import"./Byline-BrWvWbOl.js";import"./Divider-BLGF5SlA.js";import"./DialogActions-0bYUSLQi.js";import"./ButtonGroupDivider-Bt-Y-uw7.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./DropdownBase-CiC-H4zU.js";import"./useClickOutside-CM05lRSO.js";import"./ButtonGroup-BE0BnYMw.js";import"./SearchField-yE8KzlZV.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./XMark-DvUzU3_h.js";import"./FieldBase-D2jwyGQb.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./Checkmark-8GuDUS8U.js";import"./ItemControls-gQT1qCQ5.js";import"./ChevronRight-CThQJEOF.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Dropdown-5e6GLlMG.js";import"./MenuElipsisHorizontal-DpFkC9Cn.js";import"./ItemLink-BLkR3G3D.js";import"./DialogByline-CCq6jya5.js";import"./DialogMetadata-D0yDuqBN.js";import"./DialogStatus-BQj5z6Cc.js";import"./MetaItem-BVLvgD4U.js";import"./ProgressIcon-DvhM9a8m.js";import"./Paperclip-BgCIsMPj.js";import"./Files-w-WPugSK.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
