var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-Cf4UALw8.js";import{S as I}from"./ArrowRedo-CCAle-YW.js";import{S as k}from"./EyeClosed-B0q-vwQw.js";import{S as w}from"./Archive-DbxYD9lF.js";import{S as B}from"./Trash-B_p5hHVd.js";import{S as D}from"./ClockDashed-BLeXrSnX.js";import{C as a}from"./ContextMenu-DZnF37e0.js";import{i as u}from"./inboxSearchResults-B_YioIUw.js";import{S as d}from"./TeddyBear-Dclfo2rQ.js";import{L as h}from"./List-C8bvHqyv.js";import{D as g}from"./DialogListItem-Boh_eFmU.js";import{L as y}from"./ListItem-BdmDs4G2.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";import"./dialogs-BU6Yghcw.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-B7hvlh2C.js";import"./AttachmentList-B2gdev-5.js";import"./File-BaLosNIu.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./TransmissionList-9Dkae83d.js";import"./Transmission-BmtSXzAF.js";import"./SeenByLog-BwRKuZXW.js";import"./SeenByLogItem-r8KMLusj.js";import"./Byline-CQqrvp19.js";import"./SeenByLogButton-CqYd7EB7.js";import"./Divider-BlUpxxSf.js";import"./DialogActions-BhcbteTX.js";import"./ButtonGroup-Cw0djEV1.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./DialogByline-CnGvOryp.js";import"./DialogMetadata-CG69Jlyq.js";import"./DialogStatus-Mx6cvT55.js";import"./Paperclip-BlcRCygn.js";import"./Files-C2FWMwUb.js";import"./Checkmark-Dha_gRss.js";import"./MetaBase-Btz9qIEk.js";import"./MetaItem-BAglRi5S.js";import"./ProgressIcon-DVvxuurE.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
