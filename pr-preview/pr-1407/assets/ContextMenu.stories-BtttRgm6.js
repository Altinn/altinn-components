var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a5 as e}from"./iframe-BenRi1VF.js";import{S as I}from"./ArrowRedo-CM8cT5K_.js";import{S as k}from"./EyeClosed-BxLNsgQg.js";import{S as w}from"./Archive-BQnOimYU.js";import{S as B}from"./Trash-D1ucPBDs.js";import{S as D}from"./ClockDashed-L9d5kKWy.js";import{C as a}from"./ContextMenu-DWCYTvGm.js";import{i as u}from"./inboxSearchResults-D8IMa1Ew.js";import{S as d}from"./TeddyBear-BHVCWfNY.js";import{L as h}from"./List-4vc_1Wif.js";import{D as g}from"./DialogListItem-BreFDVMH.js";import{L as y}from"./ListItem-DZ4jGznm.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./SearchField-BPBX14Ku.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./ItemLabel-lIFyccob.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ItemControls-C62YDQLR.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ChevronRight-B0Rwz_dW.js";import"./FieldBase-Blf3tEjx.js";import"./Typography-CY6bfOBd.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./useMenu-DrYFOky6.js";import"./MenuListDivider-v6fvRPAn.js";import"./InformationSquare-g2viFsxF.js";import"./MenuElipsisHorizontal-DAMpcxKP.js";import"./dialogs-BTn_D2cj.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-4qMilPCX.js";import"./AttachmentList-DR2W5BgK.js";import"./AttachmentLink-B11SoVxN.js";import"./File-B8QfmHjG.js";import"./Section-DdVAzkd7.js";import"./Flex-BtqRQeFd.js";import"./TransmissionList-b7IxEYP1.js";import"./Transmission-BU1V3vhd.js";import"./SeenByLog-2aJdRG2Z.js";import"./SeenByLogItem-bUGYvvj1.js";import"./Byline-BbatCE13.js";import"./SeenByLogButton-BFs7qVod.js";import"./Divider-DgHIbTcc.js";import"./DialogActions-DV67MNQ8.js";import"./ButtonGroup-DfExJwTd.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DRcUVeh_.js";import"./ItemLink-C36VfNvp.js";import"./DialogByline-NcaaAcQ_.js";import"./DialogMetadata-BK_PzwPy.js";import"./DialogStatus-WmbXSdrm.js";import"./Paperclip-BXp6QEyX.js";import"./Files-mLYMUV6o.js";import"./Checkmark-Dysfm6au.js";import"./MetaBase-B_eUGOds.js";import"./MetaItem-0Zn3Mwzy.js";import"./ProgressIcon-xTOQDvAd.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";const{expect:m,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},s={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await m(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await m(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await m(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Nt=["Default","ListControls","DialogControls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
