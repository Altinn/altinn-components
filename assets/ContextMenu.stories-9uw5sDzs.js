import{a7 as t}from"./iframe-F_FB4Yxl.js";import{S as b}from"./ArrowRedo-DovGjwZG.js";import{S as v}from"./EyeClosed-Cs3ttYjt.js";import{S as I}from"./Archive-CNHNV7Oe.js";import{S as k}from"./Trash-FK26Fd-e.js";import{S as w}from"./ClockDashed-tUg54Bgy.js";import{C as n}from"./ContextMenu-CIGiPruo.js";import{i as l}from"./inboxSearchResults-HcIARCR9.js";import{S as u}from"./TeddyBear-BJ4rcYSD.js";import{L as x}from"./List-WSKqvn9S.js";import{D as d}from"./DialogListItem-ByUGTpG1.js";import{L as g}from"./ListItem-QexinWWd.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CALQpcRF.js";import"./Dropdown-Qibhj6Vz.js";import"./SearchField-XLSYMjsy.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./FieldBase-DKsxkZ_u.js";import"./Typography-BQdVTYYF.js";import"./useHighlightedText-CJsPbXHy.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";import"./useMenu-DGY2fmdm.js";import"./MenuListItem-X5TFO5En.js";import"./MenuListDivider-Cy2nuh7X.js";import"./MenuListHeading-BlfnlMHy.js";import"./MenuItem-Cx2LMlDr.js";import"./ItemMedia-CoUbiAZN.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./Heading-Cj7rgSGX.js";import"./ItemControls-4PJArwOE.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./ChevronRight-f1WSa4_L.js";import"./InformationSquare-DJU8cSbx.js";import"./MenuElipsisHorizontal-d1d63Dvi.js";import"./dialogs-DC0E7OZi.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-wCAT1hQK.js";import"./AttachmentList-BFUNc_na.js";import"./AttachmentLink-DqAnCB21.js";import"./File-Cz15N1YA.js";import"./Section-BgR8r3RU.js";import"./Flex-QNMJxvpD.js";import"./TransmissionList-DkO8O56n.js";import"./Transmission-CbVFz-4K.js";import"./SeenByLog-96hzz4fq.js";import"./SeenByLogItem-BGkmBdDM.js";import"./Byline-DojDAdb5.js";import"./SeenByLogButton-VHc1Zw1a.js";import"./Divider-DRq0LYFI.js";import"./DialogActions-SjAb80XZ.js";import"./ButtonGroupDivider-B3GCd1Sj.js";import"./ChevronUp-BmFZO6Yq.js";import"./ChevronDown-CmhX0LZg.js";import"./DropdownBase-B-V1muku.js";import"./useClickOutside-DZIqIrpD.js";import"./ButtonGroup-BZH662VO.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B9Rg_8_o.js";import"./ItemLink-Dh937AuZ.js";import"./DialogByline-C7tHAD-Z.js";import"./DialogMetadata-DZUmtXbG.js";import"./DialogStatus-CVs7kOZg.js";import"./Paperclip-DDdjob3E.js";import"./Files-Z-15MGMb.js";import"./MetaBase-CeC2NDWj.js";import"./MetaItem-VuFvpy03.js";import"./ProgressIcon-DoYMfcgA.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
