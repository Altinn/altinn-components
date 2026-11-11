var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CXqMdlCC.js";import{S as I}from"./ArrowRedo-BZqR55OG.js";import{S as k}from"./EyeClosed-BCwoFblu.js";import{S as w}from"./Archive-DLDgEUbl.js";import{S as B}from"./Trash-BZMVy5so.js";import{S as D}from"./ClockDashed-DGlKC4Mz.js";import{C as a}from"./ContextMenu-Cob_wV-j.js";import{i as u}from"./inboxSearchResults-YSC3g-Gg.js";import{S as d}from"./TeddyBear-Vvj4gypu.js";import{L as h}from"./List-C3jfbd0B.js";import{D as g}from"./DialogListItem-Cu4CrLq3.js";import{L as y}from"./ListItem-DMf_mnDA.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./SearchField-BQG9p1mb.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ItemLabel-DvzzIYMd.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronRight-DltnHqdC.js";import"./FieldBase-0KjilGfX.js";import"./Typography-B65oo-6B.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./useMenu-CqtkU6S6.js";import"./InformationSquare-ZHKJrQSE.js";import"./dialogs-DzDi17ya.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BWxMBk5d.js";import"./AttachmentList-BlyCL7vl.js";import"./File-D_gvt_TE.js";import"./Section-CK-XPJWb.js";import"./Flex-C0b8jFL9.js";import"./TransmissionList-tJdl5nrV.js";import"./Transmission-JThfUi_S.js";import"./SeenByLog-CmX4CEsG.js";import"./SeenByLogItem-BFAjK1Hi.js";import"./Byline-BhCTJ5Aa.js";import"./SeenByLogButton-TtmkV-OW.js";import"./Divider-C2JCn3uS.js";import"./DialogActions-U7Axnj6V.js";import"./ButtonGroup-ilSUnB_k.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DIYbtX2k.js";import"./ItemLink-CbXALBPD.js";import"./DialogByline-Bv6IdMOn.js";import"./DialogMetadata-kGebyqRO.js";import"./DialogStatus-Cc9AHOcJ.js";import"./Paperclip-BBOTeAje.js";import"./Files-CT3LvCTN.js";import"./Checkmark-CQaorHYz.js";import"./MetaBase-B5FvS1ql.js";import"./MetaItem-D0HKggcu.js";import"./ProgressIcon-CovP0xZ9.js";import"./ChevronUp-NZ-cp3Wt.js";import"./ChevronDown-BjOSGq_A.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
