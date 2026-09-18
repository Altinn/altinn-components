import{a7 as t}from"./iframe-IRVPXNFV.js";import{S as b}from"./ArrowRedo-SBQaG7M4.js";import{S as v}from"./EyeClosed-DrBA2BvN.js";import{S as I}from"./Archive-D24RP1Wk.js";import{S as k}from"./Trash-3AGSyQl4.js";import{S as w}from"./ClockDashed-BpTRYOrR.js";import{C as n}from"./ContextMenu-Bplb67T8.js";import{i as l}from"./inboxSearchResults-8sxz8o7n.js";import{S as u}from"./TeddyBear-CP30D7Ol.js";import{L as x}from"./List-Df8LU2dy.js";import{D as d}from"./DialogListItem-DgwMtp2u.js";import{L as g}from"./ListItem-R48brKy_.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DopJQueH.js";import"./Dropdown-DwPiUxwC.js";import"./SearchField-Bpwou897.js";import"./MagnifyingGlass-C_Mjm1Zn.js";import"./FieldBase-DMT9IhQO.js";import"./Typography-B61DVKU1.js";import"./useHighlightedText-CG_8__up.js";import"./Field-DlQFxQyh.js";import"./Label-Di1y72qz.js";import"./Input-CgzWa5OM.js";import"./useMenu-Z61iJGID.js";import"./MenuListItem-DCSMARma.js";import"./MenuListDivider-DU-lQLUQ.js";import"./MenuListHeading-C_D2K51_.js";import"./MenuItem-CiVcHyvu.js";import"./ItemMedia-DU76sJ68.js";import"./Avatar-drWAMmf1.js";import"./AvatarGroup-Caex7Tu5.js";import"./Checkmark-D5V-_R2S.js";import"./ItemLabel-CfB3mva_.js";import"./Heading-DjAzNFDQ.js";import"./ItemControls-Bn-WW8C9.js";import"./Badge-CAyEKJhq.js";import"./Tooltip-D0XSM2S5.js";import"./ChevronRight-Bn5bOelp.js";import"./InformationSquare-Bchi5e6i.js";import"./MenuElipsisHorizontal-D9YhkAkN.js";import"./dialogs-Bquf7uNq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bw7G9mOn.js";import"./AttachmentList-CMbEN-ve.js";import"./AttachmentLink-tjDKayr_.js";import"./File-IAFPYOie.js";import"./Section-D1bZZmzH.js";import"./Flex-oS8OWrEi.js";import"./TransmissionList-B4t0E_5K.js";import"./Transmission-Di_es0Sg.js";import"./SeenByLog-BJJskzWl.js";import"./SeenByLogItem-Cvkx4XnI.js";import"./Byline-CTWBWW2_.js";import"./SeenByLogButton-DN-B8-aW.js";import"./Divider-C5FLhITY.js";import"./DialogActions-BnQIdHAq.js";import"./ButtonGroupDivider-U6X8ZaTX.js";import"./ChevronUp-XQJa99GN.js";import"./ChevronDown-BYfLgaaQ.js";import"./DropdownBase-CBb0hyyH.js";import"./useClickOutside-BZ2rBNYv.js";import"./ButtonGroup-BVNMP4FP.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DtEv3ijz.js";import"./ItemLink-DatqdAYi.js";import"./DialogByline-DrApHYCS.js";import"./DialogMetadata-C5_hY8j4.js";import"./DialogStatus-Du-2TJ-M.js";import"./Paperclip-DvyyiXzu.js";import"./Files-CMrcDsdx.js";import"./MetaBase-ByvgbjEw.js";import"./MetaItem-iY6YAqy3.js";import"./ProgressIcon-BNS54QPc.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
