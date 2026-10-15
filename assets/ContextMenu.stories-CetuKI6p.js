var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-BaqLtPTs.js";import{S as I}from"./ArrowRedo-B1VHFCb0.js";import{S as k}from"./EyeClosed-DuTNNHiS.js";import{S as w}from"./Archive-DIUg_QcS.js";import{S as B}from"./Trash-DdPBT6N6.js";import{S as D}from"./ClockDashed-BYIidY84.js";import{C as a}from"./ContextMenu-BrVBWBa2.js";import{i as u}from"./inboxSearchResults-D_QGVVIr.js";import{S as d}from"./TeddyBear-ChMlZ86b.js";import{L as h}from"./List-CSO-iXDD.js";import{D as g}from"./DialogListItem-B7YLJtUz.js";import{L as y}from"./ListItem-B1zZ41e6.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./SearchField-BCMYwn2Y.js";import"./MagnifyingGlass-D84zuplr.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./useHighlightedText-sWqW6aCW.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./useMenu-C1bmwhZm.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuListDivider-iw10_T6H.js";import"./MenuListHeading-Cp83ODWk.js";import"./MenuItem-D9hVuXrM.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./Heading-CDNNIgnR.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronRight-Dg4XRKaD.js";import"./InformationSquare-DB9gl9c1.js";import"./MenuElipsisHorizontal-VAfXYfAO.js";import"./dialogs-B-Z0aFD1.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-ywmBFHpq.js";import"./AttachmentList-ypsPSy4i.js";import"./AttachmentLink-C0R8AbGj.js";import"./File-BxMvjRkD.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./TransmissionList-CzyaHTch.js";import"./Transmission-gUfEv8e3.js";import"./SeenByLog-BDaELRdW.js";import"./SeenByLogItem-DnMCDfA4.js";import"./Byline-BEr8_98B.js";import"./SeenByLogButton-BcOHrlFJ.js";import"./Divider-BwGpb8y3.js";import"./DialogActions-Ckn22ZbH.js";import"./ButtonGroup-BJPVaBTK.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CZF7Y01p.js";import"./ItemLink-DASRyS3K.js";import"./DialogByline-0cy3KdJI.js";import"./DialogMetadata-DOR6770K.js";import"./DialogStatus-6cqqxZOD.js";import"./Paperclip-C9ePn1WV.js";import"./Files-D-pnC_NI.js";import"./MetaBase-CNzKU1H1.js";import"./MetaItem-lPqXnyRF.js";import"./ProgressIcon-BNORjHb6.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
