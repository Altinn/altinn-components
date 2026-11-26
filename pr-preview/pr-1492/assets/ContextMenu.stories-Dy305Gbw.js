var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-ucBQ5HcJ.js";import{S as I}from"./ArrowRedo-D5U_7w_f.js";import{S as k}from"./EyeClosed-BpdTplOv.js";import{S as w}from"./Archive-Ddg50if0.js";import{S as B}from"./Trash-C9fnn7OA.js";import{S as D}from"./ClockDashed-Du-UNe8Y.js";import{C as a}from"./ContextMenu-CFrUWzsT.js";import{i as u}from"./inboxSearchResults-HsFZVtxo.js";import{S as d}from"./TeddyBear-D3BknYDc.js";import{L as h}from"./List-Yx58osc0.js";import{D as g}from"./DialogListItem-0CPzoQSO.js";import{L as y}from"./ListItem-iuz8tySc.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./SearchField-0Y9a3sbc.js";import"./MagnifyingGlass-asWGm_ME.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemMedia-BkaFl7YX.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./ItemLabel-CZZsCEBi.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./ChevronRight-Vb4FEV6b.js";import"./FieldBase-BybGrojy.js";import"./Typography-z9HgrCC2.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./useMenu-zMhFd5Ju.js";import"./InformationSquare-BC6md9kr.js";import"./dialogs-CyR6aekZ.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-841Ul3bb.js";import"./AttachmentList-PS4kzogd.js";import"./File-6z9RDGI7.js";import"./Section-BY1hSuM_.js";import"./Flex-obMty-VJ.js";import"./TransmissionList-C1k9xH2K.js";import"./Transmission-BgOTaTB9.js";import"./SeenByLog-YgFCCcHn.js";import"./SeenByLogItem-rx1dKnWd.js";import"./Byline-CWiJow4a.js";import"./SeenByLogButton-BGjUjfP-.js";import"./Divider-DQyBSo88.js";import"./DialogActions-CJNHZZ1g.js";import"./ButtonGroup-57G882s-.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CwHYgeFH.js";import"./ItemLink-Dm0lO5Ir.js";import"./DialogByline-J4UH79aj.js";import"./DialogMetadata-DOK3ow2l.js";import"./DialogStatus-BV4uaXTB.js";import"./Paperclip-gps_cfs6.js";import"./Files-DvJiaOmf.js";import"./Checkmark-CqXmhnrs.js";import"./MetaBase-DIqTUw0j.js";import"./MetaItem-B4lJLD2h.js";import"./ProgressIcon-BU8CKFSY.js";import"./ChevronUp-Bnv01usE.js";import"./ChevronDown-CmXAxF6f.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
