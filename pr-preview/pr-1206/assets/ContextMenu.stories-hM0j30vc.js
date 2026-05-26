import{p as t}from"./iframe-Ca1pxjCh.js";import{S as b}from"./ArrowRedo-DVHisnmv.js";import{S as v}from"./EyeClosed-CIaek4aR.js";import{S as I}from"./Archive-XJdMJ4po.js";import{S as k}from"./Trash-CHO3PH3Q.js";import{S as w}from"./ClockDashed-BAsUGnWe.js";import{C as r}from"./ContextMenu-CZ_jSmTp.js";import{i as l}from"./inboxSearchResults-BhJivulm.js";import{S as u}from"./TeddyBear-DUAWWiMO.js";import{L as x}from"./List-m_iXYTHM.js";import{D as d}from"./DialogListItem-CqR6ZJ-a.js";import{L as g}from"./ListItem-ByBUwGe5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DKdvhqLE.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./index-qsemo-NB.js";import"./Button-BUoYLOjU.js";import"./tooltip-DBInG_0S.js";import"./XMark-D_G5yHBr.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useHighlightedText-B4z3dUTF.js";import"./Skeleton-CjJRr45L.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./useMenu-CVV4ErAO.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronRight-Dx7-HhpA.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./MenuElipsisHorizontal-Bwy8rMfn.js";import"./dialogs-CGepTSLy.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BmHMrsVx.js";import"./AttachmentList-CND_MbEI.js";import"./AttachmentLink-Dx55U1YN.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";import"./TransmissionList-DyzBLg45.js";import"./Transmission-hGpHZBtN.js";import"./SeenByLog-BTCWVWDt.js";import"./SeenByLogButton-CC7IVpCt.js";import"./SeenByLogItem-BRzMOLbf.js";import"./Byline-Bxl3RlNN.js";import"./Divider-PfDhNxjV.js";import"./DialogActions-rU3wetNT.js";import"./ButtonGroupDivider-BSgO7uL3.js";import"./ChevronUp-njmytnHj.js";import"./ChevronDown-BSf8h3gX.js";import"./DropdownBase-CYBDhg00.js";import"./useClickOutside-DwiiATPj.js";import"./ButtonGroup-Bt3kIkZr.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemLink-BZQvVEJ1.js";import"./DialogByline-DbBUNchc.js";import"./DialogMetadata-ConXnwtD.js";import"./DialogStatus-B5g0Y4SN.js";import"./MetaItem-SG1w26bo.js";import"./ProgressIcon-CHnd0F5x.js";import"./Paperclip-Dpwn8Tkx.js";import"./Files-TRruNfjE.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
