var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-qf9-WDF6.js";import{S as I}from"./ArrowRedo-DZdU4zTU.js";import{S as k}from"./EyeClosed-q7s2xgYF.js";import{S as w}from"./Archive-u7sh-Eny.js";import{S as B}from"./Trash-BZaaSweo.js";import{S as D}from"./ClockDashed-CvnPC6A_.js";import{C as a}from"./ContextMenu-CTJnsyVJ.js";import{i as u}from"./inboxSearchResults-JefNF3ZI.js";import{S as d}from"./TeddyBear-CqoZhk8_.js";import{L as h}from"./List-lwY1Olei.js";import{D as g}from"./DialogListItem-BCV_7yZF.js";import{L as y}from"./ListItem-B1-OkTGq.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CAFbDRJV.js";import"./Dropdown-uPy0PMPK.js";import"./SearchField-_nVMBmov.js";import"./MagnifyingGlass-Cdozzsty.js";import"./MenuListItem-DipxFI8g.js";import"./MenuListDivider-jbpIOTgw.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemMedia-Fak15njE.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./ItemLabel-99ZX_KO1.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ItemControls-BmhBXfnl.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ChevronRight-NAoaHsS_.js";import"./FieldBase-D7ZJbpSW.js";import"./Typography-BcM5UJCL.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./useMenu-DZRK4ukY.js";import"./InformationSquare-Diuvkxkj.js";import"./dialogs-7lUE-ppC.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C2WDPMfD.js";import"./AttachmentList-CajxCye7.js";import"./File-BSBOsVMB.js";import"./Section-ChrYIfRO.js";import"./Flex-CKfD6hy-.js";import"./TransmissionList-B68b_O8y.js";import"./Transmission-D3l47N4V.js";import"./SeenByLog-DtPc8n-c.js";import"./SeenByLogItem-l0ae3HQt.js";import"./Byline-C9lpZQMK.js";import"./SeenByLogButton-CX4QSLJq.js";import"./Divider-R1x-egVD.js";import"./DialogActions-DWwEsiMD.js";import"./ButtonGroup-DXN6Nzfu.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-D6prNm16.js";import"./ItemLink-BIW48rc2.js";import"./DialogByline-DMlfoNI7.js";import"./DialogMetadata-CSC0Z_ZL.js";import"./DialogStatus-iR6SwfWg.js";import"./Paperclip-Dwa3nhCe.js";import"./Files-Al2ND7NJ.js";import"./Checkmark-B3HuJqdN.js";import"./MetaBase-Bqub8fZ_.js";import"./MetaItem-gCytYePp.js";import"./ProgressIcon-C9y8X81X.js";import"./ChevronUp-eh4muoQm.js";import"./ChevronDown-DGrlTQ0v.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
