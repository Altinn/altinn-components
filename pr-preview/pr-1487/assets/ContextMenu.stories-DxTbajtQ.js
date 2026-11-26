var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-DwHkmT0f.js";import{S as I}from"./ArrowRedo-6CwdhgqQ.js";import{S as k}from"./EyeClosed-DtQHSqTa.js";import{S as w}from"./Archive-DDASx2ii.js";import{S as B}from"./Trash-B4bAWeXV.js";import{S as D}from"./ClockDashed-8pYFR5Pn.js";import{C as a}from"./ContextMenu-CEbN3Pip.js";import{i as u}from"./inboxSearchResults-eKV6i5kJ.js";import{S as d}from"./TeddyBear-Cg0zvzih.js";import{L as h}from"./List-DiIBXxb2.js";import{D as g}from"./DialogListItem-B0YVHAo1.js";import{L as y}from"./ListItem-Bk8TBf_Z.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ItemLabel-hjkm06Ot.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";import"./dialogs-B6l7CXLv.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-zQ_3gAvj.js";import"./AttachmentList-CXchJiat.js";import"./File-LhKb0kQR.js";import"./Section-BzvI0xQr.js";import"./Flex-DUzkq__j.js";import"./TransmissionList-BLk97BjE.js";import"./Transmission-Ckst3fz0.js";import"./SeenByLog-BvIWJTr1.js";import"./SeenByLogItem-C1u_oska.js";import"./Byline-Cj00QcSW.js";import"./SeenByLogButton-CunnkKh2.js";import"./Divider-zq1-fgGC.js";import"./DialogActions-DOQEhQrw.js";import"./ButtonGroup-DYVDsbWZ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Ck4UvHPX.js";import"./ItemLink-32-6kvwj.js";import"./DialogByline-DfPwTzyV.js";import"./DialogMetadata-BGIZ3KC5.js";import"./DialogStatus-DJAh5KRL.js";import"./Paperclip-DY0uJU8B.js";import"./Files-Dm6MIX32.js";import"./Checkmark-DmU4T3LZ.js";import"./MetaBase-BqZW__fy.js";import"./MetaItem-DEe9Osk7.js";import"./ProgressIcon-DGS1Rgkr.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
