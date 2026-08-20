import{a7 as t}from"./iframe-CfUrJ-sW.js";import{S as b}from"./ArrowRedo-Dfw5fFUV.js";import{S as v}from"./EyeClosed-DAss3OeU.js";import{S as I}from"./Archive-wjpNkncI.js";import{S as k}from"./Trash-4BxU-ya0.js";import{S as w}from"./ClockDashed-aPBnVoDd.js";import{C as n}from"./ContextMenu-NIUZQkjq.js";import{i as l}from"./inboxSearchResults-rRBwZwBF.js";import{S as u}from"./TeddyBear-zWUB3iCg.js";import{L as x}from"./List-B6WSzlp9.js";import{D as d}from"./DialogListItem-BrTYArZj.js";import{L as g}from"./ListItem-CUELnJv9.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BagG9o2A.js";import"./Dropdown-Dwhf6SNg.js";import"./SearchField-D230b6Yn.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./useHighlightedText-DCiIYobu.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./useMenu-VNE_nv00.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./Heading-CC1NzZuf.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ChevronRight-BQqjok9o.js";import"./InformationSquare-BZJWkHLO.js";import"./MenuElipsisHorizontal-DNQyfiZ2.js";import"./dialogs-gZ6TsKeI.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BOhqJ_L2.js";import"./AttachmentList-Dhy5e25L.js";import"./AttachmentLink-BgkhZkTE.js";import"./File-CM6Lcq22.js";import"./Section-CnfuXcY3.js";import"./Flex-DpzfZDgd.js";import"./TransmissionList-Dz5mkVA7.js";import"./Transmission-DPOybc4W.js";import"./SeenByLog-DDVBGmNe.js";import"./SeenByLogItem-DcraM9z6.js";import"./Byline-DTKA3ETf.js";import"./SeenByLogButton-CQ2xHM7o.js";import"./Divider-BiOZvEKa.js";import"./DialogActions-C4zjvdQB.js";import"./ButtonGroupDivider-BBlyq7nZ.js";import"./ChevronUp-rhZxrOkp.js";import"./ChevronDown-BqQbWOs1.js";import"./DropdownBase-Cs6rThqM.js";import"./useClickOutside-Z8aFqRII.js";import"./ButtonGroup-9eoCQEvr.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CCya3J9r.js";import"./ItemLink-_OyNsa5a.js";import"./DialogByline-Bh-u8USm.js";import"./DialogMetadata-U7XQnLrd.js";import"./DialogStatus-BgVnsUcg.js";import"./Paperclip-CxVl8ATV.js";import"./Files-CZZZVXTz.js";import"./MetaBase-B_u1aW3I.js";import"./MetaItem-ypfOYPvR.js";import"./ProgressIcon-DvK9F_ci.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
