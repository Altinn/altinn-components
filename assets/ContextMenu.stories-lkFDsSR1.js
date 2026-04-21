import{j as t}from"./iframe-BNDruhPA.js";import{S as b}from"./ArrowRedo-DtDj_Ic5.js";import{S as v}from"./EyeClosed-DSEFEc4_.js";import{S as I}from"./Archive-2uQCDMcb.js";import{S as k}from"./Trash-dW9GgNZJ.js";import{S as w}from"./ClockDashed-DgKNOZHi.js";import{S as l}from"./TeddyBear-BalDShI4.js";import{i as u}from"./inboxSearchResults-BR6iNMeI.js";import{C as r}from"./ContextMenu-UYo9LY0c.js";import{L as x}from"./List-Ckq5YGm7.js";import{L as d}from"./ListItem-CLrzKGmW.js";import{D as g}from"./DialogListItem-nFmH1btr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-28rL4Hsl.js";import"./dialogs-DX_Pk5nU.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BpGXYDaE.js";import"./AttachmentList-d35k8Evf.js";import"./AttachmentLink-BinyybPb.js";import"./Icon-Ch0vKaKK.js";import"./index-JM42q3xD.js";import"./Skeleton-3vFplc_z.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Section-CcOIv3Qj.js";import"./Flex-DdLGZodm.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./TransmissionList-Bq0DWU_A.js";import"./Transmission-CJAlMfxw.js";import"./Typography-0VzQ_bGw.js";import"./SeenByLog-Dxb8kQS8.js";import"./SeenByLogButton-CGIt7E_8.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./AvatarGroup-CBYJn5rG.js";import"./Avatar-Bc7K3VQ6.js";import"./SeenByLogItem-DGNHoAr9.js";import"./Byline-DEqke9rA.js";import"./Divider-2s9iAeFh.js";import"./DialogActions-DdgSJmTN.js";import"./ButtonGroupDivider-B-Z71K8b.js";import"./ChevronUp-dNDMwZOi.js";import"./ChevronDown-1m-leHy9.js";import"./DropdownBase-B2BHJydV.js";import"./useClickOutside-Cy7tr48u.js";import"./ButtonGroup-Cj9A7v4t.js";import"./SearchField-BS2BtTJs.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./XMark-vbUnhqfT.js";import"./FieldBase-CqddQ4KB.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Checkmark-BnLjHgWq.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-C1OwOjFZ.js";import"./Dropdown-nm23L0U7.js";import"./MenuElipsisHorizontal-Cw34yz3_.js";import"./ItemLink-B_kfJLa3.js";import"./DialogByline-CWMja2Cb.js";import"./DialogMetadata-Cr7wQl1b.js";import"./DialogStatus-b2BvtwC2.js";import"./MetaItem-BAOJsuHR.js";import"./ProgressIcon-DEDKIzRW.js";import"./Paperclip-CE94lwKo.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
