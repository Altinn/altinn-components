import{a7 as t}from"./iframe-Dai1liu3.js";import{S as b}from"./ArrowRedo-BT52uSFt.js";import{S as v}from"./EyeClosed-BlaO8N4X.js";import{S as I}from"./Archive-CKAhmZ-n.js";import{S as k}from"./Trash-DCzB4pSB.js";import{S as w}from"./ClockDashed-DzCDuBlo.js";import{C as i}from"./ContextMenu-D6E4TjJ4.js";import{i as l}from"./inboxSearchResults-B-LxErp6.js";import{S as u}from"./TeddyBear-Bi0I8ROl.js";import{L as x}from"./List-Ti8VfHa-.js";import{D as d}from"./DialogListItem-k57JMNC_.js";import{L as g}from"./ListItem-GmGusVG_.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D6ah7-Cm.js";import"./Dropdown-qfadPHLV.js";import"./SearchField-RxPS0VwN.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./FieldBase-CqsxpTvX.js";import"./Typography-DKU5x7uE.js";import"./useHighlightedText-DBCcFNzk.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./Input-4lJD8g37.js";import"./useMenu-Cn8ytCIG.js";import"./MenuListItem-CU8Yw_FM.js";import"./MenuListDivider-wVnt0d0h.js";import"./MenuListHeading-uHuYXsTq.js";import"./MenuItem-Bmkwg1bx.js";import"./ItemMedia-BM0esdrg.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Checkmark-B5_y3YEn.js";import"./ItemLabel-B5CnFFsc.js";import"./Heading-DmQEE02y.js";import"./ItemControls-5TCj7bye.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./ChevronRight-B3RrQIZJ.js";import"./InformationSquare-RpHoIVms.js";import"./MenuElipsisHorizontal-DksIAP7L.js";import"./dialogs-DBVWxoyL.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-B8tDlltv.js";import"./AttachmentList-Ba-_8P9F.js";import"./AttachmentLink-BAN0pq6G.js";import"./File-DZxVWQkD.js";import"./Section-SIo_MtMG.js";import"./Flex-BVj8i7c1.js";import"./TransmissionList-BjGej0gq.js";import"./Transmission-DD25xOrV.js";import"./SeenByLog-KKMEBLiQ.js";import"./SeenByLogButton-DaEx9byv.js";import"./SeenByLogItem-84h5nl7h.js";import"./Byline-BlzM78Vf.js";import"./Divider-Cp3dLTQp.js";import"./DialogActions-oQ1mh6k8.js";import"./ButtonGroupDivider-CWzPtEJ0.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./DropdownBase-DHstjE47.js";import"./useClickOutside-DtA-BvHe.js";import"./ButtonGroup-D4ZwjyVx.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DhwZCfor.js";import"./ItemLink-EKwWGdDt.js";import"./DialogByline-tlhqXphT.js";import"./DialogMetadata-UrhKMe_S.js";import"./DialogStatus-CPit7_ib.js";import"./MetaItem-B6sIlxgI.js";import"./ProgressIcon-DhMxFDh7.js";import"./Paperclip-LvAPO1Cv.js";import"./Files-b9PdSND6.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
