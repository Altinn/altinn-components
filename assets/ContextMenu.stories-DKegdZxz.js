import{a7 as t}from"./iframe-CAfDO4Rw.js";import{S as b}from"./ArrowRedo-BA6jyWpS.js";import{S as v}from"./EyeClosed-p6KYBdyc.js";import{S as I}from"./Archive-DUqX-z_m.js";import{S as k}from"./Trash-BW5FxSER.js";import{S as w}from"./ClockDashed-lv77mCGM.js";import{C as n}from"./ContextMenu-omywxW20.js";import{i as l}from"./inboxSearchResults-DBrsiGKM.js";import{S as u}from"./TeddyBear-BOjRCC0t.js";import{L as x}from"./List-IhGHJ_0j.js";import{D as d}from"./DialogListItem-BR0tLwnd.js";import{L as g}from"./ListItem-B4Cw7EmV.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-gEOrHOh0.js";import"./Dropdown-BLYLo4fX.js";import"./SearchField-CVnH2ZZ_.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./useHighlightedText-D1Egz4xv.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";import"./useMenu-BpN0JSlm.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./Heading-YvXsCKAz.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronRight-CMD5YJ4n.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";import"./MenuElipsisHorizontal-Opnuvmqm.js";import"./dialogs-DjmF3Cwc.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BE3G0rly.js";import"./AttachmentList-DXdae8Os.js";import"./AttachmentLink-B2jJD-lG.js";import"./File-C2VTsFJJ.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./TransmissionList-DqtLGisy.js";import"./Transmission-B-ajlH_E.js";import"./SeenByLog-CQiqD6KI.js";import"./SeenByLogButton-CTQwwsb4.js";import"./SeenByLogItem-BY4d8tXW.js";import"./Byline-DmNUYBEe.js";import"./Divider-rkJRMH9u.js";import"./DialogActions-BH8hHJbd.js";import"./ButtonGroupDivider-Zi5sOWHJ.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./DropdownBase-DQsO--Zk.js";import"./useClickOutside-Cd85Pvvs.js";import"./ButtonGroup-CUCgVY-r.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BuGGJ2CO.js";import"./ItemLink-CCPRI1Ze.js";import"./DialogByline-DvuAbXKs.js";import"./DialogMetadata-Bo2hyjzs.js";import"./DialogStatus-Dkk74phK.js";import"./MetaItem-CyfsQcFy.js";import"./ProgressIcon-C10mKHXg.js";import"./Paperclip-CyPZzteP.js";import"./Files-CchMkY2N.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
