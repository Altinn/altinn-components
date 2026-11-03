var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-CQ8LzMHp.js";import{S as I}from"./ArrowRedo-m5BV143n.js";import{S as k}from"./EyeClosed-CwfSppzL.js";import{S as w}from"./Archive-D8VT4iDx.js";import{S as B}from"./Trash-CygTswjF.js";import{S as D}from"./ClockDashed-BNcJLMaQ.js";import{C as a}from"./ContextMenu-nxKWxJk3.js";import{i as u}from"./inboxSearchResults-CAqx7w_1.js";import{S as d}from"./TeddyBear-CV5Iq_0p.js";import{L as h}from"./List-DOKhwhdW.js";import{D as g}from"./DialogListItem-NMECWwCa.js";import{L as y}from"./ListItem-BwJteLX3.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./MenuElipsisHorizontal-Dwc1VYHN.js";import"./dialogs-CYidBpul.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BeZl9_g_.js";import"./AttachmentList-CGZBmoTp.js";import"./AttachmentLink-D18NohXJ.js";import"./File-BaeUjrCA.js";import"./Section-NN2pd56z.js";import"./Flex-DjPJH1VJ.js";import"./TransmissionList-B4o-BvXf.js";import"./Transmission-R_YqYzqz.js";import"./SeenByLog-DAUyKhlc.js";import"./SeenByLogItem-5rquWb4p.js";import"./Byline-DxUiDI_d.js";import"./SeenByLogButton-Ci-RKhSI.js";import"./Divider-d-9l0yLk.js";import"./DialogActions-DRMaNrRJ.js";import"./ButtonGroup-CwiMzic7.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-0kMSewyg.js";import"./ItemLink-DOceCTcu.js";import"./DialogByline-BfQL2WHi.js";import"./DialogMetadata-DDeiuMad.js";import"./DialogStatus-DNTIoiEN.js";import"./Paperclip-DgktZDXP.js";import"./Files-DrCcdwR8.js";import"./Checkmark-CgKKHBb_.js";import"./MetaBase-CHwapxE-.js";import"./MetaItem-sx9xEgom.js";import"./ProgressIcon-BPlvkyKr.js";import"./ChevronUp-C1AG-Aka.js";import"./ChevronDown-BCthsF-h.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},s={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await m(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await m(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Nt=["Default","ListControls","DialogControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{s as Default,p as DialogControls,c as ListControls,Nt as __namedExportsOrder,Jt as default};
