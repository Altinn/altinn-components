var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-DV7mfmQb.js";import{S as I}from"./ArrowRedo-DxXqbZMa.js";import{S as k}from"./EyeClosed-D_ABwMT_.js";import{S as w}from"./Archive-PXBTQ8NB.js";import{S as B}from"./Trash-C1yoK2W5.js";import{S as D}from"./ClockDashed-wGGaML0N.js";import{C as a}from"./ContextMenu-B5CXTleL.js";import{i as u}from"./inboxSearchResults-D68MYKNz.js";import{S as d}from"./TeddyBear-CvWK9DX3.js";import{L as h}from"./List-Chcy__Pc.js";import{D as g}from"./DialogListItem-CN3f42bm.js";import{L as y}from"./ListItem-h1JSOOHz.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D9bRT85Q.js";import"./Dropdown-B1DFc__X.js";import"./SearchField-DyUxixY-.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./MenuListItem-BNAb4_WQ.js";import"./MenuListDivider-uDPIzbn6.js";import"./MenuItem-_arBrpFq.js";import"./CheckboxUncheckedIcon-W9wh7zhg.js";import"./RadioUncheckedIcon-DHe0o4Rd.js";import"./ItemMedia-CxtJxXCZ.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./ItemLabel-DhOVpPar.js";import"./Heading-qQ_NecB3.js";import"./useHighlightedText-DBlSdXli.js";import"./ItemControls-DXTFa1Wt.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./ChevronRight-y8OcgkDI.js";import"./FieldBase-BPbtcuhV.js";import"./Typography-DQaNXpVK.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";import"./useMenu-BFlkLZpJ.js";import"./InformationSquare-Z-eNQMTk.js";import"./dialogs-tgmWms7x.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BkkhAYmO.js";import"./AttachmentList-BBP-xojA.js";import"./File-Bfc1A-iw.js";import"./Section-BXLF8mP1.js";import"./Flex-DFf5qQ3F.js";import"./TransmissionList-Cod_WNfi.js";import"./Transmission-FUlhA3mO.js";import"./SeenByLog-Cs4s-9eI.js";import"./SeenByLogItem-B4M0hKfq.js";import"./Byline-OaIm3aGM.js";import"./SeenByLogButton-CrTg5a5q.js";import"./Divider-DNlHMi_J.js";import"./DialogActions-DzoSXN0_.js";import"./ButtonGroup-D14KKgW3.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-bFDQRcxo.js";import"./ItemLink-BKByZLmO.js";import"./DialogByline-E59WhmOJ.js";import"./DialogMetadata-BgoorkeV.js";import"./DialogStatus-mS69aZuC.js";import"./Paperclip-eQet8Iz1.js";import"./Files-DSrbB3gn.js";import"./Checkmark-B-M1QuTd.js";import"./MetaBase-Bzsb7Acv.js";import"./MetaItem-fuxskvA1.js";import"./ProgressIcon-DrsFxiKu.js";import"./ChevronUp-DkTvQyLF.js";import"./ChevronDown-M6oDtO0s.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
