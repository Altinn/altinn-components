import{a7 as t}from"./iframe-B2qSCuzl.js";import{S as b}from"./ArrowRedo-D_Cyqv0n.js";import{S as v}from"./EyeClosed-CBTgqy41.js";import{S as I}from"./Archive-l9uRDAtU.js";import{S as k}from"./Trash-DxBU9Rfy.js";import{S as w}from"./ClockDashed-DuvS0HtT.js";import{C as i}from"./ContextMenu-nwu6xbhA.js";import{i as l}from"./inboxSearchResults-C3jSWC5o.js";import{S as u}from"./TeddyBear-Bn1hQTsr.js";import{L as x}from"./List-CHDOpQxZ.js";import{D as d}from"./DialogListItem-cM7eDS1n.js";import{L as g}from"./ListItem-DsEnLTXV.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-B1sM5Fkl.js";import"./Dropdown-CXjz9DNR.js";import"./SearchField-M5wz_Je4.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./FieldBase-LsrXuCdT.js";import"./Typography-CidHk-ga.js";import"./useHighlightedText-BGZ3rca6.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";import"./useMenu-4wlPj4vw.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./ItemMedia-C3fquT_8.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./Heading-BraOiwz9.js";import"./ItemControls-i4q63th9.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./ChevronRight-CE-Naqr7.js";import"./index-L4tlORLO.js";import"./InformationSquare-Bz2aeVSU.js";import"./MenuElipsisHorizontal-B1j_W8j_.js";import"./dialogs-BATOp924.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-S2hH7FLm.js";import"./AttachmentList-DCzTXYrs.js";import"./AttachmentLink-0kI8cgLC.js";import"./File-Cg4G2T_1.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";import"./TransmissionList-30tjgc8e.js";import"./Transmission-BREEyPkx.js";import"./SeenByLog-DCZUUodm.js";import"./SeenByLogButton-GYYkN8GN.js";import"./SeenByLogItem-BW98GjnB.js";import"./Byline-uBpvUPL7.js";import"./Divider-HnqZMYFb.js";import"./DialogActions-gevkikPx.js";import"./ButtonGroupDivider-BoAXm-c3.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./DropdownBase-BH57kWyw.js";import"./useClickOutside-BWF6KiVj.js";import"./ButtonGroup-DPqV5ihn.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BlhljEQ3.js";import"./ItemLink-BLJ5L0E3.js";import"./DialogByline-CqjSCldT.js";import"./DialogMetadata-UEeD3iAD.js";import"./DialogStatus-Bj6EQJmD.js";import"./MetaItem-BGSOtzp8.js";import"./ProgressIcon-DxmJytC0.js";import"./Paperclip-Dl3fTbEV.js";import"./Files-DKoRc6NA.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
