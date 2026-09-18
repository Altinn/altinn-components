import{a7 as t}from"./iframe-DXZBp66t.js";import{S as b}from"./ArrowRedo-CAwIphET.js";import{S as v}from"./EyeClosed-C8zatELp.js";import{S as I}from"./Archive-D_fDrU6A.js";import{S as k}from"./Trash-BVvBgCOa.js";import{S as w}from"./ClockDashed-_D1rSVtE.js";import{C as n}from"./ContextMenu-BUJ5Tr27.js";import{i as l}from"./inboxSearchResults-DSxkSdMg.js";import{S as u}from"./TeddyBear-BDHJWZOS.js";import{L as x}from"./List-DtaDFrd1.js";import{D as d}from"./DialogListItem-BrmS8o6Z.js";import{L as g}from"./ListItem-cxKfvIRk.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DlFwuKli.js";import"./Dropdown-C18yy08p.js";import"./SearchField-Bxud3zBq.js";import"./MagnifyingGlass-D2DSD_Zc.js";import"./FieldBase-Cs4Gpo93.js";import"./Typography-YwBvvLgA.js";import"./useHighlightedText-D_TdPqyJ.js";import"./Field-awsdGPJZ.js";import"./Label-Byvm_JcV.js";import"./Input--Cg-6oUs.js";import"./useMenu-CLawwFGJ.js";import"./MenuListItem-Clm2r-Mx.js";import"./MenuListDivider-CFvZmzp8.js";import"./MenuListHeading-vVix4BjR.js";import"./MenuItem-iQrBISbT.js";import"./ItemMedia-C0bdVmnE.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Checkmark-B8V7JmGk.js";import"./ItemLabel-ErnjkFel.js";import"./Heading-Dabq2F6t.js";import"./ItemControls-CKEXZGvE.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./ChevronRight-Cf4DVjz-.js";import"./InformationSquare-CBzXkt4t.js";import"./MenuElipsisHorizontal-DFviO9eH.js";import"./dialogs-P4v5k2Wf.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bh7zgGdj.js";import"./AttachmentList-zJPKhKyG.js";import"./AttachmentLink-Ug1haDWc.js";import"./File-DREaHogw.js";import"./Section-CFAnjMLz.js";import"./Flex-D7Hg4_mS.js";import"./TransmissionList-DMX0mvdH.js";import"./Transmission-DAbQ-OnZ.js";import"./SeenByLog-Q9YQc6l4.js";import"./SeenByLogItem-7hTJhDAh.js";import"./Byline-l8cOkHGB.js";import"./SeenByLogButton-zphd-NL6.js";import"./Divider-y_oeW3JN.js";import"./DialogActions-QomqbGto.js";import"./ButtonGroupDivider-KugHPTHu.js";import"./ChevronUp-BmPa9GH0.js";import"./ChevronDown-nMZldMxX.js";import"./DropdownBase-DYY7O8nt.js";import"./useClickOutside-CrYcZbRI.js";import"./ButtonGroup-B2DxSKEE.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-jUefiPXL.js";import"./ItemLink-DQt-IKdJ.js";import"./DialogByline-BJTRIhnt.js";import"./DialogMetadata-Dni4Zxom.js";import"./DialogStatus-BaAfWIr7.js";import"./Paperclip-DOUailIe.js";import"./Files-bGEpoonz.js";import"./MetaBase-DoJgclwE.js";import"./MetaItem-DLqGf3dl.js";import"./ProgressIcon-DB7sgWI_.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
