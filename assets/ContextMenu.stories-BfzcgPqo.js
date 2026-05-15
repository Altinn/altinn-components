import{j as t}from"./iframe-CZMLD2fe.js";import{S as b}from"./ArrowRedo-Bb8ksXJJ.js";import{S as v}from"./EyeClosed-CoulRU1w.js";import{S as I}from"./Archive-DXvpD1-K.js";import{S as k}from"./Trash-CFAM7fxG.js";import{S as w}from"./ClockDashed-RUw66Dcn.js";import{S as l}from"./TeddyBear-CFuE5Bdj.js";import{i as u}from"./inboxSearchResults-COXh253m.js";import{C as r}from"./ContextMenu-DZna9DPo.js";import{L as x}from"./List-DD7ggiIe.js";import{L as d}from"./ListItem-rMlRzJII.js";import{D as g}from"./DialogListItem-jxxxKCy4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dmu9AgSD.js";import"./dialogs-Dbk53lSK.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Ck4lPHz1.js";import"./AttachmentList-C1XSCPvK.js";import"./AttachmentLink-CD68hJnY.js";import"./Icon-CbE8dCFV.js";import"./index-iGjPLQV7.js";import"./Skeleton-D52MvI5U.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Section-B1dSFwPq.js";import"./Flex-oWhCvzqt.js";import"./Heading-5rlhad8Q.js";import"./useHighlightedText-CmlayFSP.js";import"./TransmissionList-BWUY2VRa.js";import"./Transmission-C9pCed9t.js";import"./Typography-BegW4Ytw.js";import"./SeenByLog-8meS773S.js";import"./SeenByLogButton-BCxGvoIu.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./AvatarGroup-sNwukvT8.js";import"./Avatar-DzGFAhDt.js";import"./SeenByLogItem-C5_4ite8.js";import"./Byline-CqO2f5dT.js";import"./Divider-B_OXeHdJ.js";import"./DialogActions-BZD0j5O5.js";import"./ButtonGroupDivider-Bg56f6eB.js";import"./ChevronUp-C_Nv0CUA.js";import"./ChevronDown-Bjx7qU4A.js";import"./DropdownBase-r7FRzK3S.js";import"./useClickOutside-1kBhRGTT.js";import"./ButtonGroup-lppFG0T2.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./XMark-BBRiAlI8.js";import"./FieldBase-bsYRos9m.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Checkmark-CgCD7cxb.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Dropdown-Bx0d8Qo_.js";import"./MenuElipsisHorizontal-C-D0tdFp.js";import"./ItemLink-D5-BdpwL.js";import"./DialogByline-CE3WTQmt.js";import"./DialogMetadata-D_1yK4x2.js";import"./DialogStatus-x4XOp5ti.js";import"./MetaItem-zG01WOKF.js";import"./ProgressIcon-BbnlfQIT.js";import"./Paperclip-D3K3BZed.js";import"./Files-DoUTt0xG.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
