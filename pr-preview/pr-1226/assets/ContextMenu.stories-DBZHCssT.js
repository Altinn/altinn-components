import{a7 as t}from"./iframe-Ci8DJ-6R.js";import{S as b}from"./ArrowRedo-CxR_k68R.js";import{S as v}from"./EyeClosed-c3aAtk_A.js";import{S as I}from"./Archive-CrsjlxL0.js";import{S as k}from"./Trash-C8Gu1dIX.js";import{S as w}from"./ClockDashed-C6MEI82i.js";import{C as n}from"./ContextMenu-DXVFrfFn.js";import{i as l}from"./inboxSearchResults-BAUt1pJs.js";import{S as u}from"./TeddyBear-8XzJrhFT.js";import{L as x}from"./List-leazRs_-.js";import{D as d}from"./DialogListItem-CG-8CnSS.js";import{L as g}from"./ListItem-BArpZyYp.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-C7yQw1zK.js";import"./Dropdown-DPTyogAf.js";import"./SearchField-BI6hQSM3.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useHighlightedText-CMND7wU2.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./useMenu-7RMszhcf.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";import"./MenuElipsisHorizontal-CrejXsZ9.js";import"./dialogs-DhrE8pAq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-STT_Px6U.js";import"./AttachmentList-AyM7R3Rp.js";import"./AttachmentLink-BVapjbwO.js";import"./File-DO2JPQxF.js";import"./Section-C3vz0YaC.js";import"./Flex-UXtVwom-.js";import"./TransmissionList-BBMQyb-L.js";import"./Transmission-5pIil_Kt.js";import"./SeenByLog-BEPGZmGV.js";import"./SeenByLogButton-D7AyNstt.js";import"./SeenByLogItem-Daw_I4Im.js";import"./Byline-DMHVuuSD.js";import"./Divider-C0aMQ7hQ.js";import"./DialogActions-DQbvEly-.js";import"./ButtonGroupDivider-CbGS_QDF.js";import"./ChevronUp-aSivYnb8.js";import"./ChevronDown-DepqY6FK.js";import"./DropdownBase-DN_tKU65.js";import"./useClickOutside-BlJRxjZp.js";import"./ButtonGroup-BYverAEg.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B5l2T3D-.js";import"./ItemLink-DgdDmtkg.js";import"./DialogByline-CJP-VdEp.js";import"./DialogMetadata-V3K-kf8H.js";import"./DialogStatus-Ca-fAZSY.js";import"./MetaItem-NGk7nWRu.js";import"./ProgressIcon-xsLzz36c.js";import"./Paperclip-C3-qst4O.js";import"./Files-CsIoPhTz.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
