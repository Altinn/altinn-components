var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-DZEBeon6.js";import{S as I}from"./ArrowRedo-CdcBsFuR.js";import{S as k}from"./EyeClosed-dG4eO8-r.js";import{S as w}from"./Archive-VujtsAHe.js";import{S as B}from"./Trash-E83sjO2G.js";import{S as D}from"./ClockDashed-FN7mMrSt.js";import{C as a}from"./ContextMenu-D02kvEHP.js";import{i as u}from"./inboxSearchResults-niWAcCkg.js";import{S as d}from"./TeddyBear-Dq4cyGHj.js";import{L as h}from"./List-BvRijqX6.js";import{D as g}from"./DialogListItem-C_k0pJ-9.js";import{L as y}from"./ListItem-DC7_3uyt.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D_jzgNs_.js";import"./Dropdown-CX71Aqrg.js";import"./SearchField-GPsGdyh4.js";import"./MagnifyingGlass-CTxcpUID.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListHeading-BypPBxNY.js";import"./MenuItem-BGB4ycnF.js";import"./ItemMedia-6pV5l8vT.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ChevronRight-USTqc2u1.js";import"./FieldBase-Ba-trh_u.js";import"./Typography-4TCMsL9d.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./useMenu-BVHVYpiB.js";import"./MenuListDivider-C1mJKicD.js";import"./InformationSquare-YKe2AoWI.js";import"./MenuElipsisHorizontal-BQulQNdY.js";import"./dialogs-BSEHRwQJ.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BYCrRhkS.js";import"./AttachmentList-B2jS_XSy.js";import"./AttachmentLink-BsaOL9j5.js";import"./File-nQ5zYkJt.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";import"./TransmissionList-DY-xoiMT.js";import"./Transmission-fGDUv9d2.js";import"./SeenByLog-GVk8Wl4X.js";import"./SeenByLogItem-RBeXRW2R.js";import"./Byline-5JFdG98w.js";import"./SeenByLogButton-CKopiWIm.js";import"./Divider-CQj3YKL0.js";import"./DialogActions-D_UTBZBd.js";import"./ButtonGroup-DaIoZCPY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DCtI5RfF.js";import"./ItemLink-DvbWzZwV.js";import"./DialogByline-D_4AUiDO.js";import"./DialogMetadata-D0ncwBlH.js";import"./DialogStatus-DSl3jK9X.js";import"./Paperclip-CedyfRTD.js";import"./Files-1MHnJ-QV.js";import"./MetaBase-CisrolJ4.js";import"./MetaItem-eDBhcTNC.js";import"./ProgressIcon-DKt7_Non.js";import"./ChevronUp-Bz_NdsyW.js";import"./ChevronDown-CwSFKLVt.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
