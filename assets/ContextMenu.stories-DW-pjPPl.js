import{a7 as t}from"./iframe-BOq385O8.js";import{S as b}from"./ArrowRedo-DRIgnzAr.js";import{S as v}from"./EyeClosed-DgfGayNa.js";import{S as I}from"./Archive-EAW4hj1t.js";import{S as k}from"./Trash-CZ2Z9NgZ.js";import{S as w}from"./ClockDashed-DTkkmimZ.js";import{C as n}from"./ContextMenu-66ekmVcw.js";import{i as l}from"./inboxSearchResults-DH3tBuIM.js";import{S as u}from"./TeddyBear-D1_BENwn.js";import{L as x}from"./List-D7M0evjO.js";import{D as d}from"./DialogListItem-Bc9g9L30.js";import{L as g}from"./ListItem-2JfbVmNX.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Bc426jVC.js";import"./Dropdown-B3R21JXo.js";import"./SearchField-1cIkQLXt.js";import"./MagnifyingGlass-DLwuof1g.js";import"./FieldBase-SENAbJS5.js";import"./Typography-DYb-ep--.js";import"./useHighlightedText-COTrDIB8.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./useMenu-RUc5K2KC.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./Heading-BGbBHiZX.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./ChevronRight-8gth-Lkl.js";import"./InformationSquare-ChpInVUG.js";import"./MenuElipsisHorizontal-Dl29S16F.js";import"./dialogs-DZXxcq5T.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bv8cFYWK.js";import"./AttachmentList-DaOEvsa8.js";import"./AttachmentLink-DVbPpNkd.js";import"./File-C7HHNrZX.js";import"./Section-B7vrx1o8.js";import"./Flex-CyZuoM67.js";import"./TransmissionList-CetGP0Sa.js";import"./Transmission-CyaoCY_6.js";import"./SeenByLog-B6XqlxhM.js";import"./SeenByLogItem-BQs1CBGm.js";import"./Byline-rv222U39.js";import"./SeenByLogButton-DcloZ8z9.js";import"./Divider-BZdr4uZo.js";import"./DialogActions-B5TpolzT.js";import"./ButtonGroupDivider-DKejejps.js";import"./ChevronUp-DtZBQ8_H.js";import"./ChevronDown-ByPuuZmk.js";import"./DropdownBase-BXkRV22L.js";import"./useClickOutside-CQ7LuZVi.js";import"./ButtonGroup-D8WIpAHE.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D0RDacFK.js";import"./ItemLink-CYEiKVLs.js";import"./DialogByline-SpGJt6rv.js";import"./DialogMetadata-C_2-qA6i.js";import"./DialogStatus-D2wQ5G45.js";import"./Paperclip-CSv1KO86.js";import"./Files-C0Sd7dDX.js";import"./MetaBase-CjpNPO-e.js";import"./MetaItem-BDrNFRUx.js";import"./ProgressIcon-B5J_229S.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
