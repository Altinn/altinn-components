import{a7 as t}from"./iframe-Cj7V21km.js";import{S as b}from"./ArrowRedo-ApX9n8eB.js";import{S as v}from"./EyeClosed-EUffS6R1.js";import{S as I}from"./Archive-CMBlBZQq.js";import{S as k}from"./Trash-tfnqqh8_.js";import{S as w}from"./ClockDashed-DDbcvs-B.js";import{C as i}from"./ContextMenu-BXNKEOUh.js";import{i as l}from"./inboxSearchResults-DAnFXa4v.js";import{S as u}from"./TeddyBear-BnUnAcPU.js";import{L as x}from"./List-DAmkN_iB.js";import{D as d}from"./DialogListItem-D4j_Gu8r.js";import{L as g}from"./ListItem-iMDmyxkq.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./SearchField-BEMeTu2B.js";import"./MagnifyingGlass-B8zavmyI.js";import"./FieldBase-D_BM9i5X.js";import"./Typography-B3pfG5kD.js";import"./useHighlightedText-gdz5u-yJ.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./useMenu-DM-7OZIV.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./Heading-BRQOSuW8.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ChevronRight-DWxpnRfX.js";import"./InformationSquare-NQW98JPt.js";import"./MenuElipsisHorizontal-CgwSiBWF.js";import"./dialogs-Dfk-WvSH.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-B8Ut6--f.js";import"./AttachmentList-o64aiUfb.js";import"./AttachmentLink-C0L7bOBr.js";import"./File-CMybt9Lj.js";import"./Section-fD1somlY.js";import"./Flex-CMfzrDGq.js";import"./TransmissionList-B0HwnLhS.js";import"./Transmission-DA5qccaW.js";import"./SeenByLog-CHthUlky.js";import"./SeenByLogButton-DQLNaBXr.js";import"./SeenByLogItem-FtO7R9oo.js";import"./Byline-C3WDi-X0.js";import"./Divider-slRSyerO.js";import"./DialogActions-LC7MfXyu.js";import"./ButtonGroupDivider-L0Fo_y8t.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./DropdownBase-CQEC2Gly.js";import"./useClickOutside-B_X07PY8.js";import"./ButtonGroup--sivQYNz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B85att75.js";import"./ItemLink-D-NZ4xQE.js";import"./DialogByline-9T0npfY4.js";import"./DialogMetadata-eB3tPCKw.js";import"./DialogStatus-CQkWtSeB.js";import"./MetaItem-D-fMRlwK.js";import"./ProgressIcon-DESVjq9e.js";import"./Paperclip-UD4vQLZC.js";import"./Files-DoY2bKxX.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
