import{a7 as t}from"./iframe-RnExGCnN.js";import{S as b}from"./ArrowRedo-DFH2-rRE.js";import{S as v}from"./EyeClosed-DohH2g6A.js";import{S as I}from"./Archive-CdtSNR_W.js";import{S as k}from"./Trash-D4qqih4r.js";import{S as w}from"./ClockDashed-B4nuCGxu.js";import{C as n}from"./ContextMenu-DW3csCOG.js";import{i as l}from"./inboxSearchResults-ByjQ6OGs.js";import{S as u}from"./TeddyBear-Dw6a1sbg.js";import{L as x}from"./List-CY0yYtOa.js";import{D as d}from"./DialogListItem-CTxicNxP.js";import{L as g}from"./ListItem-DU4tohCc.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BoOePyNF.js";import"./Dropdown-B88VU_C4.js";import"./SearchField-vIwRNxpu.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./useHighlightedText-wXuVfUlk.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./Heading-Ds8TW_p4.js";import"./ItemControls-g4j5xbWR.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronRight-CN6Km5wu.js";import"./InformationSquare-CRikKN32.js";import"./MenuElipsisHorizontal-DgcAgh_d.js";import"./dialogs-DGcvT0Kn.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-2DSRrULI.js";import"./AttachmentList-cSoa2EXN.js";import"./AttachmentLink-6pu77m_w.js";import"./File-Dcq5H8md.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./TransmissionList-tW5KHE8c.js";import"./Transmission-euk1xbGx.js";import"./SeenByLog-BPXSXLnm.js";import"./SeenByLogItem-CKFNCfc_.js";import"./Byline-DsvvFWAw.js";import"./SeenByLogButton-B3vftTJ4.js";import"./Divider-DV7P9Vl3.js";import"./DialogActions-D5kcsM1T.js";import"./ButtonGroupDivider-DH04zCn7.js";import"./ChevronUp-B2SXqU3E.js";import"./ChevronDown-CHkfpXTu.js";import"./DropdownBase-4-lYqlQn.js";import"./useClickOutside-wBuCN4EL.js";import"./ButtonGroup-CxEAmlK5.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Ca-fo2iM.js";import"./ItemLink-teTwYyz-.js";import"./DialogByline-C_IxwGS-.js";import"./DialogMetadata-BXmOnHx2.js";import"./DialogStatus-DwqZmljr.js";import"./Paperclip-D3-3B1Jl.js";import"./Files-Dqtzlekv.js";import"./MetaBase-BYrgEQRD.js";import"./MetaItem-LGOcByNC.js";import"./ProgressIcon-DvDVG88b.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
