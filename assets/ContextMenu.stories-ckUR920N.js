import{a7 as t}from"./iframe-D6Pw3lmv.js";import{S as b}from"./ArrowRedo-B5ZOLLTC.js";import{S as v}from"./EyeClosed-DkRsieqq.js";import{S as I}from"./Archive-CA4pjqQu.js";import{S as k}from"./Trash-B3d5chwP.js";import{S as w}from"./ClockDashed-4YASebKO.js";import{C as i}from"./ContextMenu-BxW7sU72.js";import{i as l}from"./inboxSearchResults-CZ5hPHlP.js";import{S as u}from"./TeddyBear-Bw2-q9Xc.js";import{L as x}from"./List-yiBkID25.js";import{D as d}from"./DialogListItem-CZ89NH_N.js";import{L as g}from"./ListItem-B1hZ7A47.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./SearchField-EcYIPpv0.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./Heading-Bsu5tLR0.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronRight-DrJyRyMs.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./MenuElipsisHorizontal-Coq-MnNJ.js";import"./dialogs-DTPNlfCN.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-B5IgbVKj.js";import"./AttachmentList-D4KNVpKj.js";import"./AttachmentLink-B4EkCb0a.js";import"./File-BFUQG2XZ.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./TransmissionList-8UEFfnVm.js";import"./Transmission-Ck6F_0g4.js";import"./SeenByLog-BBeRYsXS.js";import"./SeenByLogButton-BtczMlH0.js";import"./SeenByLogItem-DfC146vE.js";import"./Byline-l1hiTfum.js";import"./Divider-BBy7x_-3.js";import"./DialogActions-DEwg7wdf.js";import"./ButtonGroupDivider-w2z4C3RV.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./DropdownBase-hYQbe75A.js";import"./useClickOutside-BbwzP0g5.js";import"./ButtonGroup-BukNZ9_Z.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D25TzUDm.js";import"./ItemLink-J0cRTxzg.js";import"./DialogByline-Cltg2q-3.js";import"./DialogMetadata-BY0OW-FI.js";import"./DialogStatus-CGzag4dP.js";import"./MetaItem-C0hlaC3d.js";import"./ProgressIcon-D9IPhIW4.js";import"./Paperclip-D_Cz5rNA.js";import"./Files-vngkdD_l.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
