import{a7 as t}from"./iframe-CId_qj2z.js";import{S as b}from"./ArrowRedo-BzMGW-lb.js";import{S as v}from"./EyeClosed-QRXbp0xE.js";import{S as I}from"./Archive-CCdP7xw0.js";import{S as k}from"./Trash-CdB6ueTj.js";import{S as w}from"./ClockDashed-CqHp2ni-.js";import{C as n}from"./ContextMenu-Cr3y-cbT.js";import{i as l}from"./inboxSearchResults-CN2uNKyG.js";import{S as u}from"./TeddyBear-C7519YFm.js";import{L as x}from"./List-DXvLeeCM.js";import{D as d}from"./DialogListItem-D0dlic-A.js";import{L as g}from"./ListItem-UVHT4kno.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-B3cgP-Sn.js";import"./Dropdown-C5rYnJno.js";import"./SearchField-CLqhaeqA.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./useHighlightedText-B-8pDdyK.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./Heading-sNyVbkrk.js";import"./ItemControls-s3x5r9Y_.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronRight-CD2F4Mmq.js";import"./InformationSquare-DbymG94h.js";import"./MenuElipsisHorizontal-DurHs02G.js";import"./dialogs-DicxwUmJ.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-HLHshFT8.js";import"./AttachmentList-rs7PYyOw.js";import"./AttachmentLink-BJAHWY7G.js";import"./File-DcQu0ABL.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./TransmissionList-C2CQm1wH.js";import"./Transmission-7IxwdAi8.js";import"./SeenByLog-XA0ZCo37.js";import"./SeenByLogItem-CLRPdM7M.js";import"./Byline-DOwBsB16.js";import"./SeenByLogButton-IbBafQwy.js";import"./Divider-B3nRNDbv.js";import"./DialogActions-BT1I34HB.js";import"./ButtonGroupDivider-BtLQULBS.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./DropdownBase-BXrBf-TH.js";import"./useClickOutside-B3oQiLJ6.js";import"./ButtonGroup-BzI-lfVi.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Bm8A6BXO.js";import"./ItemLink-BiQUVyar.js";import"./DialogByline-CMD00kBQ.js";import"./DialogMetadata-DRQLFP3A.js";import"./DialogStatus-FFE6ikZ1.js";import"./Paperclip-Cb2_NTDV.js";import"./Files-CiLllfN2.js";import"./MetaBase-CTHTlfUu.js";import"./MetaItem-CLuHbxqk.js";import"./ProgressIcon-tN3GQmzi.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
