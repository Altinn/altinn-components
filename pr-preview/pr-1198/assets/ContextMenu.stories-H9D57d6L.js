import{j as t}from"./iframe-YdRL1NzV.js";import{S as b}from"./ArrowRedo-6v2flXIv.js";import{S as v}from"./EyeClosed-qIe9hWNs.js";import{S as I}from"./Archive-C1GJOqq_.js";import{S as k}from"./Trash-Bas2iEP8.js";import{S as w}from"./ClockDashed-C354w78W.js";import{S as l}from"./TeddyBear-BhxtgGLM.js";import{i as u}from"./inboxSearchResults-CfzCLiEb.js";import{C as r}from"./ContextMenu-BsQBLQnd.js";import{L as x}from"./List-ClwLIO8W.js";import{L as d}from"./ListItem-C0qt05--.js";import{D as g}from"./DialogListItem-C6WfAOTK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxHKrSZ4.js";import"./dialogs-D3O2FXT8.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Dnh5nDwN.js";import"./AttachmentList-bNrzihUp.js";import"./AttachmentLink-DtwsZQYQ.js";import"./Icon-B4-srULI.js";import"./index-SoIsie1y.js";import"./Skeleton-C3i9Ug5T.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./tooltip-D0NJwlFT.js";import"./Section-Bmd_KobT.js";import"./Flex-8MCCOfGV.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./TransmissionList-B2nG88Kf.js";import"./Transmission-Bo-u63I5.js";import"./Typography-CYgzLoEf.js";import"./SeenByLog-LEzY61Bl.js";import"./SeenByLogButton-CvH0ZTi4.js";import"./Button-BwQOxknK.js";import"./AvatarGroup-B9OCrS5P.js";import"./Avatar-02T2Z9c_.js";import"./SeenByLogItem-BV29qnb6.js";import"./Byline-CLkrgOLm.js";import"./Divider-BCSoJ20Y.js";import"./DialogActions-CtltzfVE.js";import"./ButtonGroupDivider-Ccm8qlnp.js";import"./ChevronUp-DpeVWcyB.js";import"./ChevronDown-Uy2Tl2KH.js";import"./DropdownBase-Ds_y4ySq.js";import"./useClickOutside-_LfUsZY2.js";import"./ButtonGroup-BTJ07o1P.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./XMark-1l7ZvP46.js";import"./FieldBase-KNsWphki.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Checkmark-Ple-kG_b.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Dropdown-CFQlkMFa.js";import"./MenuElipsisHorizontal-D5EdTq6X.js";import"./ItemLink-sUnd8Dq1.js";import"./DialogByline-BUBC7t8i.js";import"./DialogMetadata-980p4U-j.js";import"./DialogStatus-C8MvAFzw.js";import"./MetaItem-DRq8ueaX.js";import"./ProgressIcon-BJK_i_VS.js";import"./Paperclip-DutSd5EV.js";import"./Files-Cpf94Yun.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
