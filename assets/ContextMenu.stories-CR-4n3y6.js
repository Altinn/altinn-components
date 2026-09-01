import{a7 as t}from"./iframe-CD11FhkO.js";import{S as b}from"./ArrowRedo-DOjK9HlF.js";import{S as v}from"./EyeClosed-M0si0zz0.js";import{S as I}from"./Archive-CgLppSoK.js";import{S as k}from"./Trash-wzs9uMoD.js";import{S as w}from"./ClockDashed-O__rc6MV.js";import{C as n}from"./ContextMenu-DfXjvmV5.js";import{i as l}from"./inboxSearchResults-Cwnydr7B.js";import{S as u}from"./TeddyBear-BwRzIP3t.js";import{L as x}from"./List-C9fldcID.js";import{D as d}from"./DialogListItem-B1OQdkpg.js";import{L as g}from"./ListItem-BwiGPcXr.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Ggnaqgq1.js";import"./Dropdown-C71BxREr.js";import"./SearchField-DTHysOBi.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./FieldBase-BjWFGCCi.js";import"./Typography-CsSTPRBO.js";import"./useHighlightedText-BLIWo84c.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";import"./useMenu-PhHDaKm4.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuListDivider-C8FBE3A1.js";import"./MenuListHeading-CEMMnaXl.js";import"./MenuItem-Q62E5xuF.js";import"./ItemMedia-Da1KaWKQ.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./Heading-DRFiIxuE.js";import"./ItemControls-BM5eXiWu.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./ChevronRight-DorAbKkm.js";import"./InformationSquare-885_pUeZ.js";import"./MenuElipsisHorizontal-CFTAtZFs.js";import"./dialogs-CNyfSCxk.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CvsJ47M0.js";import"./AttachmentList-D5afP7tX.js";import"./AttachmentLink-Dxq_FBoI.js";import"./File-CnxeME3E.js";import"./Section-Cxsr3_z_.js";import"./Flex-BFs7VkGF.js";import"./TransmissionList-7a63ERWN.js";import"./Transmission-CIr4_VXu.js";import"./SeenByLog-D087XNMT.js";import"./SeenByLogItem-koe8kMVL.js";import"./Byline-DE-vJ9Ow.js";import"./SeenByLogButton-CfsgYlUp.js";import"./Divider-COQO8iSC.js";import"./DialogActions-CNUFnA0g.js";import"./ButtonGroupDivider-BUTcHO9a.js";import"./ChevronUp-BuZXJZ6x.js";import"./ChevronDown-Z-rCEWMI.js";import"./DropdownBase-BuOFBIp5.js";import"./useClickOutside-Cm3YYIpE.js";import"./ButtonGroup-CI_suWzv.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B_lF_RDH.js";import"./ItemLink-D4O7kIZI.js";import"./DialogByline-pd52s-Wu.js";import"./DialogMetadata-CE0NmGbE.js";import"./DialogStatus-bVrzgxCN.js";import"./Paperclip-f4OOSp0t.js";import"./Files-dCE_5UJv.js";import"./MetaBase-DKVG2kmn.js";import"./MetaItem-BrWI46no.js";import"./ProgressIcon-C9Ah4JoZ.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
