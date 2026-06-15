import{a7 as t}from"./iframe-D-JzFSbn.js";import{S as b}from"./ArrowRedo-B7pSqWNI.js";import{S as v}from"./EyeClosed-B5DUKiPC.js";import{S as I}from"./Archive-CvXQ6eh-.js";import{S as k}from"./Trash-D3qdF3-Q.js";import{S as w}from"./ClockDashed-oddFCb0b.js";import{C as n}from"./ContextMenu-DTF5h8Vw.js";import{i as l}from"./inboxSearchResults-VRoFHNcu.js";import{S as u}from"./TeddyBear-DSiaCyBU.js";import{L as x}from"./List-BMqsgT4e.js";import{D as d}from"./DialogListItem-DXz7A4Nh.js";import{L as g}from"./ListItem-fagiPH4A.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./SearchField-Cu2rkG8b.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./useHighlightedText-kVudreWZ.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./useMenu-DF0RLrk1.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuListDivider-DzTLggx0.js";import"./MenuListHeading-B2S0HcdV.js";import"./MenuItem-wkNgjJsE.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./Heading-BuD5A-91.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ChevronRight-CnTD3zzq.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./MenuElipsisHorizontal-CYuAhYGx.js";import"./dialogs-YqJGyBSN.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C9qEPQgD.js";import"./AttachmentList-CcVgQvDm.js";import"./AttachmentLink-DAdWNGBZ.js";import"./File-DA9DY2ZK.js";import"./Section-C7pnuU7Y.js";import"./Flex-LyiOw0eI.js";import"./TransmissionList-P4adEurY.js";import"./Transmission-Bar0dIZi.js";import"./SeenByLog-C0fhVfgU.js";import"./SeenByLogButton-xyb51Zkz.js";import"./SeenByLogItem-Bi_fJ61q.js";import"./Byline-CmlzUJQ5.js";import"./Divider-C3uPnrWT.js";import"./DialogActions-DB_wy4KB.js";import"./ButtonGroupDivider-tJv6yybS.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./DropdownBase-BFX6gJu_.js";import"./useClickOutside-DSwH4LIs.js";import"./ButtonGroup-DM3FeQWD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-M7V_iwXR.js";import"./ItemLink-B5PMO6Sl.js";import"./DialogByline-DiQHditj.js";import"./DialogMetadata-Dup-Dduq.js";import"./DialogStatus-CZohJz4A.js";import"./MetaItem-CVbHTyW-.js";import"./ProgressIcon-GFKpNBhw.js";import"./Paperclip-C-3fku1V.js";import"./Files-DrTmBD7N.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
