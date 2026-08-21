import{a7 as t}from"./iframe-BRsjK6zm.js";import{S as b}from"./ArrowRedo-DJ88AjBh.js";import{S as v}from"./EyeClosed-TUPlbp1e.js";import{S as I}from"./Archive-_7IU2-0U.js";import{S as k}from"./Trash-B8s36VDT.js";import{S as w}from"./ClockDashed-CKKDaiAk.js";import{C as n}from"./ContextMenu-CMMvswJT.js";import{i as l}from"./inboxSearchResults-BFrSsYRE.js";import{S as u}from"./TeddyBear-BIKsg6gH.js";import{L as x}from"./List-CVWi44Xg.js";import{D as d}from"./DialogListItem-C3JJGIgd.js";import{L as g}from"./ListItem-B2uke9vo.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CBf3Z2H_.js";import"./Dropdown-C5aQ46PU.js";import"./SearchField-DVi64UUy.js";import"./MagnifyingGlass-Cybsybf0.js";import"./FieldBase-C-kV1fOX.js";import"./Typography-BVRUlHaM.js";import"./useHighlightedText-P3be0gWv.js";import"./Field-COSptDWF.js";import"./Label-DkpDVbDp.js";import"./Input-_uBO5XEg.js";import"./useMenu-D2OP8CpX.js";import"./MenuListItem-BiWM2UBU.js";import"./MenuListDivider-zBNVAq_M.js";import"./MenuListHeading-DoVWXZX2.js";import"./MenuItem-CcGRfHNR.js";import"./ItemMedia-BuhaiW7f.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./Checkmark-BGtGEGuc.js";import"./ItemLabel-DL87Mmkd.js";import"./Heading-tpemMnuB.js";import"./ItemControls-DOwQd-aH.js";import"./Badge-BbcJeGFK.js";import"./Tooltip-Bg2GzV5c.js";import"./ChevronRight-GPnb-Lf1.js";import"./InformationSquare-CJ79Iw8R.js";import"./MenuElipsisHorizontal-DwejWzSi.js";import"./dialogs-B88OU4pq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-pjUn_3pa.js";import"./AttachmentList-DGtLR2sT.js";import"./AttachmentLink-CjeZDzUy.js";import"./File-CqJFvFz4.js";import"./Section-DAR_XxTX.js";import"./Flex-CYDzZKtj.js";import"./TransmissionList-DUqxVAIm.js";import"./Transmission-DQwPlnvW.js";import"./SeenByLog-C0q3ZQZH.js";import"./SeenByLogItem-wbM86Nzy.js";import"./Byline-C7W6OXau.js";import"./SeenByLogButton-BP5lavHt.js";import"./Divider-BfJqSdO1.js";import"./DialogActions-DA1Use6D.js";import"./ButtonGroupDivider-BEqVwQCn.js";import"./ChevronUp-B4spzIlB.js";import"./ChevronDown-kQjoglkI.js";import"./DropdownBase-BS3M8Aex.js";import"./useClickOutside-0ZzD_faj.js";import"./ButtonGroup-DZmKTqxp.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-6wELWcHH.js";import"./ItemLink-CfHLQLAQ.js";import"./DialogByline-DhyogLrn.js";import"./DialogMetadata-ln4TODuf.js";import"./DialogStatus-BmngngmG.js";import"./Paperclip-Ba1wz5WU.js";import"./Files-DJnsbZUs.js";import"./MetaBase-M9FpW6sG.js";import"./MetaItem-BxBwSpPZ.js";import"./ProgressIcon-f9nHUDxu.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
