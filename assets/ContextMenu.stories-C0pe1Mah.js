import{a7 as t}from"./iframe-DklMp8b9.js";import{S as b}from"./ArrowRedo-DrNtXDwS.js";import{S as v}from"./EyeClosed-B07FFsS5.js";import{S as I}from"./Archive-OjGOL5jo.js";import{S as k}from"./Trash-BjmzrZmW.js";import{S as w}from"./ClockDashed-D_U4WlsX.js";import{C as n}from"./ContextMenu-gGcdLnQv.js";import{i as l}from"./inboxSearchResults-DtOknYIv.js";import{S as u}from"./TeddyBear-sbHijtK0.js";import{L as x}from"./List-CVcEBF4a.js";import{D as d}from"./DialogListItem-VUtEp3_3.js";import{L as g}from"./ListItem-CrAQg8rM.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DMmUICAl.js";import"./Dropdown-DhZusmq8.js";import"./SearchField-1BQmUb8n.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./useHighlightedText-CQ5194gO.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./Input-DDvcPBDR.js";import"./useMenu-Dcu-XksR.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuListDivider-DdHQwvZL.js";import"./MenuListHeading-vYUhz8ky.js";import"./MenuItem-DGElsCwp.js";import"./ItemMedia-DvKDb3Qz.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./Heading-C5vDV6s5.js";import"./ItemControls-o8s7abF_.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./ChevronRight-D0aoAfw5.js";import"./InformationSquare-D2eEvTI2.js";import"./MenuElipsisHorizontal-BvtZk3Yv.js";import"./dialogs-5ZYQpRpS.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BDLDHPP0.js";import"./AttachmentList-C8dy1zis.js";import"./AttachmentLink-oxkdj-mD.js";import"./File-DuN_oUjC.js";import"./Section-DuAEz57j.js";import"./Flex-CsvoEycQ.js";import"./TransmissionList-KnhCyzpi.js";import"./Transmission-DTH3yrK3.js";import"./SeenByLog-Cf2CHlkz.js";import"./SeenByLogItem-OY2aovGU.js";import"./Byline-BE2tNCTu.js";import"./SeenByLogButton-CYTzQz3u.js";import"./Divider-C_Jo3wvY.js";import"./DialogActions-B6-cg8EU.js";import"./ButtonGroupDivider-BOXjjJyl.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./DropdownBase-ClT5KuWP.js";import"./useClickOutside-3bEx3xjh.js";import"./ButtonGroup-Vwrh_ftH.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CSc5nv8o.js";import"./ItemLink-DZ5c6nF6.js";import"./DialogByline-CjII80kx.js";import"./DialogMetadata-934C-IKV.js";import"./DialogStatus-5OPN4Ej5.js";import"./Paperclip-BYUVZW70.js";import"./Files-nedcqeNp.js";import"./MetaBase-BYrJbjCm.js";import"./MetaItem-KPKn23gw.js";import"./ProgressIcon-C5YxRCrS.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
