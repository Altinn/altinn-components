import{a7 as t}from"./iframe-CsUY_6Pm.js";import{S as b}from"./ArrowRedo-DiJqPQ_Z.js";import{S as v}from"./EyeClosed-CYiCR1-R.js";import{S as I}from"./Archive-kIb2-4cW.js";import{S as k}from"./Trash-DlYZzTYR.js";import{S as w}from"./ClockDashed-BQ95pKVK.js";import{C as n}from"./ContextMenu-bLhI4Wts.js";import{i as l}from"./inboxSearchResults-vyWXxX8M.js";import{S as u}from"./TeddyBear-CGFAqZLK.js";import{L as x}from"./List-BfidzhqJ.js";import{D as d}from"./DialogListItem-81heAjlk.js";import{L as g}from"./ListItem-ac3I4IHC.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./SearchField-R79aEMhJ.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./useHighlightedText-CEZnR4nZ.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./useMenu-C86uaFsI.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./ItemLabel-CCNLeNoZ.js";import"./Heading-DbOWCbW_.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ChevronRight-JfwdXccy.js";import"./InformationSquare-DR0XxH_N.js";import"./MenuElipsisHorizontal-CtugNeIq.js";import"./dialogs-DFq5Eupd.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-8bEJg3ro.js";import"./AttachmentList-C7oKEIyE.js";import"./AttachmentLink-YTy6X7r3.js";import"./File-DXEAOqxp.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./TransmissionList-CLeMmuOK.js";import"./Transmission-0YOxS4rH.js";import"./SeenByLog-CBXxosCw.js";import"./SeenByLogItem-B5wfHKNm.js";import"./Byline-DjnpylD5.js";import"./SeenByLogButton-BQ2hMZPf.js";import"./Divider-DgndApZC.js";import"./DialogActions-CAuTxBZs.js";import"./ButtonGroupDivider-B6ldKUoe.js";import"./ChevronUp-Bv6xfL3F.js";import"./ChevronDown-B43wHz9B.js";import"./DropdownBase-IfcbtiqS.js";import"./useClickOutside-B4CoGadG.js";import"./ButtonGroup-BnfYb0Ol.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BpJAdC-Z.js";import"./ItemLink-CKOy_adf.js";import"./DialogByline-DQP2IsDT.js";import"./DialogMetadata-CQXsR3dK.js";import"./DialogStatus-usi4i_tC.js";import"./Paperclip-ocfEm49n.js";import"./Files-B1LyluEX.js";import"./Checkmark-CVdJCRST.js";import"./MetaBase-a1EjptxU.js";import"./MetaItem-B3Komjfp.js";import"./ProgressIcon-hgMf12B8.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Nt as __namedExportsOrder,Jt as default};
