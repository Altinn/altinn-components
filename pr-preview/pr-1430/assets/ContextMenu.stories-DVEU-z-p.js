var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-C7zNVDTT.js";import{S as I}from"./ArrowRedo-BWszVVSB.js";import{S as k}from"./EyeClosed-DPRjRn3y.js";import{S as w}from"./Archive-k3j1nRib.js";import{S as B}from"./Trash-DXsDcsqv.js";import{S as D}from"./ClockDashed-Ni0gvRCY.js";import{C as a}from"./ContextMenu-CXs2yOxo.js";import{i as u}from"./inboxSearchResults-w4arDZ3n.js";import{S as d}from"./TeddyBear-SNGiC_-p.js";import{L as h}from"./List-Eab06pgk.js";import{D as g}from"./DialogListItem-BxMWIqUC.js";import{L as y}from"./ListItem-taDywDuL.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useHighlightedText-CLjqXK08.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./Heading-gv6s55oV.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./InformationSquare-BvDWZ3oM.js";import"./MenuElipsisHorizontal-CFqNpdCJ.js";import"./dialogs-DLZzOoXM.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BrgL2Akw.js";import"./AttachmentList-Ds9QYH06.js";import"./AttachmentLink-Dx6bq-jk.js";import"./File-DFpEzsx5.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./TransmissionList-DPo2TXc8.js";import"./Transmission-DDBSCaLG.js";import"./SeenByLog-BdhoqJu8.js";import"./SeenByLogItem-BiV_dEcT.js";import"./Byline-9WqjKM1E.js";import"./SeenByLogButton-Jr5X6a2N.js";import"./Divider-B8BEf1fJ.js";import"./DialogActions-BCCwpcho.js";import"./ButtonGroup-CoqmCer7.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DuoRnkB5.js";import"./ItemLink-B4RQLXhb.js";import"./DialogByline-DN5INnh0.js";import"./DialogMetadata-c-4N3IC_.js";import"./DialogStatus-fxR0zrhT.js";import"./Paperclip-Hm1oVg6A.js";import"./Files-BmrAPL6z.js";import"./MetaBase-DH8ipdcJ.js";import"./MetaItem-CCZHpbl9.js";import"./ProgressIcon-Bl_HgUoH.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
