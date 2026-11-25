var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-Df5nkPs8.js";import{S as I}from"./ArrowRedo-DgmlmzDW.js";import{S as k}from"./EyeClosed-Ca0Vc4X-.js";import{S as w}from"./Archive-BEIKmTLh.js";import{S as B}from"./Trash-_1KE3-4v.js";import{S as D}from"./ClockDashed-ChwTcSEw.js";import{C as a}from"./ContextMenu-IodN0B0m.js";import{i as u}from"./inboxSearchResults-92SwDten.js";import{S as d}from"./TeddyBear-dgZimZ95.js";import{L as h}from"./List-is81LYk6.js";import{D as g}from"./DialogListItem-BGBHjOCR.js";import{L as y}from"./ListItem-CKAIQUXg.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./SearchField-C0Yxe_69.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ItemLabel-DuyLbrJx.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronRight-DJP358BJ.js";import"./FieldBase-C4nTzDS1.js";import"./Typography-W78b6WhV.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./useMenu-gk-Zv7NC.js";import"./InformationSquare-CXwkU926.js";import"./dialogs-BeY_CAda.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CEn47mh4.js";import"./AttachmentList-7ACD9eZ-.js";import"./File-B33TLJFO.js";import"./Section-CNSG608H.js";import"./Flex-CYtO0dFj.js";import"./TransmissionList-fWsmQDHt.js";import"./Transmission-DnvRasP9.js";import"./SeenByLog-Dc4d3s12.js";import"./SeenByLogItem-Cq_QBPBr.js";import"./Byline-B553uJld.js";import"./SeenByLogButton-C1KNupAO.js";import"./Divider-CRFwcBoK.js";import"./DialogActions-CRhFfUfL.js";import"./ButtonGroup-C09nr3gY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DPSoNf_4.js";import"./ItemLink-0qGvw1wz.js";import"./DialogByline-GUt1K26F.js";import"./DialogMetadata-CnnzcJqs.js";import"./DialogStatus-D_4eZEdk.js";import"./Paperclip-Y7ewBKuG.js";import"./Files-CBQUdHbL.js";import"./Checkmark-DZ-Lmkux.js";import"./MetaBase-Deoakr1E.js";import"./MetaItem-DrFy_Plg.js";import"./ProgressIcon-BU2NqWfB.js";import"./ChevronUp-Bz4Vcv4a.js";import"./ChevronDown-DdFcAhZa.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,zt as __namedExportsOrder,Yt as default};
