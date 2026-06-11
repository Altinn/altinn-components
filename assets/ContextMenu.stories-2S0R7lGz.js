import{a7 as t}from"./iframe-CvGAoPsc.js";import{S as b}from"./ArrowRedo-D8_G_rFT.js";import{S as v}from"./EyeClosed-2mWlLEN5.js";import{S as I}from"./Archive-DGmHtxge.js";import{S as k}from"./Trash-DafTCCNM.js";import{S as w}from"./ClockDashed-BesnLeVl.js";import{C as i}from"./ContextMenu-XF95haZj.js";import{i as l}from"./inboxSearchResults-CLfx-gDI.js";import{S as u}from"./TeddyBear-z-tIoFu4.js";import{L as x}from"./List-DsJgCFOz.js";import{D as d}from"./DialogListItem-hCZMZPtH.js";import{L as g}from"./ListItem-CuEPEVad.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DHE3Yfxx.js";import"./Dropdown-wMqb1yc7.js";import"./SearchField-BnKKet4K.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Typography-BnX3Du0Y.js";import"./useHighlightedText-9vbrUFu0.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./Input-CQ0xvTw5.js";import"./useMenu-CZTVrDBq.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuListHeading-CgytQ4SA.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./Heading--2u1ER42.js";import"./ItemControls-CFHaIVdN.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./ChevronRight-CMCEl43v.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";import"./MenuElipsisHorizontal-BGx_HU9M.js";import"./dialogs-Dsm3NRbC.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DNLuvKQ-.js";import"./AttachmentList-Cl_cnASc.js";import"./AttachmentLink-DE65Rlkl.js";import"./File-BbnM_6o9.js";import"./Section-25rkGJ0B.js";import"./Flex-DO5C4y-8.js";import"./TransmissionList-CKVi_Th-.js";import"./Transmission-C_nuK8hw.js";import"./SeenByLog-BN-wKaah.js";import"./SeenByLogButton-RNulvzeC.js";import"./SeenByLogItem-DJ_KZN-P.js";import"./Byline-CWR-GxDU.js";import"./Divider-Dnx3nDKK.js";import"./DialogActions-B-rZH_zq.js";import"./ButtonGroupDivider-BlUvmc5K.js";import"./ChevronUp-BlXkTO7h.js";import"./ChevronDown-CQ4dl58P.js";import"./DropdownBase-3On_0BwZ.js";import"./useClickOutside-Dnauafqx.js";import"./ButtonGroup-CN_FlQBy.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DqG20n5b.js";import"./ItemLink-mA2zY14C.js";import"./DialogByline-BXv7O3Xm.js";import"./DialogMetadata-b2DvH5yE.js";import"./DialogStatus-B96e-vEc.js";import"./MetaItem-XUdHxdjr.js";import"./ProgressIcon-CfwYxLjF.js";import"./Paperclip-Dl4FRSdV.js";import"./Files-DQ5z_L5u.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
