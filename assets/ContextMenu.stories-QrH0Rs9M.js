import{a7 as t}from"./iframe-Bg-ykIGY.js";import{S as b}from"./ArrowRedo-DfZiN6jC.js";import{S as v}from"./EyeClosed-CLbRV27R.js";import{S as I}from"./Archive-65IAQloY.js";import{S as k}from"./Trash-D0nu_cWD.js";import{S as w}from"./ClockDashed-Bghefrp6.js";import{C as n}from"./ContextMenu-55s2ID-Y.js";import{i as l}from"./inboxSearchResults-CwHaoFIy.js";import{S as u}from"./TeddyBear-DRGK-53R.js";import{L as x}from"./List-Cc9en0ov.js";import{D as d}from"./DialogListItem-BeZpI3Bk.js";import{L as g}from"./ListItem-TtjgHak_.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Bq5ui6IL.js";import"./Dropdown-BqiaInOV.js";import"./SearchField-BC3zApJG.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./useHighlightedText-pfd0QjZv.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./useMenu-TQu19WT_.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./ItemMedia-CbKN8wGb.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./Heading-BKVhZ0mC.js";import"./ItemControls-ChQuM1Jl.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ChevronRight-BubW3AYp.js";import"./InformationSquare-CVG9J0Nh.js";import"./MenuElipsisHorizontal-vrQ73KRy.js";import"./dialogs-0oAfNQiL.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-jmsoyAPj.js";import"./AttachmentList-DXLgUd7P.js";import"./AttachmentLink-BsBImolJ.js";import"./File-Bi2_R2Se.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./TransmissionList-o84CphSe.js";import"./Transmission-wTr-8UH_.js";import"./SeenByLog-DnYrUgbd.js";import"./SeenByLogItem-FmzdRa1W.js";import"./Byline-CBCSzTOX.js";import"./SeenByLogButton-DsevNz-T.js";import"./Divider-i4XKetPt.js";import"./DialogActions-GROuPOAN.js";import"./ButtonGroupDivider-C7_LpWEb.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./DropdownBase-DcBtBFYB.js";import"./useClickOutside-BPYomMlB.js";import"./ButtonGroup-D3TFK-sP.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-oVSLgwcy.js";import"./ItemLink-D1jwa25l.js";import"./DialogByline-KIeMS5FF.js";import"./DialogMetadata-oKopXolf.js";import"./DialogStatus-Cr_d0dDR.js";import"./Paperclip-YOxJTAo-.js";import"./Files-R65SD84X.js";import"./MetaBase-CYdVvDBw.js";import"./MetaItem-DdEbXDQK.js";import"./ProgressIcon-BCYe0fBj.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
