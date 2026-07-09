import{a7 as t}from"./iframe-BZiA3Dc9.js";import{S as b}from"./ArrowRedo-BB4h3wli.js";import{S as v}from"./EyeClosed-DzJ2GlIF.js";import{S as I}from"./Archive-BSbbJQpu.js";import{S as k}from"./Trash-DL-j6TXo.js";import{S as w}from"./ClockDashed-IS1yr7JH.js";import{C as i}from"./ContextMenu-98Gzvt6m.js";import{i as l}from"./inboxSearchResults-BpmFEQO9.js";import{S as u}from"./TeddyBear-CuoAQB8Y.js";import{L as x}from"./List-DDPijhf8.js";import{D as d}from"./DialogListItem-B6ABwA3K.js";import{L as g}from"./ListItem-C4FhKt55.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./useHighlightedText-gnIxErVs.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./Heading-DduTyBY0.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronRight-CRJJFvsY.js";import"./InformationSquare-mZWip9WA.js";import"./MenuElipsisHorizontal-C2yCxxi6.js";import"./dialogs-CULcgABo.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-5oE1hUj4.js";import"./AttachmentList-D-mPPmSs.js";import"./AttachmentLink-DWyELlxh.js";import"./File-C_yyF1Wy.js";import"./Section-B5v4sxTq.js";import"./Flex-DlKNIBbG.js";import"./TransmissionList-C6sW3MLO.js";import"./Transmission-BlZHjSR6.js";import"./SeenByLog-BSZepTSN.js";import"./SeenByLogButton-BsG7ncuK.js";import"./SeenByLogItem-BIhtHCwi.js";import"./Byline-Cqm72Kmq.js";import"./Divider-z3aWjxga.js";import"./DialogActions-DZoJKU_7.js";import"./ButtonGroupDivider-CyCQJaDt.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./DropdownBase-CoyDDbJY.js";import"./useClickOutside-DKQkdMke.js";import"./ButtonGroup-CQ4JbS4J.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DgeIJNcx.js";import"./ItemLink-essyEfxP.js";import"./DialogByline-5KRD5WPy.js";import"./DialogMetadata-D7jfUzXy.js";import"./DialogStatus-Dk0fqPaO.js";import"./MetaItem-d24CwLu4.js";import"./ProgressIcon-C4D6faKS.js";import"./Paperclip-D662rRmV.js";import"./Files-oXojg682.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
