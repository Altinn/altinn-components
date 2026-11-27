var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-DS_59AwM.js";import{S as I}from"./ArrowRedo-Csyj0Al3.js";import{S as k}from"./EyeClosed-j7X1NBUF.js";import{S as w}from"./Archive-BRmXGBJj.js";import{S as B}from"./Trash-CqvnIlMZ.js";import{S as D}from"./ClockDashed-CJPcObAR.js";import{C as a}from"./ContextMenu-CCNpCnhA.js";import{i as u}from"./inboxSearchResults-CiHwkjPe.js";import{S as d}from"./TeddyBear-B_w-jPpS.js";import{L as h}from"./List-ZKKcKTbY.js";import{D as g}from"./DialogListItem-CVIt17dR.js";import{L as y}from"./ListItem-BLKKpBT1.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController--fJTxwjL.js";import"./Dropdown-DLABBFh7.js";import"./SearchField-CAjTntqL.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ItemLabel-DXVwsqWf.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronRight-C7PJPgHr.js";import"./FieldBase-Bv1sQ0dY.js";import"./Typography-DXt4lEYU.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./useMenu-30LDsNSn.js";import"./InformationSquare-DyP2GK92.js";import"./dialogs-BIMoQ2m2.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CrE7T6hf.js";import"./AttachmentList-B_wcH2or.js";import"./File-dcjuYSSr.js";import"./HiddenItems-BguHvWDi.js";import"./Section-C50awZDU.js";import"./Flex-kHR-J2An.js";import"./TransmissionList-C4RDHNyW.js";import"./Transmission-CuKhIDCh.js";import"./SeenByLog-C83gd2Ae.js";import"./SeenByLogItem-Dzk4-DsC.js";import"./Byline-Bh_ck5J2.js";import"./SeenByLogButton-SU5rer4T.js";import"./Divider-BmGfcyT4.js";import"./DialogActions-BUZ6EOuf.js";import"./ButtonGroup-BVrUrJIV.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BrUL2VDB.js";import"./ItemLink-BrauzxFU.js";import"./DialogByline-8nwJVBsh.js";import"./DialogMetadata-CAwkVGkE.js";import"./DialogStatus-CphDnzOx.js";import"./Paperclip-C8hki3Lr.js";import"./Files-CFLdt85H.js";import"./Checkmark-zqsIpaA_.js";import"./MetaBase-BmpMCUg0.js";import"./MetaItem-CYUuFdMf.js";import"./ProgressIcon-FB_PIM5O.js";import"./ChevronUp-DZ6JxO9u.js";import"./ChevronDown-CX1A4zpd.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},Gt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
